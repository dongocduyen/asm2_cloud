var express = require('express');
var bodyParser = require('body-parser');

var Database = require('./db/database');
var routes = require('./routes/controller');

var app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine', 'ejs');
app.set('views', './views');

// Website routes
app.use('/', routes);

const PORT = process.env.PORT || 3000   // mới thêm cái này nếu dùng wed nó sẽ chạy process còn localhost thì sẽ chạy ở port 3000

app.listen(PORT, function () {
    console.log("Starting at port 3000...");
});