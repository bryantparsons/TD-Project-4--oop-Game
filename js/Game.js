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

handleInteraction() {
    
}

}