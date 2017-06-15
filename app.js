const express = require('express');
const app = express();
const nunjucks = require('nunjucks');


app.set('view engine', 'html');
app.engine('html', nunjucks.render);
nunjucks.configure('views');


app.use(express.static('assets'));
app.use(express.static('js'));


app.get('/', (req, res, next) => {
  res.render('index');
})

var server = app.listen(process.env.PORT || 8080, function () {
  var port = server.address().port;
  console.log("App now running on port", port);
});
// app.listen(3000, function () {
//   console.log('Listening on port 3000')
// })
