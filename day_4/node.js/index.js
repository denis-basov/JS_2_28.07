const fs = require('fs');
const http = require('http');

// создаем сервер
const server = http.createServer(function(request, response){
    response.end('Server started');
});

// запускаем сервер
server.listen(8080, 'localhost', function(){
    console.log('Listening port 8080');
});