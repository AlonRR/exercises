let cardSize = 80;
let numberOfCards = 0;

(() => {
  $(`#clickSquare`).on(`click`, () => {
    createNewCard();
  });
})();

let createNewCard = () => {
  if (numberOfCards >= 12) {
    $(`#clickSquare`).off(`click`);
    $(`#clickSquare`).css({ "background-color": "red" });
    return;
  }
  for (let i = 0; i < 3; i++) {
    let currentCard = numberOfCards;
    let newCard = $(
      `<span class="card uncompleted" id="cardNum${currentCard}" data="${currentCard}">`
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
  letterShuffle();
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
    currentCard.off(`click`);
    currentCard.removeClass(`uncompleted`).addClass(`completed`);
    thisCard.css(`background-color`, `green`);
    thisCard.off(`click`);
    thisCard.removeClass(`uncompleted`).addClass(`completed`);
    uncompletedLetters = uncompletedLetters.replace(
      currentCardChild.text(),
      ``
    );
    thisCard = undefined;
    return;
  }
  //incorrect guess
  if (thisCard != undefined) {
    currentCard.off(`click`);
    setTimeout(() => {
      currentCardChild.css(`display`, `none`);
      currentCard.css({ "background-color": `#000000` });
      currentCard.on(`click`, cardGame);
      thisCard.children(`span`).css(`display`, `none`);
      thisCard.css({ "background-color": `#000000` });
      thisCard.on(`click`, cardGame);
      thisCard = undefined;
    }, 500);
    return;
  }
  currentCard.off(`click`);
  thisCard = currentCard;
}

let uncompletedLetters = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`;
let lastLetter = 0;

let letterShuffle = () => {
  let leftLetters = uncompletedLetters;
  let countUncompleted = 0;
  $(`.uncompleted`).each(() => {
    countUncompleted++;
  });
  let letterBuffer = ``;
  countUncompleted = Math.ceil(countUncompleted / 2);
  for (let i = 0; i < countUncompleted; i++) {
    let randomNum = Math.floor(Math.random() * leftLetters.length);
    let randomLetter = leftLetters[randomNum];
    letterBuffer += randomLetter;
    letterBuffer += randomLetter;
    leftLetters = leftLetters.slice(0,randomNum) + leftLetters.slice(randomNum+1)
  }
  $(`.uncompleted`).each((index, element) => {
    let randomNum = Math.floor(Math.random() * letterBuffer.length);
    let newLetter = letterBuffer[randomNum];
    letterBuffer[randomNum] = ``;
    $(element).children(`span`).html(`${newLetter}`);
  });
};
