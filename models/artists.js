var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var artistSchema = new Schema({
	// id: Number,
	name: String,
	genre: String
});
// var Artist = require('./artists.js');

module.exports = mongoose.model('Artist', artistSchema);
