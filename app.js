const express = require('express')
const app = express()
const mysql = require('mysql')

const port = 3000

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '000000',
  database: 'learn_mysql'
})

connection.connect((err) => {
  if (err) {
    console.log(`Connection Mysql on ${err}`)
    return
  }
  console.log(`Connection Mysql success!`)
})

app.use('/', (req, res) => {
  connection.query('SELECT * FROM learn_table', (err, result) => {
    if (err) throw err;
    res.send(result)
  })
})

app.listen(port, () => {
  console.log(`Server running at localhost:${port}`)
})
