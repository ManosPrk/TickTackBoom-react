const GameInstance = require('../models/GameInstance');
const Player = require('../models/Player');

module.exports = function Builders() {
    function buildGameInstance(id, playersId) {
        if (!id || !playersId) {
            return {
                error:
                {
                    message: `Could not build instance, missing value(s): ${!id ? 'id' : ''} ${!playersId ? 'players' : ''}`,
                }
            }
        }

        return new GameInstance(id, playersId);
    }

    function buildPlayer(id, name, roundsLost = 0, isLeader = false) {
        if (!id || !name) {
            return {
                error:
                {
                    message: `Could not build instance, missing value(s): ${!id ? 'id' : ''} ${!name ? 'name' : ''}`,
                }
            }
        }

        return new Player(id, name, roundsLost, isLeader);
    }
    return {
        buildGameInstance,
        buildPlayer
    }
}

