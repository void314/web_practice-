const holes = document.querySelectorAll('.hole');
console.log(holes);
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');

function randomeTime(min, max) {
    return  Math.round(Math.random() * (max - min) + min);
}

let lastHole;
let timeUp = false;
let score = 0;

function randomHole(holes) {
    const idx = Math.floor(Math.random() * holes.length);
    console.log(idx);
    const hole = holes[idx];
    if (hole === lastHole) {
        return randomHole(holes);
    }
    lastHole = hole;
    return hole;
}

function peep() {
    const time = randomeTime(200, 1000);
    const hole = randomHole(holes);
    hole.classList.add('up');
    setTimeout(() => {
        hole.classList.remove('up');
        if (!timeUp) peep();
    }, time);
}

function bonk(e) {
    if(!e.isTrusted) return;
    score++;
    this.parentNode.classList.remove('up');
    scoreBoard.textContent = score;
}

moles.forEach(mole => mole.addEventListener('click', bonk));

function startGame() {
    scoreBoard.textContent = 0;
    timeUp = false;
    score = 0;
    peep();
    setTimeout(() => timeUp = true, 10000)
}