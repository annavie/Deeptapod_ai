const addon = require('./build/Release/calculate');

const text = "Hello, this is a sample text to count words.";

console.log(addon.countWords(text)); // Output: 9
