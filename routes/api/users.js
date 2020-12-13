/* const { REAL } = require('sequelize/types'); */
const router = require('express').Router();
const db = require('../../models');
const userController = require('../../controllers/UserController.js');
const bcrypt = require('bcryptjs');

router.get('/', async (req, res) => {
    const user = await db.user.findAll();
    res.status(200).json(user);
});

router.post('/register', async (req, res) => {
    req.body.password = bcrypt.hashSync(req.body.password, 10);
    const user = await db.user.create(req.body);
    res.status(200).json(user);
});

router.post('/singin', userController.singin);

module.exports = router;