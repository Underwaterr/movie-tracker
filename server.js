var express = require('express');
var bodyParser = require('body-parser')
var app = express();
var fs = require('fs');
var path = require('path');

app.use(express.static(path.join(__dirname, '/public')));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.use('/', express.static(path.join(__dirname, 'public')));

app.get('/favorites', function(req, res) {
  var data = fs.readFileSync('./data.json');
  res.setHeader('Content-Type', 'application/json');
  res.send(data);
});

app.post('/favorites', function(req, res) {
  if(!req.body.name || !req.body.oid) {
    res.send("Error");
    return
  }
  var movies = JSON.parse(fs.readFileSync('./data.json'));

  if(movies.some(movie=> movie.oid === req.body.oid)) {
    // Movie already added to favorites
    res.setHeader('Content-Type', 'application/json')
    res.send(movies)
  }
  else {
    movies.push(req.body)
    fs.writeFile('./data.json', JSON.stringify(movies), err=> {
      if(err) res.send("Error");
      res.setHeader('Content-Type', 'application/json')
      res.send(movies)
    })
  }
});

const port = process.env.PORT || 3000;

app.listen(port, function(){
  console.log("Listening on port 3000");
});