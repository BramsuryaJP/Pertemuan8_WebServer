
// module http node js
const http = require('http');

// fileSystem module
const fs = require('fs');

// port
const port = 3000;

// fungsi untuk membaca halaman
const findPage = (url ,response) => {
  fs.readFile(url, (error, data) => {
    if (error) {
      response.writeHead(404);
      response.write('Page Not Found !');
    } else {
      response.write(data);
    }
    response.end();
  })
}

http
  .createServer((request, response) => {
    // membuat variable url
    const url = request.url

    console.log(url);

    // response.writeHead(200, {
    //     'Content-Type': 'text/html'
    // })

    // menampilkan halaman berdasarkan url
    if (url === '/about') {
      findPage('about.html', response)
    } else if (url === '/contact') {
      findPage('contact.html', response)
    } else {
      findPage('index.html', response)
      // response.write('Hello World');
      // response.end();
    }
  })

  .listen(port, () => {
    console.log(`Server is listening on port ${ port }`);
  })
