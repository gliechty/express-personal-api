// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

var db = require('./models');

var new_artist = {name: "Bob Dylan", genre: "Rock"};

db.Artist.create(new_artist, function(err, artist){
  if (err){
    return console.log("Error:", err);
  }

  console.log("Created new artist", artist._id);
  process.exit(); // we're all done! Exit the program.
});

