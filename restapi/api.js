var db = require('./dbcrud');
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

const PORT = process.env.PORT || 3000;
var app = express();
var router = express.Router();

app.use(bodyParser.urlencoded({extended: true}))
    .use(bodyParser.json())
    .use(cors())
    .use('/api', router);

router.use((req, res, next) => {
    next();
});

router.route('/getUsers').get((req, res) => {
    db.getUsers()
    .then((data) => {
        res.json(data[0]);
    });
});

router.route('/getUser').post((req, res) => {
    db.getUser(req.body.id)
    .then((data) => {
        res.json(data[0]);
    });
});

router.route('/addUser').post((req, res) => {
    let newUser = {
        'Name': req.body.name,
        'Email': req.body.email,
        'SignUpDate': new Date().toISOString().split('T')[0]
    }

    db.addUser(newUser)
    .then((data) => {
        res.status(201).json(data);
    });
});

router.route('/login').post((req, res) => {
    db.login(req.body.email, req.body.password)
    .then((data) => {
        res.json(data);
    });
});

router.route('/catalog').get((req, res) => {
    db.getCatalog()
    .then((data) => {
        res.json(data);
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});