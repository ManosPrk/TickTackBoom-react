import React, { useState, useEffect } from 'react';
import { getCards, getDiceSide, getRandomSecs } from "../Utilities"
import { Player } from './Player';

function GameState(props) {
    const [cards, setCards] = useState(getCards());
    const [currentCard, setCurrentCard] = useState('DRAW');
    const [currentDiceSide, setCurrentDiceSide] = useState('ROLL');
    const [roundStarted, setRoundStarted] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const tickAudio = new Audio('/tick.mp3');
    const boomAudio = new Audio('/boom.mp3');
    const players = [
        new Player('Manos'),
        new Player('Takis'),
        new Player('Soula')
    ];

    function handleCardClick() {
        if (currentCard !== 'DRAW') {
            alert('You cant draw more than one card');
            return;
        }
        const newCardSet = cards;
        setCurrentCard(newCardSet.shift());
        setCards(newCardSet);
    }

    function handleDiceClick() {
        if (currentDiceSide !== 'ROLL') {
            alert('You cant roll the dice more than once');
            return;
        }
        setCurrentDiceSide(getDiceSide());
    }


    function handleBombClick() {
        if (!currentCard && !currentDiceSide) {
            alert('not set');
            return;
        }
        if (roundStarted) {
            alert('round started');
            return;
        }
        startTimer(1);
        setRoundStarted(true);
    }

    function hideModal(event) {
        players[event.target.value].roundsLost++;
        setShowModal(false);
        setCurrentCard('DRAW');
        setCurrentDiceSide('ROLL')
    }

    function resetState() {
        setRoundStarted(false);
    }

    function startTimer(randomExplodingTime = 5) {
        tickAudio.loop = true;


        new Promise((res, rej) => {
            tickAudio.play().then(() => {
                setTimeout(() => {
                    tickAudio.pause();
                    boomAudio.play();
                    setShowModal(true);
                    resetState();
                }, randomExplodingTime * 1000);
            })
        })
    }

    // const setGameState(){
    //     setCurrentCard('card2')
    //     setCurrentDiceSide('boom')

    // }

    return {
        cards,
        currentCard,
        currentDiceSide,
        handleCardClick,
        handleDiceClick,
        handleBombClick,
        showModal,
        hideModal,
        players
    };
}

export default GameState;