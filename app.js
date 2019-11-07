/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

let btnRoll = document.querySelector('.btn-roll');
let btnHold = document.querySelector('.btn-hold');
let btnNew = document.querySelector('.btn-new');
let diceImg = document.querySelector('.dice');

let currentScore0 = document.querySelector('#current-0');
let currentScore1 = document.querySelector('#current-1');
let currentScore = [currentScore0, currentScore1];

let playerScore0 = document.querySelector('#score-0');
let playerScore1 = document.querySelector('#score-1');
let playerScore = [playerScore0, playerScore1];

let player0 = document.querySelector('.player-0-panel');
let player1 = document.querySelector('.player-1-panel');
let player = [player0, player1];

let name1 = document.getElementById('name-1');
let name0 = document.getElementById('name-0');

let FinalCurrentScore0 = 0;
let FinalCurrentScore1 = 0;

diceImg.style.display = "none"


btnRoll.addEventListener('click', function () {

    if (name0.innerHTML === "WINNER!" || name1.innerHTML === "WINNER!") {

    } else {
        diceImg.style.display = "block"
        //getting random number to get random dice number
        let randomNumber = (Math.random() * 6) + 1;
        randomNumber = parseInt(randomNumber);
        diceImg.src = `dice-${randomNumber}.png`;

        if (player0.classList.contains('active')) {

            //checking if dice number = 1 then losing all the score
            if (randomNumber === 1) {
                currentScore0.innerHTML = 0;
                FinalCurrentScore0 = 0;
                player1.classList.add('active');
                player0.classList.remove('active');
                diceImg.style.display = "none"


            } else {
                //adding numbers from dice in the current score
                FinalCurrentScore0 += randomNumber;
                currentScore0.innerHTML = FinalCurrentScore0;

            }

        } else {
            //checking if dice number = 1 then losing all the score
            if (randomNumber === 1) {
                currentScore1.innerHTML = 0;
                FinalCurrentScore1 = 0;
                player0.classList.add('active');
                player1.classList.remove('active');
                diceImg.style.display = "none"


            } else {
                //adding numbers from dice in the current score
                FinalCurrentScore1 += randomNumber;
                currentScore1.innerHTML = FinalCurrentScore1;

            }
        }



    }

});

btnHold.addEventListener('click', function () {
    if (name0.innerHTML === "WINNER!" || name1.innerHTML === "WINNER!") {

    } else {
        if (player0.classList.contains('active')) {
            let totalScore0 = Number(currentScore0.innerHTML) + Number(playerScore0.innerHTML);

            playerScore0.innerHTML = totalScore0;
            if (totalScore0 >= 100) {
                name0.innerHTML = "WINNER!";
                name0.style.color = "#EB4D4D";
                diceImg.style.display = "none";
                currentScore0.innerHTML = 0;
                player0.classList.remove('active');
            } else {
                currentScore0.innerHTML = 0;
                player1.classList.add('active');
                player0.classList.remove('active');
                FinalCurrentScore0 = 0;
                diceImg.style.display = "none"
            }

        } else {

            let totalScore1 = Number(currentScore1.innerHTML) + Number(playerScore1.innerHTML);
            playerScore1.innerHTML = totalScore1;
            if (totalScore1 >= 100) {
                name1.innerHTML = "WINNER!";
                name1.style.color = "#EB4D4D";
                diceImg.style.display = "none";
                currentScore1.innerHTML = 0;
                player1.classList.remove('active');
            } else {

                currentScore1.innerHTML = 0;
                player0.classList.add('active');
                player1.classList.remove('active');
                FinalCurrentScore1 = 0;
                diceImg.style.display = "none"
            }

        }

    }

});

btnNew.addEventListener('click', function () {
    window.location.reload();
});

