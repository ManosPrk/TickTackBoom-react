const io = require('socket.io')();
const uuidv4 = require('uuid').v4;
const { buildGameInstance, buildPlayer } = require('./helpers/modelBuilders')();
require('dotenv').config();

let gameInstances = [];
let players = [];

//TODO create new modal to insert player name and create new game instance
io.on('connection', (client) => {
    console.log('in connection')
    client.on('subscribeToPlayers', (_player) => {
        savePlayer(_player);
        client.emit('addMessage', 'player subscribed');
    });

    client.on('createGameInstance', (player) => {
        const playerId = savePlayer(player, true);
        const newInstanceIndex = saveGameInstance(uuidv4(), playerId) - 1;
        const gameId = gameInstances[newInstanceIndex].id;
        console.log(gameInstances);
        client.emit('createGameInstanceResponse', {
            message: 'New game successfully created!',
            gameId
        });
    })

    client.on('isValidGame', (gameId, ackCallback) => {
        let isValid = false;
        if (gameInstances.some((game) => game.id === gameId)) {
            isValid = true;
        }
        console.log(isValid);
        ackCallback(isValid);
    })

    client.on('subcribeToGameInstance', (gameId) => {

    })

    client.on('playersArray', () => {
        client.emit('socketPlayers', players);
    })
});

function savePlayer(_player, isLeader = false) {
    const existingPlayer = players.find((player) => player.name === _player.name);
    if (existingPlayer) {
        return existingPlayer;
    }
    const newPlayerIndex = players.push(buildPlayer(uuidv4(), _player.name, isLeader));
    const playerId = players[newPlayerIndex].id;
    return playerId
}

function saveGameInstance(id, playerId) {
    return gameInstances.push(buildGameInstance(id, playerId));
}



const port = 1337;
io.listen(port);
console.log('listening on port ', port);