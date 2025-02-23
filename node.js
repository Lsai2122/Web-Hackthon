const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
    let filePath = req.url;
    
    // Handle homepage
    if (filePath === "/" || filePath === "/index" || filePath === "/mainpage" || filePath === "/main") {
        filePath = "mainpage/IIITN-s.html";
    } else {
        // Serve static files from the "public" folder
        filePath = "mainpage" + filePath;
    }

    // Get file extension
    const extname = path.extname(filePath);
    let contentType = "text/html"; // Default to HTML

    // Set content type based on file extension
    switch (extname) {
        case ".css":
            contentType = "text/css";
            break;
        case ".js":
            contentType = "text/javascript";
            break;
        case ".png":
            contentType = "image/png";
            break;
        case ".jpg":
        case ".jpeg":
            contentType = "image/jpeg";
            break;
        case ".svg":
            contentType = "image/svg+xml";
            break;
    }

    // Read and serve the file
    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.writeHead(404, { "Content-Type": "text/plain" });
            res.end("404 Not Found");
        } else {
            res.writeHead(200, { "Content-Type": contentType });
            res.end(data);
        }
    });
});

const HOST = "192.168.137.3"; // Replace with your local IP
const PORT = 8080;

server.listen(PORT, HOST, () => {
    console.log(`Server running at http://${HOST}:${PORT}/`);
});
