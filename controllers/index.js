const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();
const basename = path.basename(module.filename);


fs
  .readdirSync(__dirname)
  .filter(file => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach(file => {
    const fileName = file.substr(0, file.length - 3);
    router.use(`/${fileName}`, require(`./${fileName}`).registerRouter());
  });

router.get('/testing', function(req, res){
    res.send('ok');
});

router.get('/hjs', function(req, res){
    res.render('index', {
        title: 'My beautiful app',
        age: 21
    });
});

router.get('/abc', function(req,res) {
    console.log(req.query);
    //If I do /abc?age=5&name=anthony
    //It will return { age: '5', name: 'anthony' }
});

router.get('/users/:id', function(req,res) {
    console.log(req.params);
    res.send(req.params.id, 200);
});


module.exports = router;
