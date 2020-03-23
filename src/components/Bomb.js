import React from "react";
import bombImage from "../assets/bomb.png"

function Bomb(props) {
    return (
        <img onClick={props.onClick} className="img-fluid" src={bombImage} alt="bomb"></img>
    );
}

export default Bomb;