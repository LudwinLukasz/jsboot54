var express = require('express');
var app = express();

app.set('view engine', 'pug');
app.set('views','./views');

app.get('/', function(req, res){
	res.render('first')
});

app.get('/auth/google', function(req, res){
	res.render('main')
});

app.get('/googlelogin', function (req, res) {
	const response = {
		first_name: req.query.first_name,
		last_name: req.query.last_name
	};
	res.render('googlel', {
	user:
		{ name: response.first_name, last: response.last_name }
	});
});

app.listen(3000);
app.use(function (req, res, next) {
	res.status(404).send('Wybacz, nie mogliśmy odnaleźć tego, czego żądasz!')
});