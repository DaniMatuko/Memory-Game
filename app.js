//get all the cards
const cards = document.querySelectorAll('.card');
let hasFlipedcard;
let firstCard;
let secondCard;
//identify the card which was clicked
cards.forEach(card => {

    card.addEventListener('click', function() {
        //flip the card
        flipCard(this);
        /*check if it's the first or the second card */
        if (!hasFlipedcard) {
            //this is the first card
            firstCard = this;
            hasFlipedcard = true;
        } else {
            //this is the second card
            secondCard = this;
            hasFlipedcard = false;
            //checkForMatch
            isPair(firstCard, secondCard);
        }
    })
});


function flipCard(card) {
    card.classList.toggle('flip');
}

function isPair(firstCard, secondCard) {
    if (firstCard.dataset.imgname == secondCard.dataset.imgname) {
        console.log('true');
    } else {
        console.log('false');
    }
}