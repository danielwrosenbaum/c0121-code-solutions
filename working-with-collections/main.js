console.log('Lodash is loaded:', typeof _ !== 'undefined');

var playerOne = {
  hand: []
};
var playerTwo = {
  hand: []
};
var playerThree = {
  hand: []
};
var playerFour = {
  hand: []
};
var suit = ['spades', 'diamonds', 'clubs', 'hearts'];
var rank = ['ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king'];

function createDeck() {
  var deck = [];
  for (var i = 0; i < suit.length; i++) {
    for (var j = 0; j < rank.length; j++) {
      var card = {
        cardRank: rank[j],
        cardSuit: suit[i]
      };
      deck.push(card);
    }
  }
  console.log(deck, card);
  return deck;
}

function shuffleCards(deck) {
  for (var i = deck.length - 1; i > 0; i--) {
    var randomNum = Math.floor(Math.random() * (i + 1));

  }

}
