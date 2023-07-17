const express = require('express');
const app = express();
const mongoose = require('mongoose');
const helmet = require('helmet');
const dotenv = require('dotenv');
const morgan = require('morgan');
dotenv.config();
const usersRouter = require('./routes/users');
const authRouter = require('./routes/auth');

// mongoose.connect('mongodb://127.0.0.1:27017/Social-media-clone-nodejs');
// mongoose.connect('mongodb://qoosim:qoosim_3609@host:27017/Social-media-clone-nodejs');

mongoose.connect(process.env.MONGO_URL);

// middleware
app.use(express.json());
app.use(helmet());
app.use(morgan('common'));

app.use('/api/users', usersRouter);
app.use('/api/auth', authRouter);

app.listen(5000, () => console.log('Server is running on port 5000'));