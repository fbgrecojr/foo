import express from 'express';
import http from 'http';
import Foo1 from './src/Foo1.js';

const app = express();
const server = http.createServer(app);

app.get('/', (req, res) => {

	let test = new Foo1();
	test.test();

	res.end('bye');

});

server.listen(8080);
