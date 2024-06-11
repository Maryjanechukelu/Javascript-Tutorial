let firstCard = 10
let secondCard = 7
let sum = firstCard + secondCard
let cards = [firstCard, secondCard]
let message = ""

let sumUP = document.getElementById("sums")
let messAGE = document.getElementById("messages")
let carD = document.getElementById("cards")


function startGame() {
    playGame()
}

function playGame() {

    sumUP.textContent = "Sum:" + " " + sum
    carD.textContent = "Cards:" + " " + cards[0] + " " + cards[1]
    if  (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21){
        message = "You have got a blackjack!"
    } else {
        message = "You are out of the game!"
    }

    messAGE.textContent = message
}

function newCard() {
    let card = 3 

    sum += card

    playGame()

}

 