"use strict";
window.onload = () => {
    class NumberGuessingGame {
        constructor() {
            this.randomNumber = this.generateRandomNumber();
            this.remainingGuesses = 5;
            this.isGameEnded = false;
            this.setup();
            this.updateGuessesRemaining();
        }
        generateRandomNumber() {
            return Math.floor(Math.random() * 100) + 1;
        }
        setup() {
            const numberInput = document.getElementById('numberInput');
            const submitButton = document.getElementById('submitButton');
            const resultMessage = document.getElementById('resultMessage');
            const guessesRemaining = document.getElementById('guessesRemaining');
            submitButton.addEventListener('click', () => {
                if (!this.isGameEnded) {
                    const userInput = parseInt(numberInput.value);
                    if (!isNaN(userInput)) {
                        this.checkUserGuess(userInput, resultMessage);
                        this.remainingGuesses--;
                        this.updateGuessesRemaining();
                        if (this.remainingGuesses === 0) {
                            this.isGameEnded = true;
                            this.displayMessage(`Out of guesses! The correct number was ${this.randomNumber}.`, resultMessage);
                        }
                    }
                    else {
                        this.displayMessage('Please enter a valid number.', resultMessage);
                    }
                }
            });
        }
        checkUserGuess(userInput, resultMessage) {
            if (userInput === this.randomNumber) {
                this.isGameEnded = true;
                this.displayMessage(`Congratulations! You guessed the correct number in ${5 - this.remainingGuesses + 1} guesses.`, resultMessage);
            }
            else if (userInput < this.randomNumber) {
                this.displayMessage('Try a higher number.', resultMessage);
            }
            else {
                this.displayMessage('Try a lower number.', resultMessage);
            }
        }
        displayMessage(message, element) {
            element.textContent = message;
        }
        updateGuessesRemaining() {
            const guessesRemaining = document.getElementById('guessesRemaining');
            guessesRemaining.textContent = `Guesses remaining: ${this.remainingGuesses}`;
        }
    }
    const game = new NumberGuessingGame();
};
