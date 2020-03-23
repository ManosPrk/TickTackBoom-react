import React from 'react';

function Card(props) {
    return (
        <div className="syllable-card">
            <span onClick={props.onClick} id="syllable" className="noselect">{props.text}</span>
        </div>
    );
}

export default Card;