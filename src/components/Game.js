import React, { useState, useEffect } from 'react';
import Bomb from "./Bomb";
import Dice from "./Dice";
import Card from "./Card";
import NavButton from './common/NavButton';
import GameState from './GameState';
import { Player } from './Player';
import LoserModal from './common/LoserModal';


function Game() {
    const {
        cards,
        currentCard,
        currentDiceSide,
        handleCardClick,
        handleDiceClick,
        handleBombClick,
        showModal,
        hideModal,
        players
    } = GameState();
    // const dice
    // const bomb
    // const standings

    return (
        <div className="game-container">
            <NavButton link={'/'} text="Menu"></NavButton>
            <LoserModal show={showModal} close={hideModal} players={players}></LoserModal>
            <div className="d-flex flex-column align-items-center">
                <Bomb onClick={handleBombClick}></Bomb>
            </div>
            <span>Remaining syllables: {cards.length} </span>
            <div className="game-items-container">
                <Dice text={currentDiceSide} onClick={handleDiceClick}></Dice>
                <Card text={currentCard} onClick={handleCardClick}></Card>
            </div>
        </div>
    );
}

export default Game; 