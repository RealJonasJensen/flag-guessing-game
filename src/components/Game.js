import React from "react";
import PropTypes from "prop-types";

import "./Game.css"

const Game = (props) => {

    //console.log(props)
    let choices = null;
    if (props.selected.flag) {
        choices = props.options.map((arr, index) => {
            return (
                <button key={index} value={arr.name} className="game-choice-btn" onClick={props.checkGame} >{arr.name}</button>
            )
        })
    }

    let guesses = null;
    if (props.selected.flag) {
        guesses = (<div className="game-guesses">
            <p> Total Guesses: {props.guesses}  </p>
            <p> Right Guesses: {props.right}   </p>
            <p> Wrong Guesses: {props.wrong}  </p>
        </div>
        )
    }

    const flag = props.selected.flag ? <img src={props.selected.flag} alt="Guess It" className="game-img" /> : null;

    return (
        <div>
            <div className="game-choice">
                {choices}
            </div>
            <div className="game-flag" >
                {flag}
            </div>
            {guesses}
            <div>
                <button onClick={props.newGame} className="game-new-btn">New Flag</button>
            </div>
        </div>
    )

}

Game.propTypes = {
    newGame: PropTypes.func.isRequired,
    checkGame: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(PropTypes.object).isRequired,
    selected: PropTypes.object.isRequired,
    right: PropTypes.number.isRequired,
    wrong: PropTypes.number.isRequired,
    guesses: PropTypes.number.isRequired,
};

export default Game;