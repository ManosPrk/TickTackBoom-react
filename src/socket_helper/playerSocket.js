import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:1337');

export function socketPlayers(cb) {
    socket.on('players', (players => cb(players)));
    socket.emit('subscribeToTimer', 1000);
}
