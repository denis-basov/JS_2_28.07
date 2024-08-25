const fs = require('fs');
const http = require('http');

// создаем сервер
const server = http.createServer(function(request, response){
    const pathName = request.url;// получаю строку запроса URL

    // получаю содержимое html-файлов
    const tempOverview = fs.readFileSync('./templates/overview.html', 'utf-8');
    const tempProduct = fs.readFileSync('./templates/product.html', 'utf-8');

    // в зависимости от того, какой url, показываем разные данные
    if (pathName === '/' || pathName === '/overview') {
        response.writeHead(200, {'Content-type': 'text/html'});
        response.end(tempOverview);
    } else if (pathName === '/product') {
        response.writeHead(200, {'Content-type': 'text/html'});
        response.end(tempProduct);
    } else {
        response.writeHead(404, {'Content-type': 'text/html'});
        response.end('<h1>Page not found</h1>');
    }
    
});

// запускаем сервер
server.listen(8080, 'localhost', function(){
    console.log('Listening port 8080');
});