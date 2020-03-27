const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.json({ message: 'Ahoy!sa' })
})
app.listen(9001, () => {
  console.log('Application is running on port 9000')
})