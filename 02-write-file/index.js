// Работает но записывает только 1 сообщение

const path = require('path');
const fs = require('fs');
const process = require('process');

console.log('Привет дорогой друг !!!');

const readline = require('readline')
  .createInterface({
    input: process.stdin,
    output: process.stdout
  });

readline.question('Введите Ваше сообщение', text => {
  const adress = path.join(__dirname, 'text.txt');

  fs.writeFile(adress, text, () => {}); 
});

process.on('beforeExit', () => {
  console.log('Прощай дорогой друг, до скорой встречи !');
});