/* const controller = require('./controllers/UserController.js'); */
const express = require('express');
const morgan = require('morgan');
const apiRouter = require('./routes/index');
/* const db = require('./models'); */
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content - Type, Accept");
    res.header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
    next();
});

app.use(morgan('dev'));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', apiRouter);

app.set('PORT', process.env.PORT || 3000);

app.get('/', function (req, res) {
    console.log("Extructura base del proyecto backend");
    res.send("Estructura base del proyecto backend");
    /* db.user.findAll().then(users => res.json(users)) */
});
/* const port = 3000 */
app.listen(app.get('PORT'), () => {
    console.log(`Running on http://localhost:${app.get('PORT')}`)
})
module.exports = app;