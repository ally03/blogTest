var mongoose = require('mongoose');
var BlogTest = require('../db/db').BlogTest;
var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    BlogTest.find(function (err, results) {
        if (err) { console.log(err); }

        res.send({ create: results });
    });

});

router.post('/', function (req, res) {
    var blog = new BlogTest(req.body);
    blog.save(function (err) {
        // if (err) {console.log(err);}
        if (err){
            return res.send();
        }
        console.log('SAVED!!!');
        res.send('SUCCESS!');
        // res.send('saved');
    });
});


module.exports = router;