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