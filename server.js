const http = require('http')
const express = require('express')

const io = require('socket.io')(server)

const app = express()
app.use(express.static('public'))

app.set('port', '3000')

const server = http.createServer(app)
server.on('listening', () => {
 console.log('Listening on port 3000')
})

io.sockets.on('connection', (socket) => {
    console.log('Client connecter: ' + socket.id)
    socket.on('mouse', (data) => socket.broadcast.emit('mouse', data))
    socket.on('disconnect', () => console.log('Client has disconnected'))
})

server.listen('3000')