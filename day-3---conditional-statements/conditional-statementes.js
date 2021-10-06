/**
 * 
 * @param {Number} n 
 */

function main(n) {
  if (n % 2 === 1 || n > 5 && n <= 20) {
    return 'Weird';
  } else {
    return 'Not Weird';
  }
}

console.log(main(17));