const express = require('express')
const app = express();
const server = app.listen(3000);

app.use(express.static('public'));

console.log("My socket server is running");

const socket = require('socket.io');
const io = socket(server);

io.sockets.on('connection', newConnection);

function newConnection(socket){
    console.log(socket)
}



















// const http = require('http')
// const express = require('express')

// const app = express()
// app.use(express.static('public'))

// app.set('port', '3000')

// const server = http.createServer(app)
// server.on('listening', () => {
//  console.log('Listening on port 3000')
// })

// server.listen('3000')

// //web sockets

// const io = require('socket.io')(server)

// io.sockets.on('connection', (socket) => {
//     console.log('Client connected: ' + socket.id)
//     socket.on('mouse', (data) => socket.broadcast.emit('mouse', data))
//     socket.on('disconnect', () => console.log('Client has disconnected'))
//    })

// server.listen('port')


