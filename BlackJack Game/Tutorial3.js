let sum = 0
let cards = []
let message = ""
isAlive = false
hasBlackjack = false

let sumUP = document.getElementById("sums")
let messAGE = document.getElementById("messages")
let carD = document.getElementById("cards")

let player = {
  name: "Jane",
  chips: 145,
}

let playerInfo = document.getElementById("players")
playerInfo.textContent = player.name + ": $" + player.chips

function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1
  if (randomNumber > 10) {
    return 10
  } else if (randomNumber === 1) {
    return 11
  } else {
    return randomNumber
  }
}

function startGame() {
  let firstCard = getRandomCard()
  let secondCard = getRandomCard()
  let sum = firstCard + secondCard
  let cards = [firstCard, secondCard]
  isAlive = true
  playGame()
}

function playGame() {
  sumUP.textContent = "Sum:" + " " + sum
  carD.textContent = "Cards: "
  for (let i = 0; i < cards.length; i++) {
    carD.textContent += cards[i] + " "
  }
  if (sum <= 20) {
    message = "Do you want to draw a new card?"
  } else if (sum === 21) {
    message = "You have got a blackjack!"
    hasBlackjack = true
  } else {
    message = "You are out of the game!"
    isAlive = false
  }

  messAGE.textContent = message
}

function newCard() {
  if (isAlive === true && hasBlackjack === false) {
    let card = getRandomCard()
    sum += card
    cards.push(card)
    playGame()
  }
}

/*
for (let x = 10; x < 101; x += 10) {
    console.log(x)
}

               drawing random numbers in javascript and calling it in a function

function rollDice() {

  let randomNumber = Math.floor(Math.random() * 6) + 1
    return randomNumber

}
 console.log(rollDice())

                Logical Operators &&

let hasSolvedChallenge = false
let hasHintsLeft = false

if (hasSolvedChallenge === false && hasHintsLeft === false) {
  showSolution()
}

function showSolution() {
  console.log("Showing solutions....")
}

                Logical Operators OR

let likesDocumenteries = true
let likesStartups = true

if (likesDocumenteries === true || likesStartups === false) {
  recommendMovies()
}

function recommendMovies() {
  console.log("Hey, Check out this new movies we think you may like")
} */
