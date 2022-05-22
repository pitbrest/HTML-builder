const path = require('path');
const fs = require('fs');
const fsPromises = require('fs/promises');

const projectFolderAdress = path.join(__dirname, 'project-dist');
const templatePath = path.join(__dirname, 'template.html');
const assetsPath = path.join(__dirname, 'assets');
const componentsPath = path.join(__dirname, 'components');
const cssStylesPath = path.join(__dirname, 'styles');

const newCssPath = path.join(projectFolderAdress, 'style.css');
const newHtmlPath = path.join(projectFolderAdress, 'index.html');


const createFolder = async (path) => {
	return await 
		fsPromises.mkdir(path, { recursive: true }, (e) => {
			if(e) {
				throw new Error('Have some troubles whith "mkdir"');
			}
		});
};

const createFile = async (path, content) => {
	return await 
		fsPromises.writeFile(path, content, (e) => {
			if(e) {
				throw new Error('Have some troubles whith "writeFile"');
			}
		});
};

const mergeCss = async () => {
	let resultArr = [];
	const cssFiles = await fsPromises.readdir(cssStylesPath);

	for(let file of cssFiles) {
		let fileAdress = path.join(cssStylesPath, file);
		let stats = await fsPromises.stat(fileAdress);

		if(stats.isFile() && path.parse(fileAdress).ext.slice(1) === 'css') {
			const cssFileContent = await fsPromises.readFile(fileAdress, 'utf-8');
			resultArr.push(cssFileContent + '\n');
		}
	}

	let resultContent = resultArr.join('');	
	await createFile(newCssPath, resultContent);
};

const copyDir = async (fromDir, toDir) => {
	await fsPromises.rm(toDir, { recursive: true, force: true });
	await fsPromises.mkdir(toDir, { recursive: true });

	const copiedItemsNames = await fsPromises.readdir(fromDir, { withFileTypes: true });

	for(let item of copiedItemsNames) {
		const currentItemPath = path.join(fromDir, item.name);
		const copiedItemPath = path.join(toDir, item.name);
		
		if(item.isDirectory()) {
			await fsPromises.mkdir(copiedItemPath, {recursive: true});
			await copyDir(currentItemPath, copiedItemPath);
		} else if (item.isFile()) {
			await fsPromises.copyFile(copiedItemPath, currentItemPath);
		}
	}
};