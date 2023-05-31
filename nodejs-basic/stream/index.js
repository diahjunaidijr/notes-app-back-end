// Import the path module
const {resolve}= require('path');

const fs = require('fs');

// outputpath = path.resolve("./stream/", "output.txt");
const readableStream = fs.createReadStream(resolve('./stream/input.txt'), {
    highWaterMark: 15
});

readableStream.on('readable', () => {
    try {
        let chunk;
        while ((chunk = readableStream.read()) !== null) {
          writableStream.write(chunk + '\n');
          
        }
    } catch(error) {
        // catch the error when the chunk cannot be read.
    }
});
const writableStream = fs.createWriteStream('./stream/output.txt');

readableStream.on('end', () => {
    writableStream.end("-----");
  });