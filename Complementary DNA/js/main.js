// Complementary DNA

// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

// If you want to know more: http://en.wikipedia.org/wiki/DNA

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

// More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

// Example: (input --> output)

// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"


// My Solution
function dnaStrand(dna){
    let letters = dna.split('')
    
    for (let i = 0; i <= letters.length; i++) {
      if (letters[i] === 'A') {
        letters[i] = 'T'
      } else if (letters[i] === 'T') {
        letters[i] = 'A'
      } else if (letters[i] === 'C') {
        letters[i] = 'G'
      } else if (letters[i] === 'G') {
        letters[i] = 'C'
      }
    }
    
    return letters.join('')
}



// Other Solutions
var pairs = {'A':'T','T':'A','C':'G','G':'C'};

function DNAStrand(dna){
  return dna.split('').map(function(v){ return pairs[v] }).join('');
}


// 2
function DNAStrand(dna){
    var res="";
    for (var i = 0; i < dna.length; i++) {
      switch(dna[i]) {
        case 'A':
          res += "T";
          break;
        case 'T':
          res += "A";
          break;
        case 'G':
          res += "C";
          break;
        case 'C':
          res += "G";
          break;
      }
    }
    return res;
}



// 3
function DNAStrand(dna) {
    return dna.split('').map(function(v) {return {A:'T', T:'A', C:'G', G:'C'}[v];}).join('');
}



// 4
function DNAStrand(dna) {
    return dna.replace(/./g, function(c) {
      return DNAStrand.pairs[c]
    })
  }
  
  DNAStrand.pairs = {
    A: 'T',
    T: 'A',
    C: 'G',
    G: 'C',
}


// 5
function DNAStrand(dna){
    let newDNA = "";
    let dnaKeys = {
      "A": "T",
      "T": "A",
      "C": "G",
      "G": "C"
    };
    
    for (let i = 0; i < dna.length; i++) {
      let char = dna[i];
      
      newDNA += dnaKeys[char];
    }
    
    return newDNA;
}