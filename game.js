function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

possibleSolutionNumbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
solution = [];
for(let i = 0;i<4;i++){
    solution.push(possibleSolutionNumbers.splice(getRandomInt(0,8-i), 1)[0])
}

currentRound = 0;
maxAttempts = 10;

numberElements = [];
for (let i = 0; i < maxAttempts; i++) {
    numberElements[i] = [];
    for(let j = 0; j < 4; j++){
        numberElements[i][j] = document.getElementById("round" + i + "Number" + j);        
    }
}

confirmButtons = [];
hitBlowIndicator = [];
for(let i=0; i<maxAttempts; i++){
    hitBlowIndicator[i] = document.getElementById("hitBlow" + i);

    confirmButtons[i] = document.getElementById("button" + i);
    confirmButtons[i].onclick = function(){
        //If any of the current playable fields ar empty return out of event or same as any other
        for(let i=0;i<4;i++){
            var currentRoundNumbersExeceptI = [];
            for(let j=0;j<4;j++){
                if(i==j){
                    continue; 
                } 
                currentRoundNumbersExeceptI.push(numberElements[currentRound][j].value);
            }
            if(numberElements[currentRound][i].value == "" || currentRoundNumbersExeceptI.includes(numberElements[currentRound][i].value)){
                return;
            } 
        }
        
        //Display Hits&Blows
        hitBlowIndicator[currentRound].style.display = "inline";
        hits = 0;
        blows = 0;
        for(let j=0;j<4;j++){
            if(numberElements[currentRound][j].value == solution[j]){
                hits++;
                continue;
            }else{
                if(solution.includes(numberElements[currentRound][j].value)){
                    blows++;
                }
            }
        }
        //Draw HitsBlows
        for(let i=0;i<hits;i++){
            hitBlowIndicator[currentRound].innerHTML += "&#9673;"
        }
        for(let i=0;i<blows;i++){
            hitBlowIndicator[currentRound].innerHTML += "&#x25CE;"
        }

        currentRound++;
        newRound();
    }
}

function newRound(){
    //Lock old row if its not the first
    if(currentRound > 0){
        confirmButtons[currentRound-1].style.visibility = "hidden";
        for(let i=0; i<4; i++){
            numberElements[currentRound-1][i].readOnly = true;
        }
    }
    
    //Make current row playable
    confirmButtons[currentRound].style.visibility = "visible";

    for(let i=0; i<4; i++){
        numberElements[currentRound][i].placeholder = "";
        numberElements[currentRound][i].removeAttribute("readonly")
    }
}

newRound();
