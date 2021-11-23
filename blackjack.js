let player = {
    name: "Khaled",
    chips: 145
    }

let msg = ""
let cards = []
let sum = 0
let isAlive = false
let hasBlackJack = false

let messageEl = document.getElementById("message-el")
let cardsEl = document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el")

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": €" + player.chips

function getRandomNumber(){
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if(randomNumber > 10){
        return 10
    } else if (randomNumber === 1){
        return 11
    } else {
        return randomNumber
    }
}

function startGame(){
    isAlive = true
        let firstCard = getRandomNumber()
        let secondCard = getRandomNumber()
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
    if(sum <= 20){
        msg = "Do you want to draw a new card?"
    } else if(sum === 21){
        msg = "You got a blackjack"
        hasBlackJack = true
    } else {
        msg = "You are out of the game"
        isAlive = false
    }
    messageEl.textContent = msg
}

function newCard(){
    if (isAlive === true && hasBlackJack === false){
        let card = getRandomNumber()
        sum += card
        cards.push(card)
        renderGame()
    }
}
