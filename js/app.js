/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
let game;

const buttonReset = document.getElementById('btn__reset');
let qwerty = document.querySelector("#qwerty");

buttonReset.addEventListener('click', (e) => {
    game = new Game();
    game.startGame();
});

qwerty.addEventListener('click', (e) => {
    if (e.target && e.target.matches("button.key")) {
        game.handleInteraction();
    }
});