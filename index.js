// imports express
const { text } = require('express')
const express = require('express')
const { sendfile } = require('express/lib/response')
// imports Body Parser
const bodyParser = require('body-parser')

// allows user to user methods: get post update put delete path
const app = express()
// middlewear to iniciate bodyparser
app.use(bodyParser.json(), bodyParser.urlencoded({ extend: false }))
// middlewear helps grap static files
app.use(express.static(__dirname + '/miniature-eureka/Develop/public/assets'))
// http request through get method 
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/miniature-eureka/Develop/public/index.html')
})
app.get('/notes/', function (req, res) {
    res.sendFile(__dirname + '/miniature-eureka/Develop/public/notes.html')
})
app.get('/api/notes', function (req, res) {
    res.send([{
        title: 'prueba',
        text: 'estoy haciendo una prueba de texto'
    },
    {
        title: 'segunda',
        text: 'segundo chequeo'
    }])

})
app.post('/api/notes', function (req, res) {
    console.log(req.body)
})
app.listen(8080)