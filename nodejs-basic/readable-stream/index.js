const fs = require('fs');
 
//pembuatan fungsi listener ketika event di trigger 
const readableStream = fs.createReadStream('./readable-stream/article.txt', {
    //createReadStream menerima 2 argumen: 1.file yang akan dibaca, objek konfig
    highWaterMark: 100
    //contoh nya menetapkan buffer dengan menggunakan properti highWaterMark
    //secara defaultnya 16384 tapi karena kita file nya kecil kita set jadi 100 aja (100bytes, 10 char per bytes)
    //sifat nya temporary ya
});
readableStream.on('readable', () => {
    try {
        process.stdout.write(`[${readableStream.read()}]`);
    } catch(error) {
        // catch the error when the chunk cannot be read.
    }
});

//event di daftarkan atau aksi dibuat

 
//event di daftarkan atau aksi dibuat
readableStream.on('end', () => {
    console.log('Done');
});

/**
 * createReadStream() me
 */