import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

function LoserModal(props) {
    // const handleShow = () => setShow(true);

    return (
        <Modal
            show={props.show}
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header className='bg-warning justify-content-center'>
                <Modal.Title>BOOM! Who lost? </Modal.Title>
            </Modal.Header>
            <div id="loser-list-group">
                <Modal.Body >
                    <ul className="list-group text-center">
                        {props.players.map((player, idx) => {
                            return (
                                <li
                                    onClick={props.close}
                                    value={idx}
                                    key={idx}
                                    className="list-group-item noselect"
                                >
                                    {player.name}
                                </li>
                            );
                        })}
                    </ul>
                </Modal.Body>
            </div>

        </Modal>
    );
}

export default LoserModal;

