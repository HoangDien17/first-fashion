const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const expressSession = require('express-session');
const connectFlash = require('connect-flash');
const passport = require('passport');



const app = express();
const initRoutes = require('./src/routes/index');
const db = require('./src/app/config/db/index');
const viewEngine = require('./src/app/config/viewEngine');
const configSession = require('./src/app/config/session');
const Confighelpers = require('./src/app/config/helpers');
const http = require('http').Server(app);
const io = require('socket.io')(http);


//connect database
db.connect();

//config session
configSession(app);

//Static
app.use('/static', express.static(path.join(__dirname, '/src/public')));

//fix number in handlebars
app.use(Confighelpers);

//set view-engine
viewEngine(app);

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

//enable flash message
app.use(connectFlash());

// Biến local
app.use((req, res, next) => {
    res.locals.errors = req.flash("error");
    res.locals.successes = req.flash("success");
    next();
});

//Passport
app.use(passport.initialize());
app.use(passport.session());    // Gọi đến passport.deserializeUser lấy thông tin user cụ thể là _id đã lưu trong session.

//check login with passport
app.use((req, res, next) => {
        res.locals.login = req.isAuthenticated(); 
        res.locals.session = req.session;
        // if(req.session.passport.user){
        //   res.locals.email = req.user.email
        // }
        next();
});

//routes init
initRoutes(app);

//chat
io.on('connection', function(socket){
    socket.on('chatMessage', function(from, msg){
      io.emit('chatMessage', from, msg);
    });
    socket.on('notifyUser', function(user){
      io.emit('notifyUser', user);
    });
});



//set port
http.listen(3000, () => {
    console.log('Server is running on port:3000');
});
