/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import TextInput from "./common/TextInput";
import { toast } from "react-toastify";
import { createGameInstance } from "../socket_helper/playerSocket";

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
        const playerToInsert = players.filter((player) => player !== '');
        if (playerToInsert.length < 0) {
            toast.error('Please insert at least 4 players!');
            return false;
        }
        createGameInstance(playerToInsert, (ioResponse) => {
            console.log(`${ioResponse.message} with id ${ioResponse.gameId}`);
            props.history.push(`/game/${ioResponse.gameId}`);
        })
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