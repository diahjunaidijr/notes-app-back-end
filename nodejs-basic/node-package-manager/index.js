const _ = require('lodash') //setelah install lodash baru bisa import
 
const myOddEvenArray = _.partition([1, 2, 3, 4, 5, 6], (n) => n % 2);
 
console.log(myOddEvenArray);