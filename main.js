// assigments
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
let currentHour = currentDate.getHours(); // returns current hour
let $saveBtn = $(".saveBtn"); //grabs save buttons
let $scheduleTime = $(".scheduleTime"); //a class group containing all schedule textboxes
let startingTimeValue = 9; // used to add data value attribute to saveBtn and scheduleTime

// top of page:  displaying day of week, month, date, ordinal, and year
$currentDateandDay.html(
  `${daysOfWeek[currentDayOfWeek]},  ${
    monthsInYear[currentMonth - 1]
  } ${currentDayInMonth}${dateOrdinal()} ${currentYear}`
); //displays day of week.

//sets the appropriate ordinal to current date
function dateOrdinal() {
  if (
    currentDayInMonth === 1 ||
    currentDayInMonth === 21 ||
    currentDayInMonth === 31
  ) {
    return "st,";
  } else if (currentDayInMonth === 2 || currentDayInMonth === 22) {
    return "nd,";
  } else if (currentDayInMonth === 3) {
    return "rd,";
  } else {
    return "th,";
  }
}

//sets text areas to past, present, and future css classes.

$scheduleTime.each(function () {
  $(this).attr("data-value", startingTimeValue);
  startingTimeValue++;
  if (parseInt($(this).attr("data-value")) > currentHour) {
    $(this).addClass("future");
  } else if (parseInt($(this).attr("data-value")) === currentHour) {
    $(this).addClass("present");
  } else {
    $(this).addClass("past");
  }
});

startingTimeValue = 9;
//add data value to each save button
$saveBtn.each(function () {
  $(this).attr("data-value", startingTimeValue);
  startingTimeValue++;
});

//save text data to local storage
$saveBtn.on("click", function () {
  let timeValue = $(this).attr("data-value");
  $scheduleTime.each(function () {
    if ($(this).attr("data-value") == timeValue) {
      console.log($(this).val());
      localStorage.setItem(timeValue, $(this).val());
    }
  });
});
