const express = require('express');
const { signup } = require('../controllers/user-controller');
const { login } = require('../controllers/user-controller');
const { verifyToken, getUser } = require('../controllers/user-controller');

const router = express.Router();

router.get('/', (req, res, next) => {
    res.send("Hey")
})

router.post('/signup', signup);

router.post('/login', login);

router.get('/user', verifyToken, getUser);

module.exports = router;