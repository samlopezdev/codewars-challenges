// Remove the Time

// You're re-designing a blog, and the blog's posts have the Weekday Month Day, time format for showing the date and time when a post was made, e.g., Friday May 2, 7pm.

// You're running out of screen real estate, and on some pages you want to display a shorter format, Weekday Month Day that omits the time.

// Write a function that takes the website date/time in its original string format and returns the shortened format.

// Input
// Input will always be a string, e.g., "Friday May 2, 7pm".

// Output
// Output will be the shortened string, e.g., "Friday May 2".

// My Solution
function shortenToDate(longDate) {
  return longDate.split(",")[0];
}

// Other Solutions
const shortenToDate = (longDate) => longDate.split(",")[0];

// 2
function shortenToDate(longDate) {
  return longDate.slice(0, longDate.indexOf(","));
}

// 3
function shortenToDate(longDate) {
  const [date, time] = longDate.split(",");
  return date;
}

// 4
function shortenToDate(longDate) {
  return longDate.replace(/\,.*/g, "");
}
