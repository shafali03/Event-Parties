//Initialize express
const express = require('express')
const app = express()



// choose port 3000
const port = process.env.PORT || 3000;

// listen on port 3000
app.listen(port, () => {
  console.log('Listening to port 3000')
})

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }));


// mock array
var events = [
  { title: "I am your first event", desc: "A great event that is super fun to look at and good", imgUrl: "https://cdn.pixabay.com/photo/2016/04/18/22/05/sea-1337565__480.jpg" },
  { title: "I am your second event", desc: "A great event that is super fun to look at and good", imgUrl: "https://cdn.pixabay.com/photo/2017/08/08/00/17/events-2609526__480.jpg" },
  { title: "I am your third event", desc: "A great event that is super fun to look at and good", imgUrl: "https://cdn.pixabay.com/photo/2017/08/08/00/17/events-2609526__480.jpg" }
]


// send message to home page
app.get('/', (req, res) => {
  res.render('home', { msg: 'Handlebars are cool' });
})

// index
app.get('/', (req, res) => {
  res.render('events-index', { events: events })
})

// new
app.get('/events/new', (req, res) => {
  res.render('events-new', {});
})



const exphbs = require('express-handlebars')



app.engine('handlebars', exphbs({ defaultLayout: 'main' }));

app.set('view engine', 'handlebars');




// create
app.post('/events', (req, res) => {
  console.log(req.body)
})


