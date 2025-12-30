const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        console.log('home page request event');
        res.end('Home Page');
        return;
    } 
    if (req.url === '/about') {
        // Blocking Code !!!!
        for(let i = 0; i<1000; i++) {
            for( let j = 0; j<1000; j++) {
                console.log(`${i} ${j}`);
            }
        }

        console.log('about page request event');
        res.end('About Page');
        return;
    }

    res.end('Error Page');
})

server.listen(5000, () => {
    console.log('Server listening on port: 5000....');
})