const chalk = require('chalk');
const fs = require('fs');

const getFile = () => {
    fs.readFile('./files/file1.txt', 'utf-8', (err, data) => {
        if(err !== null){
            return console.log(chalk.red(err))
        }

        return console.log(chalk.green(data))
    })
}


getFile()