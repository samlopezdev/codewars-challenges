// Simple Change Machine

// Your task is to create a change machine.

// The machine accepts a single coins or notes, and returns change in 20p and 10p coins. The machine will try to avoid returning its exact input, but will otherwise return as few coins as possible. For example, a 50p piece should become two 20p pieces and one 10p piece, but a 20p piece should become two 10p pieces.

// The machine can exclusively process these coins and notes: £5, £2, £1, 50p, 20p. Any coins and notes which are not accepted by the machine will be returned unprocessed. For example, if you were to put a £20 note into the machine, it would be returned to you and not broken into change. (Note that £1 is worth 100p.)

// This change machine is programmed to accept and distribute strings rather than numbers. The input will be a string containing the coin or note to be processed, and the change should be returned as one string with the coin names separated by single spaces with no commas. The values of the string should be in descending order. For example, an input of "50p" should yield the exact string "20p 20p 10p".



// My Solution
function changeMe(moneyIn){
    switch (moneyIn) {
        case '£5': return '20p '.repeat(25).trim()
        case '£2': return '20p '.repeat(10).trim()
        case '£1': return '20p '.repeat(5).trim()
        case '50p': return '20p 20p 10p'
        case '20p': return '10p 10p'
        default: return moneyIn
    }
}


// Other Solution
function changeMe(moneyIn){
  
    if (moneyIn === "20p") return "10p 10p";
    else if (moneyIn === "50p") return "20p 20p 10p";
    else if (moneyIn === "£1") return "20p 20p 20p 20p 20p";
    else if (moneyIn === "£2") return "20p 20p 20p 20p 20p 20p 20p 20p 20p 20p";
    else if (moneyIn === "£5") return "20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p";
    else return moneyIn += ""
      
}


// 2
function changeMe(moneyIn){
    switch (moneyIn) {
      case '£5':
        var change = Array(25).fill('20p');
        return change.join(' ');
      case '£2':
        var change = Array(10).fill('20p');
        return change.join(' ');
      case '£1':
        var change = Array(5).fill('20p');
        return change.join(' ');
      case '50p':
        return '20p 20p 10p';
      case '20p':
        return '10p 10p';
      default:
        return moneyIn;
    }
}


// 3
function changeMe(moneyIn) {
    var accepted = ['£5','£2','£1','50p','20p'];
    var change = ["20p 20p 20p 20p 20p 20p 20p 20p 20p 20p " + 
                  "20p 20p 20p 20p 20p 20p 20p 20p 20p 20p " + 
                  "20p 20p 20p 20p 20p",
                  "20p 20p 20p 20p 20p 20p 20p 20p 20p 20p",
                  "20p 20p 20p 20p 20p", "20p 20p 10p", "10p 10p"]
    var moneyIndex = accepted.indexOf(moneyIn);
    if (moneyIndex == -1) return moneyIn;
    else return change[moneyIndex];
}