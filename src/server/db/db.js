var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/create');

var BlogTest = mongoose.model('BlogTest', mongoose.Schema({
    title: String,
    detail: String
    // isCompleted: Boolean,
    // isEditing: Boolean
}));

module.exports.BlogTest = BlogTest;