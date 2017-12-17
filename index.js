////////////////////////////////////////////////////////////////////////////////
////////////////////////// REQUIRE MODULES & USE THEM //////////////////////////
////////////////////////////////////////////////////////////////////////////////
const express = require('express');
const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server);

const compression = require('compression');
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cookieSession = require("cookie-session");

// HASH PASSWORD
const bcrypt = require('bcryptjs');

// REQUIRE FILE THAT CONTAINS HASH PASSWORD FUNCTION
const bc = require("./config/pass");

// REQUIRE FILE THAT CONTAINS DATABASE QUERIES
const db = require("./config/db.js");

app.use(compression());

if (process.env.NODE_ENV != 'production') {
    app.use('/bundle.js', require('http-proxy-middleware')({
        target: 'http://localhost:8081/'
    }));
}

app.use(express.static('./public'));

app.use(cookieParser());

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(bodyParser.json());

app.use(cookieSession({
    secret: 'that thing that never leaves the Balkans',
    maxAge: 1000 * 60 * 60 * 24 * 14
}));

// ENCRYPT TOKENS
// const csurf = require("csurf");
//
// app.use(csurf());
//
// app.use(function(req, res, next){
//     res.cookie('my favorite cinnamon bun recipe', req.csrfToken());
//     next();
// });


////////////////////////////////////////////////////////////////////////////////
//////////////////////// END REQUIRE MODULES & USE THEM ////////////////////////
////////////////////////////////////////////////////////////////////////////////













////////////////////////////////////////////////////////////////////////////////
/////////////////////////// REGISTER AND LOGIN USERS ///////////////////////////
////////////////////////////////////////////////////////////////////////////////


app.get('/user', (req, res) => {

    if (!req.session.user) {
        res.redirect("/");
        return;
    } else {

        var id = req.session.user.id;

        db.getUser(id).then(user => {
            res.json(user);
        });

    }

});


















/////////////////////////////////// REGISTER USER //////////////////////////////
app.post("/register", (req, res) => {

    var first = req.body.first;
    var last = req.body.last;
    var email = req.body.email;
    var password = req.body.password;

    // HASH THE PASSWORD
    bc.hashPassword(password).then((hashedPassword) => {
        // SEND HASHED PASSWORD TO DATABASE
        db.registerUser(first, last, email, hashedPassword).then(results => {

            req.session.user = {
                id: results.id,
            };

            res.json({ results, success: true });

        }).catch((err) => {
            res.json({ success: false });
        });
    }).catch((err) => {
        res.json({ success: false });
    });

});

///////////////////////////////// END REGISTER USER ////////////////////////////










//////////////////////////////////// LOGIN USER ////////////////////////////////
app.post("/login", (req, res) => {

    var email = req.body.email;
    var password = req.body.password;

    // GET USER PASSWORD FROM DATABASE BASED ON THE EMAIL THEY ENTERED
    db.checkUserCredentialsToLogin(email).then(results => {

        var id = results.id;
        var first = results.first;
        var hashedPasswordFromDatabase = results.password;

        // CHECK USER INPUTTED PASSWORD WITH THE HASHED PASSWORD WE HAVE IN DATABASE
        bc.checkPassword(password, hashedPasswordFromDatabase).then(doesMatch => {

            if (doesMatch) {

                req.session.user = {
                    id: id,
                    first: first
                };

                res.json({ success: true });

            }

        }).catch((err) => {
            res.json({ success: false });
        });
    }).catch((err) => {
        res.json({ success: false });
    });


});

////////////////////////////////// END LOGIN USER //////////////////////////////


////////////////////////////////////////////////////////////////////////////////
////////////////////////// END REGISTER AND LOGIN USERS ////////////////////////
////////////////////////////////////////////////////////////////////////////////








app.get("/logout", (req, res) => {
    req.session = null;
    res.redirect("/");
});







app.get('*', function(req, res){

    if (!req.session.user && req.url != '/welcome/') {
        res.redirect("/welcome/");
        return;
    }

    if (req.session.user && req.url == '/welcome/') {
        res.redirect("/");
        return;
    }

    res.sendFile(__dirname + '/index.html');
});


























server.listen(8080, function() {
    console.log("I'm listening.");
});




// THIS RUNS THE MOMENT SOCKET IO INITIALIZES
io.on('connection', (socket) => {

    socket.on("userAudio", (inputBuffer) => {
        console.log("inputBuffer in server", inputBuffer);
    });

});
