const path = require('path');
const fs = require('fs');
const fsPromises = require('fs/promises');

const projectFolderAdress = path.join(__dirname, 'project-dist');
const templateFileAdress = path.join(__dirname, 'template.html');
const cssFileAdress = path.join(projectFolderAdress, 'style.css');
const htmlFileAdress = path.join(projectFolderAdress, 'index.html');

const assetsAdress = path.join(__dirname, 'assets');
const componentsAdress = path.join(__dirname, 'components');
const cssStylesAdress = path.join(__dirname, 'styles');


fs.mkdir(projectFolderAdress, { recursive: true }, (e) => {
	if(e) {
		throw new Error('Have some troubles whis "fs.mkdir"');
	}
});

let myAsync = async () => {	
	const fileTemplate = await fsPromises.readFile(templateFileAdress, 'utf8');

	console.log( fileTemplate.split('{'));
};

myAsync();