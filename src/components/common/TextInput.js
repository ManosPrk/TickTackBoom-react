import React from "react";

function TextInput(props) {
    return (
        <div className="input-group input-group-sm mb-3">
            <input type="text" className="form-control" name={props.name} placeholder="Name.." />
        </div>
    );
}

export default TextInput;