// const { EventEmitter } = require('events');//events adalah module core yang berarti sudah ada di lib
 
// const myEventEmitter = new EventEmitter();

// fungsi yang akan dijalankan ketika event coffee-order terjadi
// const makeCoffee = ({ name }) => {
//     console.log(`Kopi ${name} telah dibuat!`);
// };


//tambahan event makeBill
// const makeBill = ({ price }) => {
//     console.log(`Bill sebesar ${price} telah dibuat!`); //gunakan `isi_string ${nama_parameter}` untuk penggabungan panggilan string dan non string
// }

// mendaftarkan fungsi makeCoffee sebagai listener di event coffee-order, makeCoffee isinya name
// myEventEmitter.on('coffee-order', makeCoffee);

// mendaftarkan fungsi makeBill sebagai listener di event coffee-order, makeBill isinya price
// myEventEmitter.on('coffee-order', makeBill); 


// Memicu event 'coffee-order' terjadi 
// myEventEmitter.emit('coffee-order', { name: 'Tubruk', price: 25000 }); 


/**
 * PERHATIKAN!!!
 * 
 * myEventEmitter.on fungsinya untuk mendaftarkan lalu myEventEmitter.emit sebagai pembangkit/trigger
 * 
 * myEventEmitter.emit dan myEventEmitter.on berisi nama event dan listener, 
 * namun di myEventEmitter listener nya yang dijadikan pada makeCoffee dan makeBill 
 * */

/****contoh fungsi yang dipanggil sekaligu */

//fungsi khusus untuk listener, sekaligus

// const onCoffeeOrderedListener = ({ name, price }) => {
//     makeCoffee(name);
//     makeBill(price);
// }


//mendaftarkan fungsi makeCoffee dan makeBill sekaligus
// myEventEmitter.on('coffee-order', onCoffeeOrderedListener);



//-----------Latihan Challenge tentang Events dari Dicoding------------------

// TODO 1, mengimpor variable EventEmitter dari core module events
const { EventEmitter } = require('events');
 
//membuat fungsi ketika event di trigger
const birthdayEventListener = ({name}) => {
    console.log(`Happy birthday ${name}!`);
  }

 
// TODO 2, membuat variable myEmitter sebagai alias atau instance (Bentuk baru) dari EventEmitter
const myEmitter = new EventEmitter();
   
// TODO 3, membuat aksi atau mendaftarkan aksi sebagai respon ketika event dibangkitkan
myEmitter.on('birthday', birthdayEventListener);
   
// TODO 4, membangkitkan atau men trigger event
myEmitter.emit('birthday',{name: 'O Claire'})

/**
 * Output: Happy birthday O Claire!
 */
