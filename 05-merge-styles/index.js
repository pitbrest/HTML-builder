const path = require('path');
const fs = require('fs');

const adress = path.join(__dirname, 'styles');


let arr = [];

// fs.readdir(adress, (error, files) => {
// 	if (error) {
// 		throw new Error('Have some error with fs.readdir');
// 	} else {
// 		files.forEach(file => {
// 			let fileAdress = path.join(adress, file);
// 			fs.stat(fileAdress, (err, stats) => {
// 				if (stats.isFile() && path.parse(fileAdress).ext.slice(1) === 'css') {
// 					fs.readFile(fileAdress, 'utf-8', function (err, data) {
// 						arr.push(data);
// 					});
// 				};
// 			});
// 		});
// 	};
// 	let result = arr.join('');
// 	let destFileAdress = path.join(__dirname, 'project-dist/bundle.css');
// 	fs.writeFile(destFileAdress, result, () => { });
// });


const readDir = async () => {
	data = await fs.promises.readdir(adress, (error, files) => { });
	return data;
}

console.log(readDir);


