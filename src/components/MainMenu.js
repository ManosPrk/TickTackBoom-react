import React from "react";
import Bomb from "./Bomb";
import { NavLink } from "react-router-dom";

function MainMenu() {

    return (
        <div id="main-menu-container" className="d-flex flex-column justify-content-evenly align-items-center">
            <Bomb></Bomb>
            <div>
                <nav className="d-flex flex-column col-md-12">
                    <h1>
                        <NavLink className="nav-button" id="nav-button" to="/players">New Game</NavLink>
                    </h1>
                </nav>
            </div>
        </div>
    );
}

export default MainMenu;