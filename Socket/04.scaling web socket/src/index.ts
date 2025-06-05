import express from 'express'
import axios from "axios"
import { Redis } from 'ioredis';
import http from 'http';
import { Server } from "socket.io"

const app = express();//express server
const state = new Array(100).fill(false);
const redis = new Redis({ host: 'localhost', port: Number(6379) })

const publisher = new Redis({ host: 'localhost', port: Number(6379) });
const subscriber = new Redis({ host: 'localhost', port: Number(6379) });

const httpServer = http.createServer(app);//http server[Express server ko mount kar diya http pr ]
const io = new Server();//socket server
io.attach(httpServer);
const stateKey = 'state1'
redis.setnx('stateKey ',JSON.stringify(new Array(100).fill(false)));

subscriber.subscribe('server:broker');
subscriber.on('message',(channel , message)=>{
    const {event,data} = JSON.parse(message)
    state[data.index]  = data.value;
    io.emit(event ,data) // called 'relay' karna
})
io.on('connection', (socket) => {
    console.log(`Socket Connected`, socket.id);
    socket.on('message', (msg) => {
        io.emit('server-message', msg) // broadcast to all the connected clients
    });

    socket.on('checkbox-update', async (data) => {
        const state = await redis.get('stateKey ');
        if(state){
            const parseState = JSON.parse(state)
            parseState[data.index] = data.value;
            await redis.set('stateKey ',JSON.stringify(parseState))
        }
        await publisher.publish('server:broker', JSON.stringify({ event: 'checkbox-update', data }))
    });
   
});

const PORT = process.env.PORT ?? 8000;





app.use(express.static('./public'));


//rate limit
app.use(async function (req, res, next) {
    const key = 'rate-limit';
    const value = await redis.get(key);

    if (value === null) {
        await redis.set(key, 0);
        await redis.expire(key, 60);
    }

    if (value && Number(value) > 100) {
        return res.status(429).json({ message: 'Too Many Requests' });
    }

    redis.incr(key)
    next();
});


app.get('/state', async(req, res) => {
    const state = await redis.get('stateKey ')
    if(state){
        const parseState = JSON.parse(state);
        return res.json({state:parseState});
    }
    return res.json({ state:[] });
})

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