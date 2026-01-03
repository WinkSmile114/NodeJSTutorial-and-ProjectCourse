const http = require('http')

// const server = http.createServer((req, res) => {
//     res.end(`Welcome to our API`)
// })

// Using Event Emitter Api to create server
const server = http.createServer();

// emits request event
// subcribe to it / listen for it / respond to it
server.on('request', (req, res) => {
    res.end(`Welcome to our API`)
})

server.listen(5000)