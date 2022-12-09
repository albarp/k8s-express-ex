const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  console.log(`AppName: ${process.env.APP_NAME}`)
  console.log(`Username: ${process.env.USERNAME}`)
  console.log(`Password: ${process.env.PASSWORD}`)
  res.send('Hello World4!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})