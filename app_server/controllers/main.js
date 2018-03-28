var mongoose = require('mongoose');
var Ag = mongoose.model('Agency');

var sendJSONresponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};

module.exports.index = function(req, res) {
	Ag.find(function(err, docs){
		console.log(docs);
	});

	// Ag.find({}, function(err, docs){
 //    //mongoose.disconnect();
     
 //    if(err) return console.log(err);
     
 //    console.log(docs);
	// });
//console.log(allCity);
	res.render('index', { title: "Tmp Express!!!" })
}