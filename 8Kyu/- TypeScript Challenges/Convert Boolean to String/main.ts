// Convert Boolean to String

// Implement a function which convert the given boolean value into its string representation.

// Note: Only valid inputs will be given.

// My Solution
export const booleanToString = (b: boolean): string => String(b);

// Other Solutions
export const booleanToString = (b: boolean): string => {
  return b.toString();
};

// 2
export const booleanToString = (b: boolean): string => `${b}`;