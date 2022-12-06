//Start Server
const { v4: uuidv4 } = require('uuid');
const { json } = require('express');
const express = require('express');
const multer = require('multer');
const session = require('express-session');
const path = require('path');


const app = express();

const storage = multer.diskStorage({
    destination: path.join(__dirname,'public/uploads'),
    filename: function (req, file, cb) {
        cb(null, uuidv4() + '.jpg')
    }
});

app.use(express.urlencoded({extended:false}));
app.use(express(json));

app.use(session({
    secret: "secret",
    resave: true,
    saveUninitialized: true
}));


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'));

// MIDDLEWARE
app.use(multer({
    storage,
    dest: path.join(__dirname,'public/uploads')
}).single('image'));

//Static Files
app.use(express.static(path.join(__dirname,'public')));
app.use(express.static(path.join(__dirname,'sass')));


app.use('/', require('./router'));


app.listen(5000, ()=>{
    console.log("server corriendo aloo");
});