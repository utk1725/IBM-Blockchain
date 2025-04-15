// Import the http and fs modules
const http = require('http');
const fs = require('fs').promises;

// Define the port
const port = 3000;

// Create the server
const server = http.createServer(async (req, res) => {
    try {
        // Implement routing based on URL
        if (req.url === '/') {
            const data = await fs.readFile('./views/index.html', 'utf8');
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        } else if (req.url === '/about') {
            const data = await fs.readFile('./views/about.html', 'utf8');
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        } else {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('404 Not Found');
        }
    } catch (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('500 Internal Server Error');
    }
});

// Start the server
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});