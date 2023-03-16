//Tratamento de erros

const chalk = require('chalk');
const fs = require('fs');

const trataErro = (err) => {
    throw new Error(chalk.red(err.code, "Caminho icorreto"))
}

const getFile = () => {
    fs.readFile('./files/fileX.txt', 'utf-8', (err, data) => {
        if(err){
            return trataErro(err)
        }

        return console.log(chalk.green(data))
    })
}


getFile()