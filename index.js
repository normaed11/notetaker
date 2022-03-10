// imports express
const express = require('express')
const { sendfile } = require('express/lib/response')
// allows user to user methods: get post update put delete path
const app = express()
// middlewear helps grap static files
app.use(express.static(__dirname + '/miniature-eureka/Develop/public/assets/css'))
// http request through get method 
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/miniature-eureka/Develop/public/index.html')
})
app.get('/notes/', function (req, res) {
    res.sendFile(__dirname + '/miniature-eureka/Develop/public/notes.html')
})
app.listen(8080)