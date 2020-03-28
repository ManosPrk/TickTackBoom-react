import React, { useEffect } from 'react';
import Bomb from "./Bomb";
import Dice from "./Dice";
import Card from "./Card";
import GameState from './GameState';
import LoserModal from './common/LoserModal';
import { NavLink } from 'react-router-dom';
import ResultsModal from './common/ResultsModal';



function Game(props) {
    const {
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
    } = GameState();

    useEffect(() => {
        if (!players) {
            props.history.push('/');
            console.log('yo');
        }
    }, [players, props.history]);



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