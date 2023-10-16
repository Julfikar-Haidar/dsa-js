const validateEmail = require("./validate-email");

const result = validateEmail("julfikar@gmail.com");
const result2 = validateEmail("julfikarmail.com");

console.log(result);
console.log(result2);
