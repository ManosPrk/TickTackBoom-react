/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import TextInput from "./common/TextInput";
import { toast } from "react-toastify";
import { socketPlayers } from "../socket_helper/playerSocket";

function PlayerForm(props) {
    const [players, setPlayers] = useState([]);

    function handleBlur(event) {
        event.preventDefault();
        const { target } = event;
        const newPlayers = players;
        newPlayers[target.id] = { id: null, name: target.value, roundsLost: 0 };
        setPlayers(newPlayers);
    }

    function handleSubmit(event) {
        event.preventDefault();
        const playersToInsert = players.filter((player) => player !== '');
        if (playersToInsert.length < 4) {
            toast.error('Please insert at least 4 players!');
            return false;
        }
        socketPlayers(players, (message) => {
            console.log(message);
        });
        props.history.push('/game');
        return true;
    }

    return (
        <form onKeyPress={(event) => event.key === 'Enter' ? event.preventDefault() : null} onSubmit={handleSubmit} id="player-container">
            <h1 style={{ color: 'aliceblue' }} className="header">Set player names</h1>
            <TextInput handleBlur={handleBlur}></TextInput>
            <input type="submit" className="btn btn-primary" value="Start Game" />
        </form>
    );
}

export default PlayerForm;