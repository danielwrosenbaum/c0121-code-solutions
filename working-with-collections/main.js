console.log('Lodash is loaded:', typeof _ !== 'undefined');
var deck = [];
var players = [
  {
    name: 'playerOne',
    hand: [],
    score: []
  },
  {
    name: 'playerTwo',
    hand: [],
    score: []
  },
  {
    name: 'playerThree',
    hand: [],
    score: []
  },
  {
    name: 'playerFour',
    hand: [],
    score: []
  }
];
var suit = ['spades', 'diamonds', 'clubs', 'hearts'];
var rank = ['ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'jack', 'queen', 'king'];

function createDeck() {
  for (var i = 0; i < suit.length; i++) {
    for (var j = 0; j < rank.length; j++) {
      var card = {
        cardRank: rank[j],
        cardSuit: suit[i]
      };
      deck.push(card);
    }
  }
  return deck;
}

function shuffleCards(deck) {
  createDeck();
  _.shuffle(deck);
  return deck;
}

function dealCards(deck, cards) {
  shuffleCards(deck);
  for (var i = 0; i < players.length; i++) {
    var playerHand = _.sampleSize(deck, cards);
    players[i].hand = playerHand;
  }
}

function findWinner() {
  dealCards(deck, 2);
  var highScore = players.length - 1;
  for (var i = 0; i < players.length; i++) {
    for (var j = 0; j < players[i].hand.length; j++) {
      if (_.isNumber(players[i].hand[j].cardRank)) {
        players[i].score.push(players[i].hand[j].cardRank);
      } else if (players[i].hand[j].cardRank === 'ace') {
        players[i].score.push(11);
      } else {
        players[i].score.push(10);
      }
    }
    players[i].score = _.sum(players[i].score);
  }
  var winner = _.sortBy(players, ['score']);
  return 'The Winner is: ' + winner[highScore].name;
}
console.log(findWinner());
