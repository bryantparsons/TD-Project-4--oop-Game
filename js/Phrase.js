/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
const phraseElements = document.getElementById('phrase');


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
    
    checkLetter() {

    }

    showMatchedLetter() {

    }

}



