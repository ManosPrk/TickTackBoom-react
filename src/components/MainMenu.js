import React from "react";
import Bomb from "./Bomb";
import { NavLink } from "react-router-dom";
import ModalTemplate from "./common/ModalTemplate"
import FormTemplate from "./common/FormTemplate";
import { toast } from "react-toastify";
import { createGameInstance } from "../socket_helper/playerSocket";
import { useState } from "react";
import ModalFormTemplate from "./common/ModalFormTemplate";

function MainMenu(props) {
    const [formData, setFormData] = useState({
        name: ''
    });

    function handleBlur(event) {
        event.preventDefault();
        const { target } = event;
        formData[event.target.name] = target.value;
    }

    function handleNewGameSubmit(event) {
        event.preventDefault();
        createGameInstance(formData, (ioResponse) => {
            console.log(ioResponse);
            props.history.push(`/game/${ioResponse.gameId}`);
        })
    }

    return (
        <div id="main-menu-container" className="d-flex flex-column justify-content-evenly align-items-center">
            <Bomb></Bomb>
            <div>
                <nav className="d-flex flex-column col-md-12">
                    <ModalFormTemplate
                        modalTitle='Enter your name to start a new game!'
                        modalButtonText="New Game"
                        formMutedText="we care"
                        formButtonText="Submit"
                        formHandleSubmit={handleNewGameSubmit}
                        formLabel="Name"
                        formInputPlaceholder="Player..."
                        formInputHandleBlur={handleBlur}
                        formInputName={Object.keys(formData)}
                    />
                    <h1>
                        <NavLink className="nav-button" id="nav-button" to="/join">Join Game</NavLink>
                    </h1>
                </nav>
            </div >
        </div >
    );
}

export default MainMenu;