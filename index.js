// imports express
const { text } = require('express')
const express = require('express')
const { sendfile } = require('express/lib/response')
const fs = require('fs');
let notes = require('./miniature-eureka/Develop/db/db.json')
// imports Body Parser
const bodyParser = require('body-parser')
// var notes = [{
//     title: 'prueba',
//     text: 'estoy haciendo una prueba de texto'
// },
// {
//     title: 'segunda',
//     text: 'segundo chequeo'
// }]

// allows user to user methods: get post update put delete path
const app = express()
// middlewear to iniciate bodyparser
app.use(bodyParser.json(), bodyParser.urlencoded({ extend: false }))
// middlewear helps grap static files
app.use(express.static(__dirname + '/miniature-eureka/Develop/public/assets'))
// http request through get method 
app.get('/', function (req, res) {
    console.log(notes)
    res.sendFile(__dirname + '/miniature-eureka/Develop/public/index.html')
})
app.get('/notes/', function (req, res) {
    res.sendFile(__dirname + '/miniature-eureka/Develop/public/notes.html')
})
app.get('/api/notes', function (req, res) {
    res.send(notes)

})
app.post('/api/notes', function (req, res) {
    // console.log(req.body)
    notes.push(req.body)
    let data = JSON.stringify(notes);

    fs.writeFileSync('./miniature-eureka/Develop/db/db.json', data);

})
app.delete('/api/notes', function (req, res) {
    console.log(req.body)
    // notes.push(req.body)
    // let data = JSON.stringify(notes);

    // fs.writeFileSync('./miniature-eureka/Develop/db/db.json', data);

})
app.listen(8080)