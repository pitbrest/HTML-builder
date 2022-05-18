const path = require('path');
const fs = require('fs');
const process = require('process');
const adress = path.join(__dirname, 'text.txt');

const readline = require('readline');
const { stdin: input, stdout: output } = require('process');

const rl = readline.createInterface({ input, output });

console.log('Hi all, nice to meet you !!!');

rl.question('Type youre message here, please ...\n', (answer) => {
	fs.writeFile(adress, answer, () => { });
});
rl.on('line', (input) => {
	fs.appendFile(adress, '\n' + input, () => { });
});
process.on('beforeExit', () => {
	console.log('Good by my friend, see you later.');
});


