var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UsersSchema = new Schema({
  name: {
      type: String,
      trim: true,
      default: undefined,
      index: true,
      required: 'Please provide a name'
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

mongoose.model('User', UsersSchema);
