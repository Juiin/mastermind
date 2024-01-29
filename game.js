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
    confirmButtons[i].onclick = function(){
        //If any of the current playable fields ar empty return out of event
        for(let i=0;i<4;i++){
            if(numberElements[currentRound][i].value == ""){
                return;
            }
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
