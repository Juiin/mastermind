solution = [1, 2, 3, 4];
currentRound = 0;
maxAttempts = 10;

numberElements = [];
for (let xx = 0; xx < maxAttempts; xx++) {
    numberElements[xx] = [];
    for(let yy = 0; yy < 4; yy++){
        numberElements[xx][yy] = document.getElementById("round" + xx + "Number" + yy);        
    }
}

confirmButtons = [];
for(let i=0; i<maxAttempts; i++){
    confirmButtons[i] = document.getElementById("button" + i);
}

confirmButtons[currentRound].style.visibility = "visible";

for(let i=0; i<4; i++){
    numberElements[currentRound][i].placeholder = "";
    numberElements[currentRound][i].removeAttribute("readonly")

}