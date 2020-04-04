class GameInstance {
    constructor(_id, _playersId = []) {
        this.id = _id;
        this.playersId = _playersId;
    }
}

module.exports = GameInstance;