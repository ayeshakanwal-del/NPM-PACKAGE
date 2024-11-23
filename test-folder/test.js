const { isValidEmail, isValidPhoneNumber, isStrongPassword } = require('../package/index');

console.log(isValidEmail("test@example.com")); // true
console.log(isValidEmail("invalid-email")); // false

console.log(isValidPhoneNumber("+1234567890")); // true
console.log(isValidPhoneNumber("12345")); // false

console.log(isStrongPassword("StrongPass1")); // true
console.log(isStrongPassword("weak")); // false
