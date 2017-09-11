const fs = require('fs');
const path = require('path');

fs.readdir(process.argv[2], 'utf-8', function(err, list) {
	if (err) return console.error(err);
	return list.filter(file => {
	    	if (path.extname(file) === `.${process.argv[3]}`) console.log(file);
	})
});