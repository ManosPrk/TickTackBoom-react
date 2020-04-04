const gameInstances = [];

const GameRepository = {
    getGameInstances: () => {
        return gameInstances;
    },
    getGameInstanceById: id => {
        return gameInstances.find((game) => game.id === id);
    },
    addPlayerToGameInstance: (id, player) => {
        console.log(id);
        const gameToAddPlayer = gameInstances.find((game) => game.id === id);
        console.log(gameToAddPlayer);
        gameToAddPlayer.playersId.push(player.id);
    },
    addGameInstance: game => {
        return gameInstances[gameInstances.push(game) - 1].id;
    },
    deleteGameInstance: id => {
        const gameToDeleteId = this._gameInstances.findIndex((game) => game.id = id);
        this._gameInstances.splice(gameToDeleteId, 1);
    }
};

Object.freeze(GameRepository);

module.exports = GameRepository;