var express = require('express');
var router = express.Router();
var User = require('../models/user');
var Message = require('../models/message');
const jwtService = require("jsonwebtoken");
const key = "0349807dc89sad7f8643758364t89yg78rf6g78d67348537g6f78d";

router.get('/', function (req, res, next) {
    res.render('index');
});

router.get('/registro', function (req, res, next) {
    res.render('registro', { message: "teste" });
});

router.get('/login', function (req, res, next) {
    res.render('login', { message: "teste" });
});

router.get('/messages', function (req, res, next) {
    Message.find({}, function (err, documents) {
        if (err) {
            return res.send('Erro');
        }

        res.send(documents);
    });
});

router.delete('/message/:message_id', function (req, res, next) {
    console.log(req.params.message_id);
    Message.deleteOne({ _id: req.params.message_id }, function (err, document) {
        console.log(document);
    });
    return res.send("ok");
});

router.post('/login', function (req, res, next) {
    var obj = {
        email: req.body.email,
        password: req.body.password,
    };

    User.findOne(obj, function (err, document) {
        if (err) {
            return res.send({"error": "Usuário ou senha incorretos"});
        }

        if (!document) {
            return res.send({"error": "Usuário ou senha incorretos"});
        }

        jwtService.sign(document.toJSON(), key, (err, token) => {
            if (err) {
                return res.send({"error": err});
            }
            res.set("x-access-token", token);
            res.send({
                token: token, name: document.firstName + " " + document.lastName,
                userId: document.id, userEmail: document.email
            });
        });
    });
});

router.post('/message', function (req, res, next) {
    const jwt = req.headers["authorization"].split('Bearer ')[1];
    jwtService.verify(jwt, key, (err, userInfo) => {
        console.log(jwt);
        if (err) {
            console.log(err);
            res.status(403).end();
            return;
        }
        var messageObject = new Message({
            content: req.body.content,
            userId: userInfo._id,
            userEmail: userInfo.email
        });
        messageObject.save();
    
        res.send("ok");
    });
});

router.post('/node-mongodb-mongoose-user', function (req, res, next) {
    var emailVar = req.body.emailBody;
    var userObject = new User({
        firstName: req.body.firstNameBody,
        lastName: req.body.lastNameBody,
        password: req.body.passwordBody,
        email: emailVar
    });
    userObject.save();

    res.redirect('/index');
});

module.exports = router;
