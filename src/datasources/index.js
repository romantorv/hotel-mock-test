const currentPath = require('path').join(__dirname);
const fs = require('fs');

const collections = {
	schemas: []
};

fs.readdirSync( currentPath ).forEach( function( fileName ){
	const fileExtension = fileName.split('.').pop();
	const moduleName = fileName.split('.').shift();
	if ( fileName !== 'index.js' && fileExtension === 'js'){
		collections.schemas.push(moduleName);
		collections[moduleName] = require(`${currentPath}/${fileName}`);
	}
});

module.exports = collections;