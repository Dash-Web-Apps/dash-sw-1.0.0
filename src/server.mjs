/* eslint-disable @typescript-eslint/no-var-requires */
import http from "node:http";
import { createBareServer } from '@tomphttp/bare-server-node';

const httpServer = http.createServer();

const bareServer = createBareServer('/');

httpServer.on('request', (req, res) => {
	if (bareServer.shouldRoute(req)) {
		bareServer.routeRequest(req, res);
	} else {
		res.writeHead(400);
		res.end('Not found.');
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
	console.log('HTTP server listening');
});

httpServer.listen({
	port: 8080,
});
const myRequest = new Request("https://webscraper.io/test-sites/e-commerce/allinone");
fetch(myRequest).then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
})