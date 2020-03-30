const express = require('express')
const bodyParser = require('body-parser')

const path = require('path')

const port = process.env.PORT || 3000

const app = express()

const adminRouter = require('./adminRouter')

app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


app.use(express.static('public'))


app.get('/', function(req,res){
    res.sendFile('./public/index.html')
})

app.get('/home', function(req,res){
    res.redirect('/')
})

app.get('/gelato', function(req,res){
    res.sendFile(path.join(__dirname+'/public/gelato.html'))
})

app.get('/burger', function(req,res){
    res.sendFile(path.join(__dirname+'/public/burger.html'))
})

app.get('/pizza', function(req,res){
    res.sendFile(path.join(__dirname+'/public/pizza.html'))
})


app.get('/services', function(req,res){
    res.sendFile(path.join(__dirname+'/public/services.html'))
})

app.use('/admin', adminRouter)


app.use('/error', function(req,res){
    res.sendFile(path.join(__dirname+'/public/error.html'))
})

app.use('/*', function(req,res){
    res.redirect('/error')
})


app.listen(port, function() {
    console.log('Listening on port',port)
})