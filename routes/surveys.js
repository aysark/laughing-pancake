var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Survey = mongoose.model('Survey');

/* GET a survey by full name */
router.get('/search', function(req, res, next) {
  Survey.find({name: new RegExp('^'+req.query.name, "i")}, (err, survey, msg) => {
    if (err) {
      if (err.name === 'CastError') {
        res.status(400);
        return res.render('error', { error: err });
      }
      res.status(500);
      return res.render('error', { error: err });
    }
    res.json(survey);
  });
});

/* CREATE a survey */
router.post('/', function(req, res, next) {
  var survey = new Survey(req.body);
  survey.save((err, result) => {
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

/* UPDATE a survey */
router.put('/:id', function(req, res, next) {
  Survey.update({_id: req.params.id}, {$set: req.body}, (err, result) => {
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

/* GET a survey */
router.get('/:id', function(req, res, next) {
  Survey.findById(req.params.id, (err, survey, msg) => {
    if (err) {
      if (err.name === 'CastError') {
        res.status(400);
        return res.render('error', { error: err });
      }
      res.status(500);
      return res.render('error', { error: err });
    }
    res.json(survey);
  });
});

/* DELETE a survey */
router.delete('/:id', function(req, res, next) {
  Survey.remove({_id: req.params.id}, (err, result) => {
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

/* GET surveys */
router.get('/', function(req, res, next) {
  Survey.find((err, surveys) => {
    res.json(surveys);
  });
});

module.exports = router;
