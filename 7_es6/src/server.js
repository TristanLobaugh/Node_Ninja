import http from 'http';
import { homepage, notFound } from './handlers';

const server = http.createServer((req, res) => {
	homepage(req, res);
});

server.listen(3007);
