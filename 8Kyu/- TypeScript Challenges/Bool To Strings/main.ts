// Convert boolean values to strings 'Yes' or 'No'.

// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.


// My Solution
export const boolToWord = (bool: boolean): string => {
  return bool ? "Yes" : "No";
};


// Other Solutions
export const boolToWord = (bool: boolean): "Yes" | "No" => {
  return bool ? "Yes" : "No";
};


// 2
export const boolToWord = (bool: boolean): string => {
  var response;
  switch (bool) {
    case true: {
      return (response = "Yes");
      break;
    }
    case false: {
      return (response = "No");
      break;
    }
    default: {
      return (response = "Please, insert a valid value!");
      break;
    }
  }
  return response;
};
