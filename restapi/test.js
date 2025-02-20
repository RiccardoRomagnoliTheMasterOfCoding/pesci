const db = require('./dbcrud');

(async () => {
    const res = await db.login('pine@daniels.com', 'pinus');
    console.dir(res);
})();