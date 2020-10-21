// assigments: current date
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

//assignments: textareas
let textAreaNineAm = $(".textArea9am");
let textAreaTenAm = $(".textArea10am");
let textAreaElevenAm = $(".textArea11am");
let textAreaTwelvePm = $(".textArea12pm");
let textAreaOnePm = $(".textArea1pm");
let textAreaTwoPm = $(".textArea2pm");
let textAreaThreePm = $(".textArea3pm");
let textAreaFourPm = $(".textArea4pm");
let textAreaFivePm = $(".textArea5pm");

//Current Date display at top of Page

//string line displaying day of week, month, date, ordinal, and year
$currentDateandDay.html(
  `${daysOfWeek[currentDayOfWeek]},  ${
    monthsInYear[currentMonth - 1]
  } ${currentDayInMonth}${dateOrdinal()} ${currentYear}`
); //displays day of week.

//sets the appropriate ordinal to current date
function dateOrdinal(currentDayInMonth) {
  if (
    currentDayInMonth === 1 ||
    currentDayInMonth === 21 ||
    currentDayInMonth === 31
  ) {
    return "st";
  } else if (currentDayInMonth === 2 || currentDayInMonth === 22) {
    return "nd";
  } else if (currentDayInMonth === 3) {
    return "rd";
  } else {
    return "th";
  }
}

//sets the past, present, and future css. proud of this one. 
thisTime = document.querySelectorAll('.thisTime')
startingTimeValue = 9

for(i=0;i<thisTime.length;i++){
    thisTime[i].setAttribute('data-value',startingTimeValue)
    startingTimeValue++
    if (thisTime[i].getAttribute('data-value') > currentHour){
        thisTime[i].classList.add('future')
    }
    else if(parseInt(thisTime[i].getAttribute('data-value')) === currentHour){
        thisTime[i].classList.add('present')
    }
    else{thisTime[i].classList.add('past')}
}




