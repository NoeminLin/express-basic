// Include express
const express = require('express')
const app = express()
const exphbs = require('express-handlebars')

// define server related variables
const port = 3000

// express template engine
app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// setting static files
app.use(express.static('public'))


// setting the route and corresponding response
app.get('/', (req, res) => {
  res.render('index')
})
app.get('/:page', (req, res) => {
  const page = req.params.page;
  console.log(page);
  const menuClass = { about: '', protfolio: '', contact: '' };
  if (page === 'about' || page === 'protfolio' || page === 'contact') {
    menuClass[page] = 'active'
    res.render(page, { menuClass: menuClass })
  } else {
    res.render('index')
  }
})

// Listen and start the server
app.listen(port, () => {
  console.log(`Express is running on http://localhost:${port}`)
})