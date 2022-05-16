const path = require('path');
const fs = require('fs');
const adress = path.join(__dirname, 'text.txt');

console.log('Привет дорогой друг !!!');

const readline = require('readline')
  .createInterface({
    input: process.stdin,
    output: process.stdout
  });

readline.question('Введите Ваше сообщение', text => {  
  
  const stream = new fs.ReadStream(text, {encoding: 'utf-8'});

  stream.on('data', () => {      
    let data = stream.read();
    fs.writeFile(adress, data, 'utf8', (err) => {
      if(err || text.length === 0) {
        throw new Error('Введите тест пожалуйста :)');
      }
    });			
  });
  
  // stream.on('end', () => {   
  //   console.log('Прощай дорогой друг. До скорой встречи !!!');
  // }); 
 
});



// Работает но записывает только 1 сообщение

// const path = require('path');
// const fs = require('fs');

// console.log('Привет дорогой друг !!!');

// const readline = require('readline')
//   .createInterface({
//     input: process.stdin,
//     output: process.stdout
//   });

// readline.question('Введите Ваше сообщение', text => {
//   let textFileAdress = path.join(__dirname, 'text.txt');
//   fs.writeFile(textFileAdress, text, 'utf8', (err) => {
//     if(err || text.length === 0) {
//       throw new Error('Введите тест пожалуйста :)');
//     }
//   });			
//   readline.close();
// });