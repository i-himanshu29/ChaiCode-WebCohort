- Firstly we use pnpm instead of npm

- Secondly - Api Calling wwith axios with the help of standard method

- Thirdly - Using Cached Server

## Problems 
1.It is local caching, suppose we have 3 servers and if one server cached then another 2 server do not have cached.

2. Cache clear karna headache hai
3. All the 3 Servers have to clear their cache
4.Implement LRU(least recently used) own yourself.
5.If server crashed then all data lost

- Technically - new set of problem unlock ho gye
Hence Redis came and say i solved all the problem 
and make a standard for everyone

# this folder in action from here -> 
# Docker compose file
create a docker-compose.yml file and installed 
- docker pull redis
- docker compose up -d

dependencies -
- pnpm i ioredis

Run : pnpm dev

You can Start a new Server : export PORT = 8001 && pnpm dev
You can Start a new Server : export PORT = 8002 && pnpm dev

In both the cases cache hit

Now this is distributed

# Valkey
valkey is a dropin replacement for redis