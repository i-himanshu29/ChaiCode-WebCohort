import express from 'express'
import axios from "axios"
import { Redis } from 'ioredis';

const app = express();

const PORT = process.env.PORT ?? 8000;


const redis = new Redis({host:'localhost',port:Number(6379)})





//Queue System

//                LPUSH (video-url)  API Server : 8000 <----------Video URL(video-url)
// Redis[video-url3,video-url2,video-url]
// Redis[video-url3,video-url2,]
//                         RPULL      video Processor video-url



// redis.lpush('video-queue','video-url')
// redis.lpush('video-queue','video-url')

// redis.lpush('video-queue','video-url')





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
    if( cachedValue){
        console.log(`Cache Hits`)
        return res.json({totalPageCount:Number(cachedValue)});
    }


    const response = await axios.get('https://api.freeapi.app/api/v1/public/books');
    const totalPageCount = response?.data?.data?.data.reduce((acc: number, curr: {volumeInfo ?:{ pageCount?: number }}) => !curr.volumeInfo?.pageCount ? 0:curr.volumeInfo.pageCount + acc, 0);

    await redis.set("totalPageValue",totalPageCount)

    console.log(`Cache Miss`)
    return res.json({totalPageCount});
})


app.listen(PORT, () => console.log(`Server is running at PORT ${PORT}`));