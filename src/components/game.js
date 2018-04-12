import React from 'react';

import Header from './header';
import GuessSection from './guess-section';
import GuessCount  from './guess-count';
import GuessList from './guess-list';

export default class Game extends React.Component {
    constructor() {
        super();
        this.state = {
            guesses:[],
            answer: Math.ceil(Math.random() * 100),
            feedback: 'Make your Guess!',
            won:false
        }
    }

    //if (Math.abs(newGuess - answer) > 10) {

    setGuess(newGuess) {
            this.setState({
                guesses: [...this.state.guesses, newGuess]
            })
    }

    setFeedback(newGuess) {
        if (Math.abs(newGuess - this.state.answer) > 10) {
            this.setState({
                feedback: 'cold'
            })
        }
        else if (parseInt(newGuess, 10) === this.state.answer) {
            this.setState({
                feedback: 'you win',
                won:true
            })
        }
        else {
            this.setState({
                feedback: 'hot'
            })
        }
    }

    resetGame() {
        this.setState({
            guesses:[],
            answer: Math.ceil(Math.random() * 100),
            feedback: 'Make your Guess!',
            won:false
        })
    }

    duplicateGuess() {
        this.setState({
            feedback: 'You guessed that already!'
        })
    }

    alreadyWon() {
        this.setState({
            feedback: 'You already Won, start a new game!'
        })
    }

    nanInput() {
        this.setState({
            feedback: 'Please input a number'
        })
    }

    render() {
    return (
        <div className="gameBoard">
            <Header game={() => this.resetGame()}/>
            <GuessSection feedback={this.state.feedback} setGameGuess={e => {
                if (this.state.won) {
                    this.alreadyWon();
                } else {
                // if (typeof(parseInt(e, 10)) !== Number) {
                //     this.nanInput();
                // }
                // else {
                const duplicate = this.state.guesses.filter(guess => guess === e);
                if (duplicate[0]) {
                    this.duplicateGuess();
                } else { 
                this.setGuess(e);
                this.setFeedback(e);
                    }
                }
                }
                // }
                } />
            <GuessCount count={this.state.guesses.length} />
            <GuessList guesses={this.state.guesses} />
        </div>
    );
}
}

