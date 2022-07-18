const express = require('express')
const cors = require('cors')

const server = express()
server.use(cors())
server.use(express.json())

const dishesRoutes = require('./controllers/dishes')
const authRoutes = require('./controllers/auth')
const usersRoutes = require('./controllers/users')

server.use('/dishes', dishesRoutes)
server.use('/auth', authRoutes)
server.use('/users', usersRoutes)

server.get('/', (req, res) => {
    res.send('Hello world!')
})

module.exports = server
