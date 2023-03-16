//Promessas

const chalk = require('chalk');
const fs = require('fs');

const getFile = async (path) => {
    try{
        const texto = await fs.promises
            .readFile(path, 'utf-8')
        //console.log(chalk.green(texto))
        return texto
    }
    catch(e){
        //console.log(chalk.red(e))
        return "Ocorreu um erro"
    }
}

module.exports = getFile