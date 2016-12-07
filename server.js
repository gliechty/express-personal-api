// require express and other modules
var express = require('express'),
    app = express();

// parse incoming urlencoded form data
// and populate the req.body object
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/************
 * DATABASE *
 ************/

var db = require('./models');

// console.log("server js is running");
var artists = db.Artist.find();

/**********
 * ROUTES *
 **********/

// Serve static files from the `/public` directory:
// i.e. `/images`, `/scripts`, `/styles`
app.use(express.static('public'));

/*
 * HTML Endpoints
 */

app.get('/', function homepage(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


/*
 * JSON API Endpoints
 */

app.get('/api', function index(req, res) {
  // Index- GET
  res.json({
    message: "Welcome to my personal api! Here's what you need to know!",
    documentation_url: "https://github.com/gliechty/express-personal-api/README.md", // CHANGE ME
    base_url: "https://desolate-dawn-69192.herokuapp.com/", 
    endpoints: [
      {method: "GET", path: "/api", description: "Describes all available endpoints"},
      {method: "GET", path: "/api/profile", description: "My basic info"}, // CHANGE ME
      {method: "GET", path: "/api/artists", description: "My favorite artists"},
      {method: "POST", path: "/api/artists", description: "Add an artist"}, // CHANGE ME
      {method: "PATCH", path: "/api/artists", description: "Update an artist"},
      {method: "DELETE", path: "/api/artists", description: "Delete and artist"}
    ]
  });
});

// my code//

// Profile - GET
app.get('/api/profile', function index(req, res){
  res.json({
    name: "Guy Liechty",
    github_link: "https://github.com/gliechty/",
    home_town: "Denver, Colorado",
    family_members: [
      {name: "Bob", relationship: "Father"},
      {name: "Luke", relationship: "Brother"}
    ],
    pets: [
      {name: "Lola", breed: "Border Collie", age: "1 year"}
    ]
  });
});

// Artists - GET (all)
app.get('/api/artists', function index(req, res){
  db.Artist.find(function(err, artists){
    if (err) {return console.log("index error: " + err); }
    res.json(artists);
  });
});

// Artists Get (one)
app.get('/api/artists/:id', function show(req, res){
  var artists = db.Artist.find();
  console.log(artists);
  var request = req.body.name;
  console.log(req.body.name);
  for (i=0; i<artists.length;i++){
    if (artists[i].name == request){
      res.json(artists[i]);
    }
  }
});

// Artists - POST create an artist
app.post('/api/artists', function create(req, res){
  // var newArtist = new db.Artist(req.body);
  // console.log(req.body);
  // // id: Number,
  // newArtist.save(function(err, artist){
  //   if (err) { return console.log("err : "+err);}
  //   console.log("created " + artist.name);
  //   res.json(artist);
  // });
  Artist.create({name: req.body.name, genre: req.body.genre}), function (err, nerd){
    res.json(nerd);
  };
});


// Artists - PATCH
// app.patch('/api/artists', function patch(req, res){
//   // var name = req.params.name;
//   // for (i=0, i<artists.length; i++){
//   //   if (artists[i].name == name){
//   //     artists[i].name=
//   //   }
//   // }
// });

// Artists - DELETE

// end my code//

/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is up and running on http://localhost:3000/');
});
