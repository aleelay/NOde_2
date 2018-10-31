const express = require('express');
const app = express();
const hbs = require('hbs');

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'))

hbs.registerHelper('getCurrentYear', () => {
	return new Date().getFullYear()
})

hbs.registerHelper('uppercase', (text) => {
	return text.toUpperCase();
})

app.get('/', (req, res) => {
	res.send('Home');
})

app.get('/about', (req, res) => {
	res.render('about.hbs', {
		title: 'About Page', 
		body: 'Welcome Home!'
	})
})

app.get('/contact', (req, res) => {
	res.render('contact.hbs', {
		title: 'Contact Page', 
		body: 'Welcome to Contact!'
	})
})

app.listen(3000);