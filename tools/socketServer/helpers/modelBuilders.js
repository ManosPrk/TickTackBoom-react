const GameInstance = require('../entities/GameInstance');
const Player = require('../entities/Player');

module.exports = function Builders() {
    function buildGameInstance(id, playersId) {
        if (!id || !playersId) {
            return {
                error:
                {
                    message: `Could not build game, missing value(s): ${!id ? 'id' : ''} ${!playersId ? 'players' : ''}`,
                }
            }
        }

        return new GameInstance(id, [playersId]);
    }

    function buildPlayer(id, name, isLeader = false, roundsLost = 0) {
        if (!id || !name) {
            return {
                error:
                {
                    message: `Could not build player, missing value(s): ${!id ? 'id' : ''} ${!name ? 'name' : ''}`,
                }
            }
        }

        return new Player(id, name, isLeader, roundsLost);
    }
    return {
        buildGameInstance,
        buildPlayer
    }
}

