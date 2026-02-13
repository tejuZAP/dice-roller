function rollDice() {
    var rollValue = Math.floor(Math.random() * 6) +1;

    var diceMat = document.getElementById("diceResult");

    diceMat.innerHTML = rollValue;
}

window.onload = rollDice();