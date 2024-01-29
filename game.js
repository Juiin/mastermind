solution = [1, 2, 3, 4];
currentRound = 1;

numberElements = [];
for (let xx = 0; xx < 10; xx++) {
    numberElements[xx] = [];
    for(let yy = 0; yy < 4; yy++){
        numberElements[xx][yy] = document.getElementById("round" + xx + "Number" + yy);        
    }
}

for(let i=0; i<4; i++){
    numberElements[currentRound][i].placeholder = "";
    numberElements[currentRound][i].removeAttribute("readonly")

}