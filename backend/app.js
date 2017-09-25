var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var cors = require("cors");
var app = express();
var port = 4200;


mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost/reactStuff')
	.then(() => {
		console.log('Mongoose connection started');
	}).catch(err => {
		console.error("App starting error: ", err.stack);
		process.exit(1);
});

var dataRouter = require("./routes/dataRouter");

app.use(express.static('public'));
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/items', dataRouter);

app.listen(port, function() {
	console.log("Server is running on port: ", port);
});