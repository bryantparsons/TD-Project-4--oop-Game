/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game {
     constructor(){
         this.missed = 0;
         this.phrases = this.createPhrases();
         this.activePhrase = 'null';
     }

/**
* Creates phrases for use in game
* @return {array} An array of phrases that could be used in the game
*/
    createPhrases() {
        const phrases = [
            new Phrase ('Close But No Cigar'),
            new Phrase ('A Fool and His Money Are Soon Parted'),
            new Phrase ('Between a Rock and a Hard Place'),
            new Phrase ('I hate to eat and run'),
            new Phrase ('off the top of my head')
        ];

        return phrases;
    }

/**
* Selects random phrase from phrases property
* @return {Object} Phrase object chosen to be used
*/
    getRandomPhrase() {
        const PhraseNum = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[PhraseNum];
    }

/**
* Begins game by selecting a random phrase and displaying it to user
*/

    startGame() {
        const startGame = document.getElementById('overlay');
        startGame.style.display = 'none';
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay(); 
    } 

/**
* Checks for winning move
* @return {boolean} True if game has been won, false if game wasn't
won
*/    
    checkForWin() {
        const hide = document.getElementsByClassName('hide');
            if (hide.length === 0) {
             return true;
            } else {
             return false;
            }
    }
    
/**
* Increases the value of the missed property
* Removes a life from the scoreboard
* Checks if player has remaining lives and ends game if player is out
*/

    removeLife() {
        this.missed += 1;
        let image = document.querySelector("img[src='images/liveHeart.png']");
        if (this.missed <= 5) {
            image.src = 'images/lostHeart.png';
        }   if (this.missed === 5) {
            this.gameOver();
            this.reset();
        }
    }

/**
* Displays game over message
* @param {boolean} gameWon - Whether or not the user won the game
*/

    gameOver() {
        const overLay = document.getElementById('overlay');
        overLay.style.display = 'block';
        const message = document.getElementById("game-over-message");
        if (this.missed === 5) {
            message.textContent = "You've lost. Better luck next time!";
            overLay.classList = 'lose';
        } else {
            message.textContent = "You've won!";
            overLay.classList = 'win';
        }
    }

/**
* Handles onscreen keyboard button clicks
* @param (HTMLButtonElement) button - The clicked button element
*/

    handleInteraction(button) {
        button.disabled = true;
        this.activePhrase.checkLetter(button.textContent);
        if (this.activePhrase.checkLetter(button.textContent) === false) {
            button.classList = 'wrong';
            this.removeLife();
        } else {
            button.classList = 'chosen';
            this.activePhrase.showMatchedLetter(button.textContent);
            this.checkForWin();
            if (this.checkForWin() === true) {
                this.gameOver();
                this.reset();
            }           
        }    
        
  }

/*  
resets for a new game after a win or loss
removes previous phrase letter li
resets button keys and heart images
*/
    reset() {
        let ul = document.querySelector("#phrase ul");
        while (ul.hasChildNodes()) {
            ul.removeChild(ul.firstChild);
        }
       
        let button = document.querySelectorAll("#qwerty button");
        for (let i = 0; i < button.length; i += 1) {
            button[i].disabled = false;
            button[i].classList = 'key';
        }
        
        let image = document.querySelectorAll("img[src='images/lostHeart.png']");
        for (let i = 0; i < image.length; i += 1) {
            image[i].src = 'images/liveHeart.png';
        }
       
        this.missed = 0;
        
    }

}