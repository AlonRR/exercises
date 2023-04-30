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
    let newCard = $(`<span id="cardNum${numberOfCards}">`);
    newCard.css({
      width: `${cardSize}px`,
      height: `${cardSize}px`,
      "background-color": `#000000`,
      display: `flex`,
      "text-align": `center`,
      "justify-content": `center`,
      'align-items': 'center',
      'font-size':`calc(${cardSize}px / 3)`,
    });
    let newLetter = $(`<span id="letterNumber${numberOfCards}">`);
    let raL = randomLetter();
    newLetter.html(`${raL}`);
    newLetter.css({
      position: `relative`,
      flex: `1`,
      color: `#FFFFFF`,
      'font-size':'inherit',
      display:'none',
    });
    $(`.layout3center`).append(newCard);
    newCard.append(newLetter);
    cardSize += 20;
    numberOfCards++;
  }
};
let letters = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`;
let lastLetter = 0;
// let currentLetters;
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
// let card = {
//   height: "80px",
//   width: "80px",
//   display: "block",
//   position: "relative",
//   "background-color": "#000000",
// };

// class card {
//   constructor() {
//     this = document.createElement("span");
//     this.width = cardSize;
//     this.height = cardSize;
//     this.backgroundColor = `#000000`;
//     cardSize += 20;
//     numberOfCards++;
//   }
//   getCardWidth() {
//     return this.width;
//   }
//   getCardHeight() {
//     return this.height;
//   }
//   // output() {
//     //   return `${this}`;
//     // }
// }
// this.attr(`id`, `cardNum${numberOfCards}`).css({
//   width: `${cardSize}px`,
//   height: `${cardSize}px`,
//   "background-color": `#000000`,
// });
