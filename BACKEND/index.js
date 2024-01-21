const express = require('express');
const dotenv = require('dotenv');
const cors = require("cors")
const booksRouter = require("./src/api/routes/book.routes");
const collectionsRouter = require("./src/api/routes/collection.routes");
const universeRouter = require("./src/api/routes/universes.routes");
const authorsRouter = require("./src/api/routes/author.routes");
const awardsRouter = require("./src/api/routes/awards.routes");
const userRouter = require('./src/api/routes/user.routes');
dotenv.config();

const {connect} = require('./src/utils/db');
const { isAuth } = require('./src/middlewares/auth');
const PORT = process.env.PORT || 5000;

const app = express();
connect();

app.use(cors());
app.use(express.json());

app.use("/books", booksRouter);
app.use("/collections", collectionsRouter)
app.use("/author", authorsRouter)
app.use("/universes", universeRouter)
app.use("/awards", awardsRouter)
app.use('/user', userRouter);

app.listen(PORT, () => console.log('listening on port ' + PORT));