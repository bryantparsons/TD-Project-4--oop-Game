/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
const phraseElements = document.getElementById('phrase');
const qwerty = document.getElementById('qwerty');


class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase(); 
    }
/**
* Display phrase on game board
*/
    addPhraseToDisplay() {
      
        const letter = this.phrase.split('');
      
        for (let i = 0; i < letter.length; i += 1) {
            const li = document.createElement('li');
            if (letter[i] === ' ') {
                li.classList = 'space';
                li.textContent = ' ';
            } else {
                li.classList = `hide letter ${letter[i]}`;
                li.textContent = letter[i];
            }
            phraseElements.appendChild(li);
        
        }
        
    }
    
    /**
    * Checks if passed letter is in phrase
    * @param (string) letter - Letter to check
    */

    checkLetter(letter) {
        
       if (this.phrase.includes(letter)) {
         return true;
       } else {
         return false;
       }
            
    }

    /**
    * Displays passed letter on screen after a match is found
    * @param (string) letter - Letter to display
    */

    showMatchedLetter(letter) {
        const phraseLetters = document.getElementsByTagName('li');
        for (let i = 0; i < phraseLetters.length; i += 1) {
                if (letter === phraseLetters[i].textContent) {
                phraseLetters[i].classList = `show ${letter}`;
            }
        }
    }
}



