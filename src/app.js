const express = require("express");
const app = express();
const router = require('./routes/mainRouter');
const indexRouter = require('./routes/index');
const path = require("path");
const methodOverride = require('method-override');
const userRouter = require('./routes/userRouter');
const adminRouter = require('./routes/adminRouter');
const noticiasRouter = require('./routes/noticiasRouter');

app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));

// view engine setup
app.set('views', path.resolve(__dirname, './views'));
app.set('view engine', 'ejs');


app.use('/', indexRouter)

app.use('/user', userRouter)

app.use('/admin', adminRouter)

app.use('/noticias', noticiasRouter)


app.listen('3003', () => console.log('Servidor corriendo en el puerto 3003'));
