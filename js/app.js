/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
let game;

const buttonReset = document.getElementById('btn__reset');

buttonReset.addEventListener('click', (e) => {
    game = new Game();
    game.startGame();
});