let firstCard = Math.floor(Math.random() * 12)+1
let secondCard = Math.floor(Math.random() * 12)+1
let sum = firstCard + secondCard
let cards=[firstCard,secondCard]
let hasBlackJack = false
let isAlive = true
let message = ""

let messageEl=document.getElementById("message-el")
function startGame(){
    renderGame()
}
function renderGame() {
    document.querySelector("#cardSum").textContent="sum:"+sum;
    // document.querySelector("#card").textContent="cards:"+firstCard+" "+secondCard
    document.querySelector("#card").textContent="cards:"+cards[0]+" "+cards[1]
    if (sum <= 20) {
        message = "Do you want to draw a new card? 🙂"
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack! 🥳"
        hasBlackJack = true
    } else {
        message = "You're out of the game! 😭"
        isAlive = false
    }
    messageEl.textContent=message;
    console.log(message)    
}

function newcard(){
    let thirdCard=7;
    cards.push(thirdCard)
    sum+=thirdCard;
    renderGame()
    // document.querySelector("#card").textContent="cards:"+firstCard+" "+secondCard+" "+thirdCard;
    document.querySelector("#card").textContent="cards:"+cards[0]+" "+cards[1]+" "+cards[2]
}
function reset(){
    document.querySelector("#cardSum").textContent="sum:";
    document.querySelector("#card").textContent="cards:";
}