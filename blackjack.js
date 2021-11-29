// let firstCard = getRandomCard()
// let secondCard = getRandomCard()
let cards = []
// let cards = []
// let sum = firstCard + secondCard
let sum = 0
let hasBlackJack = false
let isAlive = false
let msg = ""
let messageEl = document.getElementById("message-el")
let cardsEl = document.getElementById("cards-el")
//let sumEl = document.getElementById("sum-el")
let sumEl = document.querySelector(".sum-el")

let player = {
    name: "Khaled",
    chips: 145
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": €" + player.chips

function getRandomCard(){
    let randomCard = Math.floor(Math.random() * 13) + 1
    if (randomCard > 10){
        return 10
    } else if (randomCard === 1) {
        return 11
    } else {
        return randomCard
    }
}

function startGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
renderGame()
}

function renderGame(){
    cardsEl.textContent = "Cards: "
    for(let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum
    if(sum < 21){
        msg = "Do you want to draw a new card?"
    } else if (sum === 21){
        msg = "You got a blackjack!"
        hasBlackJack = true
    } else {
        msg = "You are out of the game!"
        isAlive = false
    }
    console.log(msg)
    messageEl.textContent = msg
}

function newCard(){
    if(isAlive === true && hasBlackJack === false){
    let card = getRandomCard()
    sum += card
    cards.push(card)
}
    renderGame()
}