var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SurveysSchema = new Schema({
  _user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      unique: false,
      index: true,
      required: 'Please provide a reference User object'
  },
  results: {
      type: Array,
      default: undefined,
      required: 'Please provide survey results',
  },
  updated: {
      type: Date,
      default: Date.now
  },
  created: {
      type: Date,
      default: Date.now
  }
});

mongoose.model('Survey', SurveysSchema);
