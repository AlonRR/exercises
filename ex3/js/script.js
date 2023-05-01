let cardSize = 80;
let numberOfCards = 0;

(() => {
  $(`#clickSquare`).on(`click`, () => {
    createNewCard();
  });
})();

let createNewCard = () => {
  if (numberOfCards >= 12) return;
  for (let i = 0; i < 3; i++) {
    let currentCard = numberOfCards;
    let newCard = $(
      `<span class="card" id="cardNum${currentCard}" data="${currentCard}">`
    );
    newCard.css({
      width: `${cardSize}px`,
      height: `${cardSize}px`,
      "background-color": `#000000`,
      display: `flex`,
      "text-align": `center`,
      "justify-content": `center`,
      "align-items": "center",
      "font-size": `calc(${cardSize}px / 3)`,
    });
    $(`.layout3center`).append(newCard);
    let newLetter = $(`<span class="letter" id="letterNumber${currentCard}">`);
    let raL = randomLetter();
    newLetter.html(`${raL}`);
    newLetter.css({
      position: `relative`,
      flex: `1`,
      color: `#FFFFFF`,
      "font-size": "inherit",
      display: "none",
    });
    newCard.append(newLetter);
    $(`#cardNum${currentCard}`).on(`click`, cardGame);
    cardSize += 20;
    numberOfCards++;
  }
};

let thisCard = undefined;
function cardGame() {
  let currentCard = $(this);
  let currentCardChild = currentCard.children(`span`);
  currentCard.css({ "background-color": `blue` });
  currentCardChild.css({ display: `block` });
  //currect guess swaps background to green and removes event listener
  if (
    thisCard != undefined &&
    thisCard.children(`span`).text() == currentCardChild.text()
  ) {
    currentCard.css(`background-color`, `green`);
    thisCard.css(`background-color`, `green`);
    currentCard.off(`click`);
    thisCard.off(`click`);
    thisCard = undefined;
    return;
  }
  //incorrect guess
  if (thisCard != undefined) {
    setTimeout(() => {
      currentCardChild.css(`display`, `none`);
      currentCard.css({ "background-color": `#000000` });
      thisCard.children(`span`).css(`display`, `none`);
      thisCard.css({ "background-color": `#000000` });
      thisCard.on(`click`, cardGame());
    }, 7000);
    thisCard = undefined;
    return;
  }
  currentCard.off(`click`);
  thisCard = currentCard;
}

let letters = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`;
let lastLetter = 0;

let randomLetter = () => {
  let newLetter;
  if (lastLetter != 0) {
    newLetter = lastLetter;
    lastLetter = 0;
    return newLetter;
  }
  newLetter = letters[Math.floor(Math.random() * letters.length)];
  lastLetter = newLetter;
  letters = letters.replace(newLetter, ``);
  return newLetter;
};
