let rl = require("readline");  
let LRU = require('./LRU');
const inquirer = require('inquirer');

class LRUImplementation{
    constructor(){
        this.lruCache = null;
        this.prompts = rl.createInterface(process.stdin, process.stdout);  
    }

    start(){
        console.log('Welcome to LRU Cache Implementation in Node\n\n');
        this.showOption();
    }

    showOption(){
        let options = ['1. Create new cache', '2. Enter value to cache', '3. Read value from cache', '4. Remove value from cache', '5. Display cache', '6. Clear cache', '7. Exit'];
        inquirer
            .prompt([
                {
                type: 'list',
                name: 'action',
                message: 'What would you like to do?',
                choices: options
                },
            ])
            .then(answers => {
                switch(options.indexOf(answers.action)){
                    case 0: 
                        this.createNewCache();
                        break;
                    case 1: 
                        this.addToCache();
                        break;
                    case 2: 
                        this.actionByKey(0);
                        break;
                    case 3: 
                        this.actionByKey(1);
                        break;
                    case 4: 
                        console.log('\nDisplaying Cache')
                        this.lruCache.display();
                        this.showOption();
                        break;
                    case 5: 
                        console.log('\nClearing cache.')
                        this.lruCache.clear();
                        this.showOption();
                        break;
                    case 6: 
                        console.log('\n\nExiting.')
                        if(this.lruCache)
                            this.lruCache.clear();
                        return;
                    default: 
                        this.invalidOption();
                }
            });
    }

    invalidOption(){
        console.log('Invalid Option Selected!\n\n')
        this.showOption();
    }

    isExistsCache(){
        if(!this.lruCache)
            return false;
        else
            return true;
    }

    createNewCache(){
        if(!this.ifExistsCache){
            inquirer.prompt([
                {
                    name: 'cacheSize',
                    message: 'Enter max size of cache'
                },
            ])
            .then(answers => {
                this.lruCache = new LRU(answers.cacheSize);
                console.info(`Cache with size ${answers.cacheSize} created\n`);
                this.showOption();
            });
        }
    }

    addToCache(){
        if(this.isExistsCache()){
            let key, value;
            inquirer.prompt([
                {
                    name: 'key',
                    message: 'Enter the key',
                },
                {
                    name: 'value',
                    message: 'Enter the value',
                },
            ])
            .then(answers => {
                value = answers.value;
                key = answers.key;
                this.lruCache.write(key,value);
                console.info(this.lruCache.head);
                this.showOption();
            });
        }
    }

    actionByKey(action){
        if(this.isExistsCache()){
            let value;
            inquirer.prompt([
                {
                    name: 'key',
                    message: 'Enter the key',
                }
            ])
            .then(answers => {
                if(action == '1'){
                    this.lruCache.remove(answers.key);
                    console.info(`Key ${answers.key} removed from cache`)
                }
                else{
                    value = this.lruCache.read(answers.key);
                    console.info(`The value of cache key ${answers.key} is ${value}\n`);
                }                
                this.showOption();
            });
        }
    }
}

module.exports = LRUImplementation;