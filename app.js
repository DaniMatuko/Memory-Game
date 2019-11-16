//get all the cards
const cards = document.querySelectorAll('.card');
//identify the card which was clicked
cards.forEach(card => {
    card.addEventListener('click', function() {
        //flip the card
        flipCard(this);
        /*check if its the first or the second card */
        let hasFlipedcard;
        let firstCard
        let secondCard

        hasFlipedcard = true;
        console.log(hasFlipedcard);
        if (!hasFlipedcard) {
            //this is the first card
            firstCard = this;

        } else {
            //this is the second card
            secondCard = this;
            //check if the cards matching
            isPair(firstCard, secondCard);
        }

    })

});


function flipCard(card) {
    card.classList.toggle('flip');
}


function isPair(firstCard, secondCard) {
    console.log(firstCard);
    console.log(secondCard);
}