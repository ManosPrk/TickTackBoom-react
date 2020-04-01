const io = require('socket.io')();
require('dotenv').config()

io.on('connection', (client) => {
    console.log('in connection')
    client.on('subscribeToTimer', (id) => {
        console.log('player is subcribing to the event with id', id);
        client.emit('players', [
            { id, name: 'Manos', roundsLost: 0 },
        ]);
    });
});

const port = 1337;
io.listen(port);
console.log('listening on port ', port);