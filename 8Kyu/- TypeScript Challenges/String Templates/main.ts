// String Templates - Bug Fixing

// Timmy hasn't followed instructions very carefully and forgot how to use the new String Template feature, Help Timmy with his string template so it works as he expects! 

// My Solution
export function buildString(...template: string[]): string {
  return `I like ${template.join(", ")}!`;
}
