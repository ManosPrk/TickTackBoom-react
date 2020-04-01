import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:1337');

export function socketPlayers(players, cb) {
    socket.on('players', (message => cb(message)));
    socket.emit('subscribeToTimer', players);
}

export function getSocketPlayers(cb) {
    socket.on('socketPlayers', (players) => cb(players));
    socket.emit('playersArray');
}
