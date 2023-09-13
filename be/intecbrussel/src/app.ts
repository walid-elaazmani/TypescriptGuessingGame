window.onload = () => {

    class NumberGuessingGame {
        private randomNumber: number;
        private remainingGuesses: number;
        private isGameEnded: boolean;
      
        constructor() {
          this.randomNumber = this.generateRandomNumber();
          this.remainingGuesses = 5;
          this.isGameEnded = false;
          this.setup();
          this.updateGuessesRemaining();
        }
      
        private generateRandomNumber(): number {
          return Math.floor(Math.random() * 100) + 1;
        }
      
        private setup(): void {
          const numberInput = document.getElementById('numberInput') as HTMLInputElement;
          const submitButton = document.getElementById('submitButton') as HTMLButtonElement;
          const resultMessage = document.getElementById('resultMessage') as HTMLDivElement;
          const guessesRemaining = document.getElementById('guessesRemaining') as HTMLDivElement;
      
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
              } else {
                this.displayMessage('Please enter a valid number.', resultMessage);
              }
            }
          });
        }
      
        private checkUserGuess(userInput: number, resultMessage: HTMLDivElement): void {
          if (userInput === this.randomNumber) {
            this.isGameEnded = true;
            this.displayMessage(`Congratulations! You guessed the correct number in ${5 - this.remainingGuesses + 1} guesses.`, resultMessage);
          } else if (userInput < this.randomNumber) {
            this.displayMessage('Try a higher number.', resultMessage);
          } else {
            this.displayMessage('Try a lower number.', resultMessage);
          }
        }
      
        private displayMessage(message: string, element: HTMLDivElement): void {
          element.textContent = message;
        }
      
        private updateGuessesRemaining(): void {
          const guessesRemaining = document.getElementById('guessesRemaining') as HTMLDivElement;
          guessesRemaining.textContent = `Guesses remaining: ${this.remainingGuesses}`;
        }
      }
      
    
      const game = new NumberGuessingGame();
      

}