const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const router = express.Router()
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

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'))

router.get('/api', (req, res) => {
  res.send('链接成功')
})
router.post('/api/search', (req, res) => {
  if (!req.body.search || req.body.search === '') {
    connection.query(`SELECT * FROM article;`, (err, results, fields) => {
      if (err) console.error(err)
      res.send(results)
    })
  } else {
    connection.query(`SELECT * FROM article WHERE name REGEXP \'${req.body.search}\' OR content REGEXP \'${req.body.search}\';`, (err, results, fields) => {
      if (err) console.error(err)
      res.send(results)
    })
  }
})

app.use('/', router)

app.listen(port, () => {
  console.log(`Server running at localhost:${port}`)
})
