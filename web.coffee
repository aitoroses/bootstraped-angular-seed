
### Module Dependencies ###

express = require 'express'
app = express()

# Configuration

PORT = process.env.PORT | 5000

app.configure ->
    app.use express.bodyParser()
    app.use express.methodOverride()
    app.use express.static("#{__dirname}/app")
    console.log 'static is on ' + "#{__dirname}/app"
    app.use app.router
    return


### Routes ###

# app.get('/', function(req, res){
#   console.log('Serving the index');
#   res.sendfile(__dirname + 'app/index.html');
# });

app.get '/test', (req, res) ->
    res.send 200
    return


app.get '*', (req, res) ->
    res.sendfile "#{__dirname}/app/index.html"
    return

app.listen PORT, ->
    console.log "Server started and listening on #{PORT}"
    return