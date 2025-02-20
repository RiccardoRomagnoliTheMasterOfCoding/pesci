const fs = require('fs');
const sql = require('mssql');

const confPath = './config.json';

var config = JSON.parse(fs.readFileSync(confPath));

const TABLE = 'Clients';
const ID = 'ID';
const NAME = 'Name';
const EMAIL = 'Email';
const SIGNUPDATE = 'SignUpDate';


async function getUsers() {
  try {
    let  pool = await  sql.connect(config);
    let  elenco = await  pool.request().query(`SELECT * from ${TABLE}`);
    return  elenco.recordsets;
  } catch (error) {
    console.log(error);
  }
}

async function getUser(id) {
  try {
    let  pool = await  sql.connect(config);
    let  film = await  pool.request()
        .input('id', sql.Int, id)
        .query(`SELECT * from ${TABLE} where ${ID} = @id`);
    return  film.recordsets;
  } catch (error) {
    console.log(error);
  }
}

async function addUser(user) {
  try {
    let  pool = await  sql.connect(config);
    let  nuovoFilm = await  pool.request()
        .input('name', sql.NVarChar, user.Name)
        .input('email', sql.NVarChar, user.Email)
        .input('signupdate', sql.Date, user.SignUpDate)
        .query(`INSERT INTO ${TABLE} (${NAME}, ${EMAIL}, ${SIGNUPDATE}) VALUES (@name, @email, @signupdate)`);
    return  nuovoFilm.recordsets;
  } catch (err) {
    console.log(err);
  }
}

async function getLogin(email) {
  try {
    let  pool = await  sql.connect(config);
    let  cliente = await  pool.request()
        .input('email', sql.NVarChar, email)
        .query(`SELECT * from ${TABLE} where ${Email} = @email`);
    return  cliente.recordsets;
  } catch (error) {
    console.log(error);
  }
}


module.exports = {
  getUsers:  getUsers,
  getUser:  getUser,
  getLogin: getLogin,
  addUser: addUser
}