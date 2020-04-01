import React, { useState } from 'react';
import { Route, Switch } from "react-router-dom";
// import { ToastContainer } from "react-toastify";
import "../css/main.css"
import "react-toastify/dist/ReactToastify.css";
import MainMenu from './MainMenu';
import Game from './Game';
import { ToastContainer, toast } from 'react-toastify';
import PlayerForm from './PlayerForm';
import TextInput from './common/TextInput';

function App(props) {
    const [players, setPlayers] = useState([]);

    function handleBlur(event) {
        event.preventDefault();
        const { target } = event;
        const newPlayers = players;
        newPlayers[target.id] = { id: target.id, name: target.value, roundsLost: 0 };
        setPlayers(newPlayers);
    }


    function handleSubmit(event) {
        event.preventDefault();
        const playersToInsert = players.filter((player) => player !== '');
        if (playersToInsert.length < 4) {
            toast.error('Please insert at least 4 players!');
            return false;
        }
        return true;
    }

    return (
        <div className="container-fluid">
            <ToastContainer newestOnTop autoClose={2000} hideProgressBar />
            <Switch>
                <Route path="/" exact component={MainMenu} />
                <Route
                    path="/players" render={(props) => <PlayerForm handleSubmit={handleSubmit} handleBlur={handleBlur} {...props} />}
                />
                <Route
                    path="/game" render={(props) => <Game players={players} {...props} />}
                />
                <Route path="/inputs" exact component={TextInput} />
            </Switch>
        </div>
    );
}

export default App;
