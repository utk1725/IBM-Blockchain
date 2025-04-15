// Import the http module
const http = require('http');

// Define the port
const port = 3000;

// Create the server
const server = http.createServer((req, res) => {
    // Implement routing based on URL
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Welcome to the Home Page!');
    } else if (req.url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('This is the About Page.');
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
    }
});

// Start the server
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});