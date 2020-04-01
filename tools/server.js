const io = require('socket.io')();
require('dotenv').config()

let gameId;
let players;

io.on('connection', (client) => {
    console.log('in connection')
    client.on('subscribeToTimer', (_players) => {
        players = _players
        console.log('players to add', players);
        client.emit(players, 'players added');
    });

    client.on('playersArray', () => {
        client.emit('socketPlayers', players);
    })
});

const port = 1337;
io.listen(port);
console.log('listening on port ', port);