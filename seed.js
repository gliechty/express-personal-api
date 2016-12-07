// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

var db = require('./models');


var artistList = [];
artistList.push({
	name: "Bob Dylan", 
	genre: "Blues/Rock"
	});
artistList.push({
	name: "Seal",
	genre: "Pop?"
	});
artistList.push({
	name: "Isaac Hayes",
	gernre: "Soul"
});

db.Artist.remove({}, function(err, artists){

	db.Artist.create(artistList, function (err, album){
		if (err) {return console.log('Err: ', err);}
		console.log("artists added", artists);
		process.exit();
	});
});



// app.get('/api/artists', function artist_index(req, res){
// 	console.log("seeding json");
// 	res.json({})
// })
// 	db.Artist.create(new_artist, function(err, artist){
//   	if (err){
//     return console.log("Error:", err);
//   }

//   console.log("Created new artist", artist._id);
//   process.exit(); // we're all done! Exit the program.
// });

