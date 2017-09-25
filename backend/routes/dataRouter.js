var express = require("express");
var app = express();
var dataRouter = express.Router();

var DataItem = require("../models/DataItem");

dataRouter.route('/add/post').post(function(req, res) {
	var dataItem = new DataItem(req.body);
	dataItem.save().then(dataItem => {
		res.status(200).json({DataItem: 'DataItem added successfully'});
	}).catch(err => {
		res.status(400).send("unable to save to database");
	});
});

dataRouter.route('/').get(function(req, res) {
	DataItem.find(function(err, itms) {
		if (err) {console.log(err);}
		else {res.json(itms);}
	});
});

dataRouter.route('/edit/:id').get(function(req, res) {
	var id = req.params.id;
	DataItem.findById(id, function(err, item) {
		res.json(item);
	});
});

dataRouter.route('/update/:id').post(function(req, res) {
	DataItem.findById(req.params.id, function(err, item) {
		if (!item) {return next(new Error('Could not load DataItem'))}
		else {
			dataItem.post = req.body.post;
			dataItem.name = req.params.name;
			dataItem.date = req.params.date;
/////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////If you get an error about your dataItem, look here
/////////////////////////////////////////////////////////////////////////////////////////
			dataItem.save().then(dataItem => {
				res.json('Update complete');
			})
			.catch(err => {
				res.status(400).send("unable to process the update")
			});
		}	
	});
});

dataRouter.route('/delete/:id').get(function(req, res) {
	DataItem.findByIdAndRemove({_id: req.params.id},
		function(err, item) {
			if (err) {console.log('delete err: ', err);}
			else {res.json(item);}
	});
});

module.exports = dataRouter;