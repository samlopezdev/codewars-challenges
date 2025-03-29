// Quarter of the Year

// Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

// For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.

// Constraint:

// 1 <= month <= 12

// My Solution
const quarterOf = (month) => {
  //   if (month <= 3) return 1
  //   if (month <= 6) return 2
  //   if (month <= 9) return 3
  //   if (month <= 12) return 4

  switch (true) {
    case month <= 3:
      return 1;
    case month <= 6:
      return 2;
    case month <= 9:
      return 3;
    case month <= 12:
      return 4;
    default:
      return "Month needs to be a number between 1 and 12";
  }
};

// Other Solution
const quarterOf = (month) => Math.ceil(month / 3);

// 2
const quarterOf = (month) => {
  return Math.ceil(month / 3);
};

// 3
const monthToQuarterMap = {
  1: 1,
  2: 1,
  3: 1,
  4: 2,
  5: 2,
  6: 2,
  7: 3,
  8: 3,
  9: 3,
  10: 4,
  11: 4,
  12: 4,
};

function quarterOf(month) {
  return monthToQuarterMap[month];
}

// 4
const quarterOf = (month, quarter = 4) => {
  switch (month) {
    case 1:
    case 2:
    case 3:
      quarter = 1;
      break;
    case 4:
    case 5:
    case 6:
      quarter = 2;
      break;
    case 7:
    case 8:
    case 9:
      quarter = 3;
      break;
  }
  return quarter;
};
