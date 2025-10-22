// Complementay DNA

// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

// If you want to know more: http://en.wikipedia.org/wiki/DNA

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

// More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

// Example: (input --> output)

// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"



// My Solution
export class Kata {
  static dnaStrand(dna: string) {
    let newDNA: string = "";

    for (const letter of dna) {
      switch (letter) {
        case "A":
          newDNA += "T";
          break;

        case "T":
          newDNA += "A";
          break;

        case "C":
          newDNA += "G";
          break;

        case "G":
          newDNA += "C";
          break;
      }
    }

    return newDNA;
  }
}

// Other Solutions
export class Kata {
  static dnaStrand(dna: string): string {
    const match = {
      A: "T",
      T: "A",
      G: "C",
      C: "G",
    };
    return Array.from(dna, (v) => match[v]).join("");
  }
}


// 2
export class Kata {
  static dnaStrand(dna: string) {
    return dna
      .split("")
      .map((c) =>
        c == "T"
          ? (c = "A")
          : c == "A"
          ? (c = "T")
          : c == "C"
          ? (c = "G")
          : c == "G"
          ? (c = "C")
          : c
      )
      .join("");
  }
}


// 3
export class Kata {
  static dnaStrand(dna: string) {
    const compl: { [letter: string]: string } = {
      A: "T",
      C: "G",
      T: "A",
      G: "C",
    };
    const dnaCompl = dna.split("").map((base: string) => compl[base]);
    return dnaCompl.join("");
  }
}


// 4
const lang: any = {
  A: "T",
  T: "A",
  C: "G",
  G: "C",
};
export class Kata {
  static dnaStrand(dna: string) {
    return dna
      .split("")
      .map((x) => lang[x])
      .join("");
  }
}


// 5
export function DNAStrand(dna: string): string {
  const complements: { [key: string]: string } = {
    A: 'T',
    T: 'A',
    C: 'G',
    G: 'C'
  };

  return dna.split('').map(nucleotide => complements[nucleotide]).join('');
}
