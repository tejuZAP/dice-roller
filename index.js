function rollDice() {
    /* Stores random number from 1 through 6*/
    let rollValue = Math.floor(Math.random() * 6) +1;
    /*Returns diceResult */
    let diceMat = document.getElementById("diceResult");

    diceMat.innerHTML = rollValue;
}

/* Automatically rolls dice as the website loads */
window.onload = rollDice();