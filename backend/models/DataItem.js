var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var DataItem = new Schema({
	name: {
		type: String
	}, 
	date: {
		type: Date,
		default: Date.now()
	}, 
	post: {
		type: String
	},
},{
		collection: 'posts'
});

module.exports = mongoose.model('DataItem', DataItem);