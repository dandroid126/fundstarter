var express = require('express')
var app = express()

app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
response.sendfile('fundstarter.html') 
})

var port = process.env.PORT || 8080
app.listen(app.get(port), function() {
  console.log("Node app is running at localhost:" + app.get(port))
})
