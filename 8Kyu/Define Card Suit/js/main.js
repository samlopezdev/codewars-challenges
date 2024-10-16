// Define A Card Suit

// You get any card as an argument. Your task is to return the suit of this card (in lowercase).

// ('3♣') -> return 'clubs'
// ('3♦') -> return 'diamonds'
// ('3♥') -> return 'hearts'
// ('3♠') -> return 'spades'


// My Solution:
function defineSuit(card){ 
    if (card.endsWith('♣')) {
      return 'clubs'
    } else if (card.endsWith('♦')) {
      return 'diamonds'
    } else if (card.endsWith('♠')) {
      return 'spades'
    } else {
      return 'hearts'
    }
}


// Other Solutions:
function defineSuit(card) {
    const suit = {
      "♣": "clubs",
      "♠": "spades",
      "♦": "diamonds",
      "♥": "hearts"
    }
    return suit[card.charAt(card.length - 1)]
}



// 2
function defineSuit(card) {
    if(card.includes('♥')) return 'hearts'
    if(card.includes('♦')) return 'diamonds'
    if(card.includes('♣')) return 'clubs'
    if(card.includes('♠')) return 'spades' 
}



// 3
function defineSuit(card) {
    switch (card.slice(-1)){
      case '♣': return 'clubs';
      case '♦': return 'diamonds';
      case '♥': return 'hearts';
      case '♠': return 'spades';    
    }
}


// 4
function defineSuit(card) {
    let deck = ['2♣','3♣','4♣','5♣','6♣','7♣','8♣','9♣','10♣','J♣','Q♣','K♣','A♣',
          '2♦','3♦','4♦','5♦','6♦','7♦','8♦','9♦','10♦','J♦','Q♦','K♦','A♦',
          '2♥','3♥','4♥','5♥','6♥','7♥','8♥','9♥','10♥','J♥','Q♥','K♥','A♥',
          '2♠','3♠','4♠','5♠','6♠','7♠','8♠','9♠','10♠','J♠','Q♠','K♠','A♠'];
    
    let c = deck.indexOf(card);
    
    return c < 13 ? 'clubs' : c < 26 ? 'diamonds' : c < 39 ? 'hearts' : 'spades';
}



// 5
function defineSuit(card) {
    switch(card[card.length - 1]) {
      case '♣':
          return 'clubs'
  
      case '♦':
          return 'diamonds'
      
      case '♥':
          return 'hearts'
      
      case '♠':
          return 'spades'
    }
}