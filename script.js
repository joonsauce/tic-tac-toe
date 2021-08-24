// defaults setting the first X on square position 1
window.onload = function() {
    placeX(1);
}

// sets virtual tic tac toe table (X is placed in position 1 on when the page loads)
var table = [["X", "2", "3"], 
            ["4", "5", "6"], 
            ["7", "8", "9"]]

// places X in designated location and replaces correct position in virtual board, then checks if any side has won or lost
function placeX(id) {
    document.getElementById(id).innerHTML = "X";
    // makes position now disabled so no other piece can be placed there
    document.getElementById(id).disabled = true;
    // checks where to put the X on the virtual board
    apppend = checkAppend(id);
    appendRow = append[0]
    appendCol = append[1]
    // places X on the virtual board
    table[appendRow][appendCol] = "X";
    checkWinLoss();
}

// activated after square is clicked by user, then checks if any side has won or lost
function clicked(id) {
    document.getElementById(id).innerHTML = 'O';
    document.getElementById(id).disabled = true;
    apppend = checkAppend(id);
    appendRow = append[0]
    appendCol = append[1]
    table[appendRow][appendCol] = "O";
    checkWinLoss();
    // gets the next position for the bot to place
    getNext(id);
}

// makes engine check if any side has won, lost, or tied
function checkWinLoss() {
    var r1 = table[0]
    var r2 = table[1]
    var r3 = table[2]
    var c1 = [table[0][0], table[1][0], table[2][0]]
    var c2 = [table[0][1], table[1][1], table[2][1]]
    var c3 = [table[0][2], table[1][2], table[2][2]]
    var d1 = [table[0][0], table[1][1], table[2][2]]
    var d2 = [table[0][2], table[1][1], table[2][0]]
    var listOfPossibilities = ["r1", "r2", "r3", "c1", "c2", "c3", "d1", "d2"]
    // missing code to execute the function below
    for (let i = 0; i < 8; i++) {
        
    }
}


// allows checkAppend function to send the coordinates of change position
var appendPos = [];

// hardcode where each id corresponds to on the virtual board
function checkAppend(id) {
    if (id == 2){
        appendPos = [0, 1]
    }
    else if (id == 3){
        appendPos = [0, 2]
    }
    else if (id == 4){
        appendPos = [1, 0]
    }
    else if (id == 5){
        appendPos = [1, 1]
    }
    else if (id == 6){
        appendPos = [1, 2]
    }
    else if (id == 7){
        appendPos = [2, 0]
    }
    else if (id == 8){
        appendPos = [2, 1]
    }
    else if (id == 9){
        appendPos = [2, 2]
    }
    return appendPos
}

// makes the engine find the next optimal position for the computer, code missing to execute
function getNext(lastID){
    avail = checkAvail();
    
}

// sets variables for checkAvail function
var availArray = [];
var pos = 0;

// figures out which positions are legal to put the X in
function checkAvail(){
    availArray = [];
    for (let i = 0; i < 3; i++){
        for (let j = 0; j < 3; j++){
            // make it scan every position and record it to availArray
            if (table[i][j] != "O"){
                if (table[i][j] != "X"){
                    pos = checkPos(i, j);
                    availArray.push(pos);
                }               
            }
        }
    }
    return availArray
}

// sets variables for checkPos function
var returnNumber = 0;

// allows checkAvail function to figure out which position is available from the virtual board
function checkPos(row, column){
    if (row == 0) {
        returnNumber = 1 + column;
    }
    else if (row == 1) {
        returnNumber = 4 + column;
    }
    else if (row == 2) {
        returnNumber = 7 + column;
    }
    return returnNumber
}
