// Char Recognition Software

// Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

// When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

// Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

// S is misinterpreted as 5
// O is misinterpreted as 0
// I is misinterpreted as 1
// The test cases contain numbers only by mistake.


// My Solution
export function correct(s: string): string {
  return s.replaceAll("0", "O").replaceAll("5", "S").replaceAll("1", "I");
}


// Other Solutions
export function correct(s: string): string {
  return s !== ""
    ? s
        .split("")
        .map((item) => {
          if (item === "1") return "I";
          else if (item === "0") return "O";
          else if (item === "5") return "S";
          else return item;
        })
        .join("")
    : s;
}


// 2
export function correct(s: string): string {
  return s.replace(/[501]/g, (m) => {
    switch (m) {
      case "5":
        return "S";
      case "0":
        return "O";
      case "1":
        return "I";
      default:
        return "";
    }
  });
}


// 3
export const correct = (s: string): string =>
  s.replace(/5/g, "S").replace(/0/g, "O").replace(/1/g, "I");


// 4
function replaceAll(search: string, replace: string, subject: string): string {
  return subject.split(search).join(replace);
}

const mistakes: { [key: string]: string } = {
  "5": "S",
  "0": "O",
  "1": "I",
};

export function correct(s: string): string {
  for (let mistake in mistakes) {
    s = replaceAll(mistake, mistakes[mistake], s);
  }
  return s;
}
