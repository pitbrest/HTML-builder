const path = require('path');
const fs = require('fs');

const adress = path.join(__dirname, 'secret-folder');

// fs.stat(adress, (error, stats) => {
//   if (error) {
//     console.log(error);
//   }
//   else {
//     console.log(stats.size);
//   }
// });

fs.readdir(adress, (err, files) => {
  if (err) {
    throw new Error('Have some error whith "fs.readdir"');
  }
  files.forEach(file => {
    let fileAdress = path.join(adress, file);

    fs.stat(fileAdress, (error, stats) => {			
      if (error) {
        throw new Error('Have some error whith "fs.stat" !');
      }
      else {
        if(stats.isFile()) {
          console.log(path.parse(path.join(adress, file)).name + ' - ' + path.parse(path.join(adress, file)).ext.slice(1) + ' - ' + stats.size);
        }        
      }
    });
    //console.log(file);
  });
});



//fs.stat('./style.css', (err, stats) => { console.log(stats); });
// fs.readdir(adress, { withFileTypes: true }, (err, files) => {
// 	if (err) {
// 		throw new Error('Have some error');
// 	}
// 	for (let dirent of files) {
// 		if (dirent.isFile()) {
// 			console.log(path.parse(path.join(__dirname, dirent.name)).name + ' - ' + path.parse(path.join(__dirname, dirent.name)).ext.slice(1));
// 		}
// 	}


// 	// let onlyFiles = files.filter(item => dirent.isFile(item))
// 	// console.log(files);
// 	// console.log(onlyFiles);
// 	// files.forEach(file => console.log(path.extname(file)));
// 	//console.log(files.map(file => stats.isFile(file)));
// });


// + ' - ' + fs.stat(dirent.name, (err, stats) => { stats })