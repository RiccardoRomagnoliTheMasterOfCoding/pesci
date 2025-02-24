const fs = require('fs');
const sql = require('mssql');
const crypto = require('crypto');

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

async function login(email, password) {
  try {
    let pool = await  sql.connect(config);
    let result = await  pool.request()
        .input('email', sql.NVarChar, email)
        .query(`SELECT * from ${TABLE} where ${EMAIL} = @email`);
    //return  cliente.recordsets;

    if (result.recordsets.length > 0 && result.recordsets[0].length > 0) {
      const user = result.recordsets[0][0];

      if (user.HashedPassword == hash(password, user.Salt)) {
        const { ID, Name, Email, SignUpDate, Role, PfpUrl } = user;
        const loggedUser = { ID, Name, Email, SignUpDate, Role, PfpUrl };
        return loggedUser;
      } else {
        return null;
      }
    } else {
      return null;
    }
  } catch (error) {
    console.log(error);
  }
}

function hash(plaintext, salt) {
  return crypto.createHmac('sha256', salt).update(plaintext).digest('hex');
}


module.exports = {
  getUsers:  getUsers,
  getUser:  getUser,
  login: login,
  addUser: addUser
}