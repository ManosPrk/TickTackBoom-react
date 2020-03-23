import React from "react";
import TextInput from "./common/TextInput";

function PlayerForm(props) {
    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            props.ohandleSubmit(event);
        }} id="player-container">
            <div className="input-group mt-3">
                {props.players.map((player, index) => {
                    return (
                        <div key={index} className="input-group input-group-sm mb-3">
                            <input type="text" className="form-control" name={player} placeholder="Name.." />
                        </div>
                    );
                })}
            </div>
            {/* <input type="submit" value="Start Game!" id="game-start" className="btn btn-light" /> */}
            <input type="submit" value="Save" className="btn btn-primary" />
        </form>
    );
}

export default PlayerForm;