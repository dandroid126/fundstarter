var fs = require('fs');

var content;
fs.readFile('./index.html', function read(err, data)
{
	if(err) {	throw err;	}
	content = data;
	console.log(content);
});
