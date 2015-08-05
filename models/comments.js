var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var CommentSchema = new Schema({
  author: String,
  description: String
});

module.exports = mongoose.model('Comment', CommentSchema);