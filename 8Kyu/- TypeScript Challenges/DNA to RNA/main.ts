// DNA to RNA Conversion

// Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

// Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

// Create a function which translates a given DNA string into RNA.

// For example:

// "GCAT"  =>  "GCAU"
// The input string can be of arbitrary length - in particular, it may be empty. All input is guaranteed to be valid, i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'.

// My Solution
// dna -> string of uppercase letters. Could be empty. Will only ever hae variations of 'G', 'C', 'A','T'
// return -> string and replace 'T' with 'U'
export const DNAtoRNA = (dna: string): string => dna.replaceAll("T", "U");

// Other Solution
export function DNAtoRNA(dna: string): string {
  return dna.replace(/T/g, "U");
}

// 2
export const DNAtoRNA = ($: string): string =>
  [...$].map((el) => (el === "T" ? (el = "U") : el)).join("");

// 3
export function DNAtoRNA(dna: string): string {
  let RNA = "";

  for (var x = 0; x < dna.length; x++) {
    if (dna[x] === "T") {
      RNA += "U";
    } else {
      RNA += dna[x];
    }
  }

  return RNA;
}