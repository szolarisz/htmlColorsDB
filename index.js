const http = require('http');
const mysql = require('mysql');
const fs = require('fs');

const port = 4444;

const server = http.createServer( (req,res) => {

    switch(true)
    case (req.method === 'GET' && req.url==='/'):
        fs.readFile('./view/index.html', (err, html) =>{
            if( err ) throw err;
            res.setHeader('Content-Type', 'text/html');
            res.writeHead(200);
            res.end( html );  
        })
    break;
    
    default:
        fs.readFile('./view/index.html', (err, html) =>{
            if( err ) throw err;
            res.setHeader('Content-Type', 'text/html');
            res.writeHead(200);
            res.end( html );  
        })
       
    ;
});

server.listen(port);