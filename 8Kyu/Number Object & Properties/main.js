// Training JS # 13: Number Object & Properties

// My Solution
function whatNumberIsIt(n) {
  if (n === Number.POSITIVE_INFINITY) {
    return "Input number is Number.POSITIVE_INFINITY";
  }
  if (n === Number.MAX_VALUE) {
    return "Input number is Number.MAX_VALUE";
  }
  if (n === Number.MIN_VALUE) {
    return "Input number is Number.MIN_VALUE";
  }
  if (Number.isNaN(+n)) {
    return "Input number is Number.NaN";
  }
  if (n === Infinity + 1) {
    return "Input number is Number.POSITIVE_INFINITY";
  }
  if (n === -Infinity) {
    return "Input number is Number.NEGATIVE_INFINITY";
  }
  return "Input number is " + n;
}

// Other Solutions
function whatNumberIsIt(n) {
  switch (true) {
    case n == Number.MAX_VALUE:
      return "Input number is Number.MAX_VALUE";
    case n == Number.POSITIVE_INFINITY:
      return "Input number is Number.POSITIVE_INFINITY";
    case n == Number.MIN_VALUE:
      return "Input number is Number.MIN_VALUE";
    case n == Number.NEGATIVE_INFINITY:
      return "Input number is Number.NEGATIVE_INFINITY";
    case isNaN(n):
      return "Input number is Number.NaN";
    default:
      return "Input number is " + n;
  }
}


// 2
function whatNumberIsIt(n) {
  switch (n) {
    case Number.MAX_VALUE:
      return "Input number is Number.MAX_VALUE";
    case Number.MIN_VALUE:
      return "Input number is Number.MIN_VALUE";
    case Number.POSITIVE_INFINITY:
      return "Input number is Number.POSITIVE_INFINITY";
    case Number.NEGATIVE_INFINITY:
      return "Input number is Number.NEGATIVE_INFINITY";
    case Number(n):
      return "Input number is " + n;
    default:
      return "Input number is Number.NaN";
  }
}
