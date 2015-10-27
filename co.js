var fs = require('fs');
var co = require('co');

var readFile = function  (path) {
	return function(cb) {
		fs.readFile(path, { encoding : 'utf8'}, cb);
	}
}

co(function* () {

	var dataA = yield readFile('a.js');
	console.log(dataA);
	var dataB = yield readFile('b.js');
	console.log(dataB);
	var dataC = yield readFile('c.js');
	console.log(dataC);

}).catch(function(err) {
	console.error(err);
})