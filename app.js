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
app.get('/about', (req, res) => {
  const menuClass = { about: 'active', protfolio: '', contact: '' }
  res.render('about', { menuClass: menuClass })
})
app.get('/protfolio', (req, res) => {
  const menuClass = { about: '', protfolio: 'active', contact: '' }
  res.render('protfolio', { menuClass: menuClass })
})
app.get('/contact', (req, res) => {
  const menuClass = { about: '', protfolio: '', contact: 'active' }
  res.render('contact', { menuClass: menuClass })
})

// Listen and start the server
app.listen(port, () => {
  console.log(`Express is running on http://localhost:${port}`)
})