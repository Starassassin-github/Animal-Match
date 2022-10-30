const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const xss = require('xss-clean');
const mongoSanitize = require('express-mongo-sanitize');

require('dotenv').config();

// SANITIZE
app.use(xss());
app.use(mongoSanitize());

const api = process.env.API_URL
const mongoUri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}?retryWrites=true&w=majority`

const discardedsRouter = require('./routes/discarded');
const favsRouter = require('./routes/favorite');
const postsRouter = require('./routes/post');
const userfavsRouter = require('./routes/user_favorite');
const usersRouter = require('./routes/user');

// middleware
app.use(bodyParser.json())
app.use(morgan('tiny'));

// router
app.use(`${api}/posts`, postsRouter);
app.use(`${api}/favorites`, favsRouter);
app.use(`${api}/users`, usersRouter);
app.use(`${api}/usersfavorites`, userfavsRouter);
app.use(`${api}/discardeds`, discardedsRouter);



mongoose.connect(mongoUri)
.then(() => {
    console.log('Database Connection is ready');
})
.catch((err) => {
    console.log(err);
});





const port = process.env.PORT || 3341;
app.listen(port, () => {
    console.log(`Server runnig on port ${port}`);
});