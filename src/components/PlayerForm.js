/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import TextInput from "./common/TextInput";
import { useCookies } from "react-cookie";
import { toast } from "react-toastify";
import playerStore from "../store/playerStore";
import { savePlayer, loadPlayers } from "../actions/playerActions";

function PlayerForm(props) {
    function onSubmit(event) {
        props.handleSubmit(event);
        props.history.push('/game');
    }
    return (
        <form onKeyPress={(event) => event.key === 'Enter' ? event.preventDefault() : null} onSubmit={onSubmit} id="player-container">
            <h1 style={{ color: 'aliceblue' }} className="header">Set player names</h1>
            <TextInput handleBlur={props.handleBlur}></TextInput>
            <input type="submit" className="btn btn-primary" value="Start Game" />
        </form>
    );
}

export default PlayerForm;