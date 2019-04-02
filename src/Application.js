const http = require('http');
const path = require('path');
const fs = require('fs');
const debug = require('../utils/debug')('Application');
const serveStatic = require('./serveStatic')

const mimeType = {
	'.ico': 'image/x-icon',
	'.html': 'text/html',
	'.js': 'text/javascript',
	'.css': 'text/css',
	'.png': 'image/png',
	'.jpg': 'image/jpeg',
	'.eot': 'appliaction/vnd.ms-fontobject',
	'.ttf': 'aplication/font-sfnt'
}

const Application = () => {
	const _server = http.createServer((req, res) => {
		serveStatic(req, res)

		res.statusCode = 200;
		res.setHeader('Content-Type', 'text/html');

		const filePath = path.join(__dirname, '../public/index.html')
		fs.readFile(filePath, (err, data) => {
			if (err) throw err;

			res.end(data);
		})
	});

	const listen = (port = 3000, hostname = '127.0.0.1', fn) => {
		_server.listen(port, hostname, fn)
		debug('server is listening')
	}

	return {
		_server,
		listen
	}

}

module.exports = Application;