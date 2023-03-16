const chalk = require('chalk');
const fs = require('fs');



console.log(chalk.blue("Vamos começar"))

const paragrafo = 'Texto retornado por uma função'

function texto(string){
    return string;
}

console.log(texto(paragrafo));