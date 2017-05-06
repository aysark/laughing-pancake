var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = mongoose.model('User');

/* GET a user by full name */
router.get('/search', function(req, res, next) {
  User.find({name: new RegExp('^'+req.query.name, "i")}, (err, user, msg) => {
    if (err) {
      if (err.name === 'CastError') {
        res.status(400);
        return res.render('error', { error: err });
      }
      res.status(500);
      return res.render('error', { error: err });
    }
    res.json(user);
  });
});

/* CREATE a user */
router.post('/', function(req, res, next) {
  var user = new User(req.body);
  user.save((err, result) => {
    if (err) {
      if (err.name === 'MongoError' && err.code === 11000) {
        res.status(400);
        return res.render('error', { error: err });
      }
      res.status(500);
      return res.render('error', { error: err });
    }

    res.json(result);
  });
});

/* UPDATE a user */
router.put('/:id', function(req, res, next) {
  User.update({_id: req.params.id}, {$set: req.body}, (err, result) => {
    if (err) {
      if (err.name === 'CastError') {
        res.status(400);
        return res.render('error', { error: err });
      }
      res.status(500);
      return res.render('error', { error: err });
    }
    if (result.n === 0) {
      res.status(404);
      return res.render('error', { error: 'Not found' });
    }
    res.json(result);
  });

});

/* GET a user */
router.get('/:id', function(req, res, next) {
  User.findById(req.params.id, (err, user, msg) => {
    if (err) {
      if (err.name === 'CastError') {
        res.status(400);
        return res.render('error', { error: err });
      }
      res.status(500);
      return res.render('error', { error: err });
    }
    res.json(user);
  });
});

/* DELETE a user */
router.delete('/:id', function(req, res, next) {
  User.remove({_id: req.params.id}, (err, result) => {
    if (err) {
      if (err.name === 'CastError') {
        res.status(400);
        return res.render('error', { error: err });
      }
      res.status(500);
      return res.render('error', { error: err });
    }

    if (result.n === 0) {
      res.status(404);
      return res.render('error', { error: 'Not found' });
    }
    res.json(result);
  });
});

/* GET users */
router.get('/', function(req, res, next) {
  User.find((err, users) => {
    res.json(users);
  });
});

module.exports = router;
