/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
// import { savePlayer } from './api/playerApi'
import TextInput from "./common/TextInput";
// import { toast } from "react-toastify";
import { useCookies } from "react-cookie";
import { toast } from "react-toastify";
import playerStore from "../store/playerStore"
// import TextInput from "./common/TextInput";
import { savePlayer } from "../actions/playerActions";

function PlayerForm(props) {
    const [players, setPlayers] = useState([]);

    function handleBlur(event) {
        const { target } = event;
        const newPlayers = players;
        newPlayers[target.id] = { id: null, name: target.value, roundsLost: 0 };
        setPlayers(newPlayers)
    }


    function handleSubmit(event) {
        event.preventDefault();
        const playersToInsert = players.filter((player) => player !== '' && typeof String);
        if (playersToInsert.length < 4) {
            toast.error('Please insert at least 4 players!');
            return;
        }
        playersToInsert.forEach((player) => savePlayer(player));
        /// Save to API
        // console.log(playersToInsert);
        // if (playersToInsert.length > 0) {
        //     playersToInsert.forEach((player, index) => {
        //         savePlayer(player)
        //             .then(toast.success('player saved'))
        //             .catch((error) => console.log(error));
        //     });
        // }
        ///
        props.history.push('/game');
    }

    return (
        <form onKeyPress={(event) => event.key === 'Enter' ? event.preventDefault() : null} onSubmit={handleSubmit} id="player-container">
            <h1 style={{ color: 'aliceblue' }} className="header">Set player names</h1>
            <TextInput handleBlur={handleBlur}></TextInput>
            {/* <div className="d-flex flex-column mt-3">
                {players.map((player, index) => {
                    return (
                        <input key={index} onBlur={handleBlur} id={index} type="text" className="form-control mb-3" name={player} placeholder="Name.." />
                    );
                })}
            </div> */}
            <input type="submit" className="btn btn-primary" value="Start Game" />
        </form>
    );
}

export default PlayerForm;