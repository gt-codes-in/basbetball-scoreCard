let home_score = document.getElementById('homescore');
let guest_score = document.getElementById('guestscore');

var countH = 0;
document.getElementById('oneplusHH').addEventListener("click", oneplusH);
function oneplusH() {
    countH += 1;
    home_score.textContent = countH;
}

document.getElementById('twoplusHH').addEventListener("click", twoplusH);
function twoplusH() {
    countH += 2;
    home_score.textContent = countH;
}

document.getElementById('threeplusHH').addEventListener("click", threeplusH);
function threeplusH() {
    countH += 3;
    home_score.textContent = countH;
}

var countG = 0
document.getElementById('oneplusGG').addEventListener("click", oneplusG);
function oneplusG() {
    countG += 1;
    guest_score.textContent = countG;
}

document.getElementById('twoplusGG').addEventListener("click", twoplusG);
function twoplusG() {
    countG += 2;
    guest_score.textContent = countG;
}

document.getElementById('threeplusGG').addEventListener("click", threeplusG);
function threeplusG() {
    countG += 3;
    guest_score.textContent = countG;
}

// var hScore = parseInt(home_score.innerHTML , 10);
// var gScore = parseInt(guest_score.innerHTML , 10);

document.getElementById('oneplusHH').addEventListener("click", () => {
    home_score.innerHTML = (parseInt(home_score.innerHTML , 10) + 1).toString();
    compares();
});
document.getElementById('twoplusHH').addEventListener("click", () => {
    home_score.innerHTML = (parseInt(home_score.innerHTML , 10) + 2).toString();
    compares();
});
document.getElementById('threeplusHH').addEventListener("click", () => {
    home_score.innerHTML = (parseInt(home_score.innerHTML , 10) + 3).toString();
    compares();
});

document.getElementById('oneplusGG').addEventListener("click", () => {
    guest_score.innerHTML = (parseInt(guest_score.innerHTML , 10) + 1).toString();
    compares();
});
document.getElementById('twoplusGG').addEventListener("click",  () => {
    guest_score.innerHTML = (parseInt(guest_score.innerHTML , 10) + 1).toString();
    compares();
});
document.getElementById('threeplusGG').addEventListener("click",  () => {
    guest_score.innerHTML = (parseInt(guest_score.innerHTML , 10) + 1).toString();
    compares();
});



function compares() {
    const hScore = parseInt(home_score.innerHTML , 10);
    const gScore = parseInt(guest_score.innerHTML , 10);
    if(hScore === gScore){
        home_score.style.color = '#F94F6D';
        guest_score.style.color = '#F94F6D';
        document.querySelector('.scorecardH').style.borderColor = 'wheat';
        document.querySelector('.scorecardG').style.borderColor = 'wheat';
    }
    else if (hScore > gScore) {
        home_score.style.color = 'green';
        guest_score.style.color = 'red';
        document.querySelector('.scorecardH').style.borderColor = 'green';
        document.querySelector('.scorecardG').style.borderColor = 'red';
        // document.getElementsByClassName('scorecardH').style.borderColor = 'green';
    }
    else{
        guest_score.style.color = 'green';
        home_score.style.color = 'red';
        document.querySelector('.scorecardG').style.borderColor = 'green';
        document.querySelector('.scorecardH').style.borderColor = 'red';
    }
}

var foul_countH = 0;
function foulH() {
    foul_countH += 1;
    document.getElementById('count-foulsH').textContent = " - " + foul_countH;
    
}
var foul_countG = 0;
function foulG() {
    foul_countG += 1;
    document.getElementById('count-foulsG').textContent = " - " + foul_countG;
}

function reset() {
    window.location.reload();
    // home_score.innerHTML = 0;
    // guest_score.innerHTML = 0;
    // countH = 0;
    // countG = 0;
}

