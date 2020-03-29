import { useState, useEffect } from 'react';
import { getCards, getDiceSide } from "../Utilities"
import { toast } from "react-toastify";
// import { getPlayers } from './api/playerApi'
import { loadPlayers } from '../actions/playerActions';
import playerStore from "../store/playerStore";

function GameState(props) {
    const [cards, setCards] = useState(getCards().slice(0, 2));
    const [currentCard, setCurrentCard] = useState('DRAW');
    const [currentDiceSide, setCurrentDiceSide] = useState('ROLL');
    const [roundStarted, setRoundStarted] = useState(false);
    const [showLoserModal, setShowLoserModal] = useState(false);
    const [showResultsModal, setShowResultsModal] = useState(false);
    const tickAudio = new Audio('/tick.mp3');
    const boomAudio = new Audio('/boom.mp3');
    // const [cookies, setCookie] = useCookies([]);
    const players = playerStore.getPlayers();
    const [gameOver, setGameover] = useState(false);

    useEffect(() => {
        if (players.length === 0) {
            loadPlayers();
        }
    })

    function handleCardClick() {
        if (currentCard !== 'DRAW') {
            toast.error('You already drew a card')
            return;
        }
        const newCardSet = cards;
        setCurrentCard(newCardSet.shift());
        setCards(newCardSet);
    }

    function handleDiceClick() {
        if (currentDiceSide !== 'ROLL') {
            toast.error('You have already rolled the dice')
            return;
        }
        const randomSide = getDiceSide();
        setCurrentDiceSide(randomSide);
    }

    function handleBombClick() {
        if (currentDiceSide === 'ROLL'
            && currentCard === 'DRAW') {
            toast.error('Please draw a card and roll the dice')
            return;
        }
        if (roundStarted) {
            return;
        }
        startTimer(1);
        setRoundStarted(true);
    }

    function hideLoserModal(event) {
        event.preventDefault();
        players.find((player) => player.id === event.target.value).roundsLost++;
        setShowLoserModal(false);
        if (cards.length === 0) {
            setShowResultsModal(true);
            setGameover(true);
        }
    }

    function hideResultsModal(event) {
        setShowResultsModal(false);
        resetGame();
    }

    function resetState() {
        setRoundStarted(false);
        setCurrentCard('DRAW');
        setCurrentDiceSide('ROLL')
    }

    function resetGame() {
        setGameover(false);
        setCards(getCards().slice(0, 2));
        players.forEach((player) => { player.roundsLost = 0 });
    }

    function startTimer(randomExplodingTime = Math.floor(Math.random() * (40 - 10) + 10)) {
        tickAudio.loop = true;


        new Promise((res, rej) => {
            tickAudio.play().then(() => {
                setTimeout(() => {
                    tickAudio.pause();
                    boomAudio.play();
                    setShowLoserModal(true);
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
        showLoserModal,
        hideLoserModal,
        players,
        showResultsModal,
        hideResultsModal,
        resetGame,
        gameOver
    };
}

export default GameState;