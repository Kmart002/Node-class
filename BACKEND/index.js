const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
    res.writeHead(200, {
        "Content-Type": "text/html"
    })
    fs.createReadStream(__dirname + "/index.html").pipe(res)
});
const PORT = 3000;

server.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});