const express = require('express')
const app = express()
const port = 3000

var json = '{name:"nicolas"}'
app.get('/', (req, res) => res.send(json))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))