const express = require('express')
const mysql = require('mysql')
const mongoose = require('mongoose')
const app = express()

const port = 3000

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '000000'
})

connection.connect((err) => {
  if (err) {
    console.log(`Connection Mysql on error ${err}`)
    return
  }
  console.log(`Connection Mysql success!`)
})

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://nodeServer:000000@localhost/nodeServer', {
  useMongoClient: true
})
mongoose.connection.on('connected', function () {
  console.log('MongoDB connected success!')
})
mongoose.connection.on('error', function () {
  console.log('MongoDB connected fail!')
})
mongoose.connection.on('disconnected', function () {
  console.log('MongoDB disconnected!')
})

app.use('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Server running at localhost:${port}`)
})
