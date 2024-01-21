const express = require('express');
const dotenv = require('dotenv');
const cors = require("cors")
const booksRouter = require('./src/api/routes/books.routes');
const charactersRouter = require('./src/api/routes/characters.routes');
const countriesRouter = require('./src/api/routes/countries.routes');
const planetsRouter = require('./src/api/routes/planets.routes');
const userRouter = require('./src/api/routes/user.routes');
dotenv.config();

const {connect} = require('./src/utils/db');
const { isAuth } = require('./src/middlewares/auth');
const port = process.env.PORT || 7000;

const app = express();
connect();

app.use(cors());
app.use(express.json());

app.use('/books', booksRouter);
app.use('/characters', [isAuth], charactersRouter);
app.use('/countries', countriesRouter);
app.use('/planets', planetsRouter);
app.use('/user', userRouter);

app.listen(port, () => console.log('listening on port ' + port));