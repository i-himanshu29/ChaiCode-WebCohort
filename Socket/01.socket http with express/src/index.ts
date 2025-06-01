import express from 'express'
import axios from "axios"
import { Redis } from 'ioredis';
import http from 'http';


const app = express();
const httpServer = http.createServer(app);

const PORT = process.env.PORT ?? 8000;


const redis = new Redis({ host: 'localhost', port: Number(6379) })

//rate limit
app.use(async function (req, res, next) {
    const key = 'rate-limit';
    const value = await redis.get(key);

    if (value === null) {
        await redis.set(key, 0);
        await redis.expire(key, 60);
    }

    if (value && Number(value) > 10) {
        return res.status(429).json({ message: 'Too Many Requests' });
    }

    redis.incr(key)
    next();
});




app.get("/", (req, res) => {
    return res.json({ status: 'success' })
})


app.get('/books', async (req, res) => {
    const response = await axios.get('https://api.freeapi.app/api/v1/public/books');
    return res.json(response.data);
})


app.get('/books/total', async (req, res) => {
    // For check Caching 
    const cachedValue = await redis.get("totalPageValue")
    if (cachedValue) {
        console.log(`Cache Hits`)
        return res.json({ totalPageCount: Number(cachedValue) });
    }


    const response = await axios.get('https://api.freeapi.app/api/v1/public/books');
    const totalPageCount = response?.data?.data?.data.reduce((acc: number, curr: { volumeInfo?: { pageCount?: number } }) => !curr.volumeInfo?.pageCount ? 0 : curr.volumeInfo.pageCount + acc, 0);

    await redis.set("totalPageValue", totalPageCount)

    console.log(`Cache Miss`)
    return res.json({ totalPageCount });
})

httpServer.listen(PORT, () => console.log(`Http Server is Running on PORT ${PORT}`))