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
import { CookiesProvider, useCookies } from "react-cookie"

function App() {

    return (
        <div className="container-fluid">
            <CookiesProvider />
            <ToastContainer newestOnTop autoClose={2000} hideProgressBar />
            <Switch>
                <Route path="/" exact component={MainMenu} />
                <Route path="/players" exact component={PlayerForm} />
                <Route path="/game" exact component={Game} />
                <Route path="/inputs" exact component={TextInput} />
            </Switch>
        </div>
    );
}

export default App;
