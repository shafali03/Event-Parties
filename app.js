//Initialize express
const express = require('express')
const app = express()

const exphbs = require('express-handlebars')

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));

app.set('view engine', 'handlebars');

// send hello world message to home page
app.get('/', (req, res) => {
  res.render('home', { msg: 'Handlebars are cool' });
})

// choose port 3000
const port = process.env.PORT || 3000;

// listen on port 3000
app.listen(port, () => {
  console.log('Listening to port 3000')
})


