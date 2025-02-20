const crypto = require('crypto');

const args = process.argv.slice(2);

// Generate a random salt
const salt = crypto.randomBytes(16).toString('hex');

// Hash the password with the salt
const hash = crypto.createHmac('sha256', salt).update(args[0]).digest('hex');

console.log('Password: ' + args[0]);
console.log('Salt: ' + salt);
console.log('Hashed password: ' + hash);