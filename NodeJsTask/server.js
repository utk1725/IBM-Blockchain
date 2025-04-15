// Import the http module
const http = require('http');

// Define the port
const port = 3000;

// Create the server
const server = http.createServer((req, res) => {
    // Set the response header
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    
    // Send the response
    res.end('Hello, World!');
});

// Start the server
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});