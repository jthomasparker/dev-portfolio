const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000

app.use(express.static('public'))
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}))
const htmlRoutes = require('./routes/html-routes')(app)
const apiRoutes = require('./routes/api-routes')(app)


app.listen(PORT, function(){
    console.log("Server listening on port", PORT)
})