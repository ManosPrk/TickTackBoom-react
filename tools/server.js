const io = require('socket.io')();
const uuidv4 = require('uuid').v4;
require('dotenv').config();

let gameId;
let players;

io.on('connection', (client) => {
    console.log('in connection')
    client.on('subscribeToPlayers', (_players) => {
        savePlayers(_players);
        client.emit('addMessage', 'players added');
    });

    client.on('playersArray', () => {
        client.emit('socketPlayers', players);
    })
});

function savePlayers(_players) {
    console.log(players);
    _players.forEach((_player) => {
        _player.id = uuidv4();
    })
    players = _players;
}

const port = 1337;
io.listen(port);
console.log('listening on port ', port);