const express = require('express')
const path = require('path')

const PORT = process.env.PORT || 8080
const app = express()

app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))

app.listen(PORT, () => console.log(`Listening on http://127.0.0.1:${ PORT }`))