# lruCache
A node implementation of an lrucache

Uses the [inquirer](https://github.com/SBoudrias/Inquirer.js) package to create a command line interface

## Explanation

Class LRU which is the lru cache function.

### Class LRU
- constructor(limit) which creates a cache and sets the limit
- write(key, value) which adds a key, value pair to cache
- remove(key) which removes the key from cache
- read(key) which reads the values by key from cache and pushes it to front of cache
- clear() which clears the cache and sets it to null

### Class LRUImplementation 
- uses the LRU class and provides a command line interface for usages


## Usage

Clone the repository.

Then  npm install.

node index.js 


### In order to use the LRU class, create an object of the class and use accordingly.