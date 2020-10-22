# Basic Day Planner

[Coding Trivia Game ](https://ewager1.github.io/Basic-Day-Planner/)
![Website Demo Picture](./Assets/demoPic.png)

## Goal

To create a day planner utilizing jQuery with the following criteria:

- Planner has the current day, month, year at top of calendar
- Planner container blocks from 9AM to 5 PM
- Text Boxes change color based on if they are set in past, present, or future
- When the save button is clicked, it saved the textbox data to the local storage
- Text saved in text box even if page is refreshed

## Positives:

1. Project achieves each of the pre-requisites.
2. I was able to take my logic from the for loops I’m used to and convert it into a .each function for
   the first time. As a beginner in coding, I was excited I was able to figure the problem out of how to
   use the .each instead of writing everything out.
3. I became much more comfortable using jQuery
4. I was really excited I was able to problem solve my long code into the .each functions.

## Challenges:

1. Learning the .each was a big challenge for me. It was a jump to realize i don't need to call indexes
   the same way I do in For Loops. Once i stepped back and gained deeper understanding of how .each is
   different than a for loop it really came together.

## If I had more Time:

1.  It would be really cool to make 5 buttons at the top representing the 5 days of the week. I think I could use
    a case/switch for them, then create some hide functionality. Logically, I would have to rearrange my variables
    a little to avoid an issue where the program saves all 9AM spots, for example. First, I pictured just increasing
    the date-value of each text box, but I realized that the past/present/future stylings rely on that same variable. While doing so kept my code short for this, it caused a replication issue. I would probably go back
    and create a new variable, separate the tasks, then I could easily create the five days. I have it all in my head, but want to spend more time this week working on API understanding than following through on this bonus idea.
