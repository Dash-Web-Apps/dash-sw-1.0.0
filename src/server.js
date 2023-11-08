const http = require("node:http");
const express = require("express")
const {createBareServer} = require("@tomphttp/bare-server-node")

async function simpleFetch() {
    const getRes = await fetch("http://replit.com");
	const res = await getRes.text();
	console.log(res)
  }
  
const httpServer = http.createServer();

const app = express();
app.use(express.static('static'));


app.get('/', (req, res) => {
	res.send('Hello, World!');
});

const bareServer = createBareServer('/bare/');

httpServer.on('request', (req, res) => {
	if (bareServer.shouldRoute(req)) {
		bareServer.routeRequest(req, res);
	} else {
		app(req, res);
	}
});

httpServer.on('upgrade', (req, socket, head) => {
	if (bareServer.shouldRoute(req)) {
		bareServer.routeUpgrade(req, socket, head);
	} else {
		socket.end();
	}
});

httpServer.on('listening', () => {
	console.log('Proxy online have fun browsing');
});

httpServer.listen({
	port: 8080,
});
setTimeout(simpleFetch,3000);
