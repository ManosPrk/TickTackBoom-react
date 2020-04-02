import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:1337');

export function socketPlayers(players, cb) {
    socket.on('addMessage', (message => cb(message)));
    socket.emit('subscribeToPlayers', players);
}

export function getSocketPlayers(cb) {
    socket.on('socketPlayers', (players) => cb(players));
    socket.emit('playersArray');
}

export function createGameInstance(player, cb) {
    socket.on('createGameInstanceResponse', (socketResponse) => cb(socketResponse));
    socket.emit('createGameInstance', player);
}

export function isInstanceValid(gameId) {
    return new Promise((resolve, reject) => {
        socket.emit('isValidGame', gameId, function (response) {
            resolve(response);
        });
    });
}
