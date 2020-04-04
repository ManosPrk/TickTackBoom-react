import React, { useState } from 'react';
import Bomb from "./Bomb";
import Dice from "./Dice";
import Card from "./Card";
import { getCards, getDiceSide, getRandomSecs } from "../Utilities"
import LoserModal from './common/LoserModal';
import { NavLink } from 'react-router-dom';
import ResultsModal from './common/ResultsModal';
import { toast } from 'react-toastify';
import { isInstanceValid, getPlayersByGameId, notifyPlayers } from '../socket_helper/playerSocket';
import { useEffect } from 'react';

function Game(props) {
    const [cards, setCards] = useState(getCards().slice(0, 2));
    const gameId = props.match.params.id;
    const [currentCard, setCurrentCard] = useState('DRAW');
    const [currentDiceSide, setCurrentDiceSide] = useState('ROLL');
    const [isDiceRolled, setIsDiceRolled] = useState(false);
    const [isCardDrawn, setIsCardDrawn] = useState(false);
    const [roundStarted, setRoundStarted] = useState(false);
    const [showLoserModal, setShowLoserModal] = useState(false);
    const [showResultsModal, setShowResultsModal] = useState(false);
    const [gameOver, setGameover] = useState(false);
    const tickAudio = new Audio('/tick.mp3');
    const boomAudio = new Audio('/boom.mp3');
    const [players, setPlayers] = useState([]);
    // const players = props.players;


    useEffect(() => {
        let mounted = true;

        isInstanceValid(gameId).then((isValid) => {
            if (!isValid) {
                props.history.push('/');
            }
        });

        getPlayersByGameId(gameId).then((_players) => {
            if (mounted) {
                setPlayers(_players);
            }
        });
        return () => mounted = false;
    }, [gameId, props.history])

    // if (players.length === 0) {
    //     props.history.push('/players');
    //     toast.error('Please set players before you start a game')
    // }

    function handleCardClick() {
        if (isCardDrawn) {
            toast.error('You already drew a card')
            return;
        }
        const newCardSet = cards;
        setCurrentCard(newCardSet.shift());
        setIsCardDrawn(true);
        setCards(newCardSet);
    }

    function handleDiceClick() {
        if (isDiceRolled) {
            toast.error('You have already rolled the dice')
            return;
        }
        const randomSide = getDiceSide();
        setIsDiceRolled(true);
        setCurrentDiceSide(randomSide);
    }

    function handleBombClick() {
        const cardError = `${!isCardDrawn ? `draw a card` : ''}`;
        const diceError = `${!isDiceRolled ? 'roll the dice' : ''}`;
        if (!isDiceRolled || !isCardDrawn) {
            toast.error(`Please ${diceError}${!isDiceRolled && !isCardDrawn ? ' and ' : ''}${cardError}.`)
            return;
        }
        if (roundStarted) {
            return;
        }
        startTimer(1);
    }

    function hideLoserModal(event) {
        event.preventDefault();
        players[event.target.value].roundsLost++;
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
        setIsCardDrawn(false);
        setIsDiceRolled(false);
    }

    function resetGame() {
        setGameover(false);
        setCards(getCards().slice(0, 2));
        players.forEach((player) => { player.roundsLost = 0 });
    }

    function startTimer(randomExplodingTime = getRandomSecs()) {
        setRoundStarted(true);
        tickAudio.loop = true;
        tickAudio.play().then(() => {
            setTimeout(() => {
                tickAudio.pause();
                boomAudio.play();
                setShowLoserModal(true);
                resetState();
            }, randomExplodingTime * 1000);
        })
    }

    return (
        <div className="game-container">
            <NavLink to="/">Menu</NavLink>
            <LoserModal show={showLoserModal} close={hideLoserModal} players={[...players]}></LoserModal>
            {/* {cards.length === 0 && <ResultsModal show={showResultsModal} close={hideResultsModal} players={[...players]} />} */}
            {gameOver && <ResultsModal show={showResultsModal} newGame={resetGame} close={hideResultsModal} players={[...players]} />}
            <Bomb onClick={handleBombClick}></Bomb>
            <span>Remaining syllables: {cards.length} </span>
            <div className="game-items-container">
                <Dice text={currentDiceSide} onClick={handleDiceClick}></Dice>
                <Card text={currentCard} onClick={handleCardClick}></Card>
            </div>
        </div >
    );
}

export default Game; 