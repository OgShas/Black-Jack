import Deck from "./deck.js";

var playerCard1;
var playerCard1Points;
var playerCard2;
var playerCard2Points;
var pcCard1;
var pcCard1Points;
var pcCard2;
var pcCard2Points;
var pcPoints=0;
var playerPoints=0;
var pcCounter = 0;
var playerCounter = 0;

startGame()

function startGame() {
    const deck = new Deck();
    deck.shuffle();

    //TODO make it 5 stack of 52 cards then take 1/2 of them -> first shuffle


    playerCard1 = deck.cards.shift();
    pcCard1 = deck.cards.shift();
    playerCard2 = deck.cards.shift();
    pcCard2 = deck.cards.shift();
    //display it
    document.querySelector('.card-player1').textContent = playerCard1.value;
    document.querySelector('.card-player2').textContent = playerCard2.value;
    document.querySelector('.card-computer1').textContent = pcCard1.value;
    document.querySelector('.card-computer2').textContent = pcCard2.value;


    pcCard1Points = checkCard(pcCard1, pcPoints);
    pcCard2Points = checkCard(pcCard2, pcPoints);
    playerCard1Points = checkCard(playerCard1, playerPoints);
    playerCard2Points = checkCard(playerCard2, playerPoints);

    //  points
    playerPoints = playerCard1Points + playerCard2Points;
    pcPoints = pcCard1Points + pcCard2Points;
    document.querySelector('.sum-player').textContent = playerPoints;
    document.querySelector('.sum-computer').textContent = pcPoints;

//PC Logic
    if (pcPoints <= 15) {
        var hittedPcCard = deck.cards.shift();
        checkCard(hittedPcCard, pcPoints);
        document.querySelector('.card-computer3').textContent = hittedPcCard.value;
        pcPoints += Number(hittedPcCard.value);
        document.querySelector('.sum-computer').textContent = pcPoints;
    }
    if (pcPoints <= 15) {
        var hittedPcCard2 = deck.cards.shift();
        checkCard(hittedPcCard2, pcPoints);
        document.querySelector('.card-computer4').textContent = hittedPcCard2.value;
        pcPoints += Number(hittedPcCard2.value);
        document.querySelector('.sum-computer').textContent = pcPoints;
    }
    if (pcPoints <= 15) {
        var hittedPcCard3 = deck.cards.shift();
        checkCard(hittedPcCard3, pcPoints);
        document.querySelector('.card-computer5').textContent = hittedPcCard3.value;
        pcPoints += Number(hittedPcCard3.value);
        document.querySelector('.sum-computer').textContent = pcPoints;
    } else if (pcPoints > 21) {
        document.querySelector('.winner').textContent = "Player win";
    }
    else {
        compare();
    }

    function hitCard() {
        var hitNumber = checkCard(deck.cards.shift(),playerPoints);
        playerPoints += hitNumber;
        if(playerPoints > 21){
            pcCounter++;
            document.querySelector('.winner').textContent = "Computer  Win";
            exit();
        }
      document.querySelector('.hit-card').textContent =hitNumber;
        document.querySelector('.sum-player').textContent = playerPoints;
        return playerPoints;
    }
    function standCard() {
        compare();
    }
    function compare() {
        if (playerPoints === pcPoints){
             document.querySelector('.winner').textContent = "X";
        }else if(pcPoints > playerPoints) {
            document.querySelector('.winner').textContent = "computer win";
        }else{
            document.querySelector('.winner').textContent = "Player WIN";
        }
    }
    function checkCard(card,points)    {
       if(card.value === "K" || card.value === "Q" || card.value ==='J'){
           card.value = Number(10);
       }
       else if (card.value === "A" && (points<=10)){ //TODO points- pcPoinnts and playerPoints
           card.value = Number(11)
           console.log(typeof card.value);
       }
       else if (card.value ==="A" && (points>10)){
           card.value = Number(1)
           console.log(card.value);
       }
       else {
           card.value = Number(card.value);
       }
       return card.value;
    } // TODO check points of a shift card and parse it to int.  what we do with "A" case

    document.querySelector('.hit').addEventListener('click', hitCard);
    document.querySelector('.stand').addEventListener('click', standCard);
}




