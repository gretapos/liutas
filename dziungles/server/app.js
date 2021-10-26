const express = require('express')
const app = express()
const port = 3003
const mysql = require('mysql');
const cors = require('cors')
app.use(cors())

app.use(express.urlencoded({
  extended: true
}))
app.use(express.json());

const con = mysql.createConnection({
  host: "localhost",
  user: "zmones",
  password: "zmones1234"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

app.get('/', (req, res) => {
  res.send('Labas, ka tu?')
})

app.get('/labas/', (req, res) =>{
  
})

//app.listen(port, () => {
//  console.log(`Example app listening at http://localhost:${port}`)
//})