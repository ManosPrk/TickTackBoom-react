import React from "react";


function Dice(props) {
    return (
        <div className="dice">
            <span onClick={props.onClick} id="side" className="noselect">{props.text}</span>
        </div>
    );
}

export default Dice;