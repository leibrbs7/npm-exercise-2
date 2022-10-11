const process = require('process');

let args = process.argv.slice(2);
console.log('number of arguments: ', args.length);

let finalString = args.join(' ');

const countVowels = (str) => Array.from(str).filter((letter) => 'aeiou'.includes(letter)).length;
console.log('number of vowels: ', countVowels(finalString));
