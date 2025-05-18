import http from 'http'
import {env }from './env'
import { logger } from './logger';
import {error} from 'console';
import { createApp } from './app';

async function main(){
    try{
        // process.env is a string so typecast it into number
        // const PORT:number = +(process.env.PORT ?? 8000)
        
        // const PORT:number = +(env.PORT || 8000)//it can be like that but we will prefer/best below one
        const PORT:number = +(env.PORT ?? 8000)
        // process.env.PORT - i don't like becoz yaha par kuch bh access kar sakte hai like that - POORT
        // so that's why we use zod
        const server = http.createServer();
        
        server.listen(PORT,()=>{
            logger.info(`Server is running on PORT ${PORT}`);
        });
    }catch(err){
        logger.error(`Error starting server`,err);
    }
}
