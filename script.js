window.onload = function() {
    placeX(1);
}

var move = 0;

function placeX(id) {
    document.getElementById(id).innerHTML = "X";
    document.getElementById(id).disabled = true;
    if (document.getElementById(id).disabled) {
        getNext();
    }
}

function clicked(id) {
    document.getElementById(id).innerHTML = 'O';
    document.getElementById(id).disabled = true;
    last = id;
    move += 1;
    getNext();
}

function getNext(){
    // make it work!
}