const express = require('express');
const app = express();
const cors = require('cors');
var path = require('path');

require('dotenv/config');
app.use(cors());
app.options('*', cors())

const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const xss = require('xss-clean');
const mongoSanitize = require('express-mongo-sanitize');


const passport = require('passport');
const { jwtStrategy } = require('./middleware/passport');

const api = process.env.API_URL
const mongoUri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}?retryWrites=true&w=majority`



const postsRouter = require('./routes/post');
const usersRouter = require('./routes/user');

const { handleError, convertToApiError } = require('./middleware/apiError');

// middleware
app.use(express.json());
app.use(morgan('tiny'));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/public/uploads', express.static(__dirname + '/public/uploads'));

mongoose.connect(mongoUri)
.then(() => {
    console.log('Database Connection is ready');
})
.catch((err) => {
    console.log(err);
});

// SANITIZE
app.use(xss());
app.use(mongoSanitize());

// passport
app.use(passport.initialize());
passport.use('jwt', jwtStrategy);

// router
app.use(`${api}/posts`, postsRouter);
app.use(`${api}/users`, usersRouter);




/// error handling
app.use(convertToApiError)
app.use((err,req,res,next)=>{
    handleError(err,res)
})

// app.use(express.static('client/build'));
// if(process.env.NODE_ENV === 'production'){
//     const path = require('path');

//     app.get('/*',(req,res)=>{
//         res.sendFile(path.resolve(__dirname,'../client','build','index.html'))
//     })
// }

const port = process.env.PORT || 3341;
app.listen(port, () => {
    console.log(`Server runnig on port ${port}`);
});