import React, { useState } from "react";
import { Link } from "react-router-dom";
import Bomb from "./Bomb";
import NavButton from "./common/NavButton";
import Game from "./Game";

function MainMenu() {

    return (
        <div id="main-menu-container" className="d-flex flex-column justify-content-evenly align-items-center">
            <Bomb></Bomb>
            <div>
                <nav className="d-flex flex-column col-md-12">
                    <NavButton link={'/game'} text={'New Game'}></NavButton>
                    <NavButton link={'/'} text={'Settings'}></NavButton>
                </nav>
            </div>
        </div>
    );
}

export default MainMenu;