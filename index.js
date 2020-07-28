
const express = require('express')
const basicAuth = require('express-basic-auth')
const { exec } = require('child_process')

const app = express()

app.use(express.static('public'))
app.use(express.urlencoded())

const auth = basicAuth({
  users: JSON.parse(process.env.USERS)
})

app.post('/note', auth, (req, res) => {
  exec(path.join(__dirname, 'new_note.sh')
    + ' "' + req.body.note + '"', () => {})
})

app.listen(process.env.PORT)

