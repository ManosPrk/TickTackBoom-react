import React, { useState } from "react";

function TextInput(props) {
    const [inputs, setInputs] = useState(4);
    const index = [];

    for (let i = 0; i < inputs && i < 12; i++) {
        index.push(i);
    }

    function handleOnClick(event) {
        let newInputs = inputs + 1;
        setInputs(newInputs);
    }

    return (
        <>
            <div className="d-flex flex-column mt-3">
                {index.map((idx) => {
                    return (
                        <input
                            key={idx}
                            onBlur={props.handleBlur}
                            id={idx}
                            type="text"
                            className="form-control mb-3"
                            // name={props.players}
                            placeholder="Name.."
                        />
                    );
                })}
            </div>
            <button className="btn btn-primary float-right" onClick={handleOnClick}>+</button>
        </>
    );
}

export default TextInput;