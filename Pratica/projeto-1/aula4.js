//Promessas

const chalk = require('chalk');
const fs = require('fs');

const trataErro = (err) => {
    throw new Error(chalk.red(err.code, "Caminho icorreto"))
}

const getFile = () => {
    fs.promises.readFile('./files/file1.txt', 'utf-8')
        .then((data) => console.log(chalk.green(data)))
        .catch((err) => trataErro(err))
}


getFile()