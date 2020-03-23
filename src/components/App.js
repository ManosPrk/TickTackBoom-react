import React from 'react';
import { Route, Switch } from "react-router-dom";
// import { ToastContainer } from "react-toastify";
import "../css/main.css"
import "react-toastify/dist/ReactToastify.css";
import MainMenu from './MainMenu';
import Bomb from './Bomb';
import Players from './Players';
import Card from './Card';
import Dice from './Dice';
import Game from './Game';
import Sound from './common/Sound';

function App() {
    return (
        <Switch>
            <Route path="/" exact component={MainMenu} />
            <Route path="/players" exact component={Players} />
            <Route path="/game" exact component={Game} />
            <Route path="/card" exact component={Card} />
            <Route path="/dice" exact component={Dice} />
            <Route path="/sound" exact component={Sound} />
        </Switch>
    );
}

export default App;
