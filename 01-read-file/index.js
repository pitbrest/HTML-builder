const path = require('path');
const fs = require('fs');

// Рабочий вариант

// fs.readFile('01-READ-FILE/text.txt', 'utf-8', (error, data) => {
//   console.log('Асинхронное чтение');
//   if(error) {
//     throw error;
//   }
//   console.log(data);
// });

const adress = path.join(__dirname, 'text.txt');
const stream = new fs.ReadStream(adress, {encoding: 'utf-8'});

stream.on('readable', () => {
  let data = stream.read();
  if(data != null) {
    console.log(data);
  }  
});

stream.on('end', () => {   
});

stream.on('error', (err) => {
  if(err.code == 'ENOENT'){
    console.log('Файл не найден');
  } else {
    console.error(err);
  }
});

