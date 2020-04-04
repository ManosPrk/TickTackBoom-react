import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
// import { ToastContainer } from "react-toastify";
import "../css/main.css"
import "react-toastify/dist/ReactToastify.css";
import MainMenu from './MainMenu';
import Game from './Game';
import { ToastContainer } from 'react-toastify';
import PlayerForm from './PlayerForm';
import TextInput from './common/TextInput';
import JoinGameForm from './JoinGameForm';

function App(props) {
    return (
        <div className="container-fluid">
            <ToastContainer newestOnTop autoClose={2000} hideProgressBar />
            <Switch>
                <Route path="/" exact component={MainMenu} />
                <Route path="/players" exact component={PlayerForm} />
                <Route path="/join" exact component={JoinGameForm} />
                <Route path="/game/:id" exact component={Game} />
                <Redirect from="/game" to="/" />
                <Route path="/inputs" exact component={TextInput} />
            </Switch>
        </div>
    );
}

export default App;
