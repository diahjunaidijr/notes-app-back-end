//contoh dari dokumentasi Node.js

// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

// **********************************************************

//contoh dari penerapan materi Dicoding di forum diskusi oleh mas Aziz

// const http = require('http')

// let env = process.env.NODE_ENV

// const server = http.createServer((req,res) => {
//     if(req.url == '/'){
//         res.write(`<h1> Sedang berjalan di ${env} </h1>`)
//     }
// })

// server.listen(4000)

// **********************************************************

//contoh penerapan process.memoryUsage()

// const cpuInformation = process.memoryUsage();
 
// console.log(cpuInformation);

// **********************************************************

//contoh penerapan process.argv

// const firstName = process.argv[2];
// const lastName = process.argv[3];
 
// console.log(`Hello ${firstName} ${lastName}`);

// **********************************************************

//contoh penerapan module

// const coffee = require('./coffee');
 
// console.log(coffee);


/**
* Gunakan object destructuring untuk mengimpor lebih dari satu nilai pada modul.
*/
// const { firstName, lastName } = require('./user');
 
 
// console.log(firstName);
// console.log(lastName);
 

