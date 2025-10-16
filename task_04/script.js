const hint = document.getElementById('hint');
const noOfGuessesRef = document.getElementById('no-of-guesses'); // fixed ID
const guessedNumberRef = document.getElementById('guesses-nums');
const restartButton = document.getElementById('restart');
const game = document.getElementById('game');
const guessInput = document.getElementById('guess');
const checkButton = document.getElementById('check-button'); // fixed ID

let answer, noOfGuesses, guessedNumsArr;

const play = () => {
    const userGuess = Number(guessInput.value); // fixed value access
    if (userGuess < 1 || userGuess > 100 || isNaN(userGuess)) {
        alert("Please enter a valid number between 1 and 100");
        return;
    }

    guessedNumsArr.push(userGuess);
    noOfGuesses += 1;

    if (userGuess !== answer) {
        if (userGuess < answer) {
            hint.innerHTML = "Too Low. Try Again!";
        } else {
            hint.innerHTML = "Too High. Try Again!";
        }
        noOfGuessesRef.innerHTML = `<span>No. of Guesses:</span> ${noOfGuesses}`;
        guessedNumberRef.innerHTML = `<span>Guessed Number:</span> ${guessedNumsArr.join(', ')}`;
        hint.classList.remove("error");
        setTimeout(() => {
            hint.classList.add("error");
        }, 10);
    } else {
        hint.innerHTML = `Congratulations! You guessed it right. The number was ${answer}.<br> You guessed it in ${noOfGuesses} guesses.`;
        hint.classList.add("success");
        game.style.display = "none";
        restartButton.style.display = "block";
    }
};

const init = () => {
    console.log("Game started");
    answer = Math.floor(Math.random() * 100) + 1;
    console.log("Secret number is:", answer);
    guessedNumsArr = [];
    noOfGuesses = 0;
    noOfGuessesRef.innerHTML = "No. of Guesses:0";
    guessedNumberRef.innerHTML = "Guessed Numbers are :None";
    guessInput.value = "";
    hint.classList.remove("success", "error");
    hint.innerHTML = "";
    game.style.display = "block";
    restartButton.style.display = "none";
};

guessInput.addEventListener("keydown", (event) => {
    if (event.keyCode === 13) {
        event.preventDefault;
        play
    }
});

restartButton.addEventListener("click",()=>{
    game.style.display="grid";
    restartButton.style.display="none";
    hint.innerHTML="";
    hint.classList.remove("success");
    init();
})
checkButton.addEventListener("click", play);
// restartButton.addEventListener("click", init);
window.addEventListener("load", init);


