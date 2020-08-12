const cards = document.querySelectorAll(".memory-card");
let hasFlippedCard = false;
let firstCard, secondCard;

function flipCart() {
  this.classList.add("flip");
  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;
    
  } else {
    hasFlippedCard = false;
    secondCard = this;
    console.log({ firstCard, secondCard });
    console.log(firstCard == firstCard);
    console.log(firstCard == secondCard);
  }
}

cards.forEach((card) => {
  card.addEventListener("click", flipCart);
});
