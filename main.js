// assigments: current date

//note: I chose the extra steps of making variables for currentDayIn Month and Current Year to help keep code readable.

let $currentDateandDay = $(".currentDateandDay"); //grabs p tag
let currentDate = new Date(); //grabs todays date from built in function
let currentDayOfWeek = currentDate.getDay(); //returns a number from 0-6 based on todays day
let currentMonth = currentDate.getMonth(); // returns current month of year
let daysOfWeek = [
  //days of week array
  "Sunday",
  "Monday",
  "Tuesday",
  "Wendesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let monthsInYear = [
  //months in the year array
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let currentDayInMonth = currentDate.getDate(); //returns a number from 0-11 based on month
let currentYear = currentDate.getFullYear(); // returns current Year

//Current Date display at top of Page

//string line displaying day of week, month, date, ordinal, and year
$currentDateandDay.html(
  `${daysOfWeek[currentDayOfWeek]},  ${
    monthsInYear[currentMonth - 1]
  } ${currentDayInMonth}${dateOrdinal()} ${currentYear}`
); //displays day of week.

//sets the appropriate ordinal to current date
function dateOrdinal(currentDayInMonth) {
  if (currentDayInMonth === 1) {
    return "st";
  } else if (currentDayInMonth === 2) {
    return "nd";
  } else if (currentDayInMonth === 3) {
    return "rd";
  } else {
    return "th";
  }
}
