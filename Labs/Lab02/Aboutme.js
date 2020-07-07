"use strict";

var answer1, answer2, answer3, answer4, answer5, answer6, answer7;
var finalResult = 0;

var userName = prompt("Hello Stranger Can I Know Your Name?");
alert("Nice To meet You, " + userName);
questions();
alert(
  "Thank You for you Time, " +
    userName +
    " your final result is " +
    finalResult +
    " of 7"
);

function questions() {
  alert("I will ask you some yes/no questions is that ok " + userName + " ?");
  answer1 = prompt("Question 1 \n Did I graduated as a civil Engineer?");
  while (
    answer1.toLowerCase() !== "yes" &&
    answer1.toLowerCase() !== "y" &&
    answer1.toLowerCase() !== "no" &&
    answer1.toLowerCase() !== "n"
  ) {
    answer1 = prompt(
      " You have to answer with y/n Or yes/No \n Question 1 \n Did I graduated as a civil Engineer?"
    );
  }
  //   console.log("You Answer for question 1 was " + correct(answer1));
  alert(correct(answer1));
  answer2 = prompt("Question 2 \n Did I graduated at 2017?");
  while (
    answer2.toLowerCase() !== "yes" &&
    answer2.toLowerCase() !== "y" &&
    answer2.toLowerCase() !== "no" &&
    answer2.toLowerCase() !== "n"
  ) {
    answer2 = prompt(
      " You have to answer with y/n Or yes/No \nQuestion 2 \n Did I graduated at 2017?"
    );
  }
  //   console.log("You Answer for question 2 was " + correct(answer2));
  alert(correct(answer2));
  answer3 = prompt("Question 3 \n Is Java on of my skills?");
  while (
    answer3.toLowerCase() !== "yes" &&
    answer3.toLowerCase() !== "y" &&
    answer3.toLowerCase() !== "no" &&
    answer3.toLowerCase() !== "n"
  ) {
    answer3 = prompt(
      " You have to answer with y/n Or yes/No \nQuestion 3 \n Is Java on of my skills?"
    );
  }
  //   console.log("You Answer for question 3 was " + correct(answer3));
  alert(correct(answer3));
  answer4 = prompt("Question 4 \n Is it true thats my name is sayefdeen?");
  while (
    answer4.toLowerCase() !== "yes" &&
    answer4.toLowerCase() !== "y" &&
    answer4.toLowerCase() !== "no" &&
    answer4.toLowerCase() !== "n"
  ) {
    answer4 = prompt(
      " You have to answer with y/n Or yes/No \nQuestion 4 \n Is it true thats my name is sayefdeen?"
    );
  }
  //   console.log("You Answer for question 4 was " + correct(answer4));
  alert(correct(answer4));
  answer5 = prompt(
    "Question 5 \n Is it true that i graduated with an excellent rating?"
  );
  while (
    answer5.toLowerCase() !== "yes" &&
    answer5.toLowerCase() !== "y" &&
    answer5.toLowerCase() !== "no" &&
    answer5.toLowerCase() !== "n"
  ) {
    answer5 = prompt(
      " You have to answer with y/n Or yes/No \nQuestion 5 \n Is it true that i graduated with an excellent rating?"
    );
  }
  //   console.log("You Answer for question 5 was " + correct(answer5));
  alert(correct(answer5));
  var rightAnswer = 7;
  // Should have a number validation in this section.
  for (var i = 4; i > 0; i--) {
    answer6 = prompt(
      "You have " +
        i +
        " chance left \n what is the number I have in mind between 0-10"
    );
    if (answer6 > rightAnswer) {
      alert("Too High");
    } else if (answer6 < rightAnswer) {
      alert("Too Low");
    } else {
      finalResult++;
      alert("Correct");
      break;
    }
  }
  if (i == 0) alert("The correct number was " + rightAnswer);

  var topMoviesArr = ["Predestination", "Shutter Island", "Mr Nobody"];

  for (var j = 6; j > 0; j--) {
    answer7 = prompt(
      "You have " +
        j +
        " chances left \n Can you guess one of my top 3 favorite movies"
    ).toLowerCase();
    if (answer7 == topMoviesArr[0].toLowerCase()) {
      finalResult++;
      alert("WOW! Thats My number One Movie");
      break;
    } else if (answer7 == topMoviesArr[1].toLowerCase()) {
      finalResult++;
      alert("WOW! Thats My Second Movie");
      break;
    } else if (answer7 == topMoviesArr[2].toLowerCase()) {
      finalResult++;
      alert("WOW! Thats My Third Movie");
      break;
    } else {
      alert("You Got this Wrong!!");
    }
  }
}

function correct(answer) {
  if (answer.toLowerCase() === "yes" || answer.toLowerCase() === "y") {
    finalResult++;
    return "Correct";
  } else {
    return "Wrong";
  }
}
