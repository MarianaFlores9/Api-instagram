const { application } = require('express');
const express = require('express');
const app = express();
const path = require('path');

app.use('/',express.static('public'));
// Setting EJS as templating engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/metodo', (req, res) => {
  const toke = 'IGQVJXd3FGOHBjQzNNWW1sY2lXRkhNTFZA4SEpVbmhOQ095WlBaOTVhMHVteUREdFF5bHlESHZAYSUdjNDRKRllrWEhmN21FLXF1MTJsX2VSUEJySUxZAdlJNZA0VYUTJnRWJHTzdKYWM3aUE1Ny04OEIxSQZDZD';
  res.send(toke);
})



app.listen(process.env.PORT || 3000, () => {
    console.log("APP IS LISTENING ON PORT 3000!")
})