/**
 * Created by dell on 2017/11/18.
 */
const http = require('http');
const app = require('./app');
const server = http.createServer(app);
server.listen(3389);
console.log('Server running at http://127.0.0.1:8888/');
