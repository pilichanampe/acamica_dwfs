

var chalk = require('chalk');
var axios = require('axios');
console.log(chalk.white.bgRed.bold('16'));

axios.get('https://api.chucknorris.io/jokes/random').then(function(response) {
    
})