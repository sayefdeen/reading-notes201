"use strict";

var answer1, answer6, answer7;
var finalResult = 0;
var Regix = /[\d]/;

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
  var questionArray = [
    "Question 1 \n Did I graduated as a civil Engineer?",
    "Question 2 \n Did I graduated at 2017?",
    "Question 3 \n Is Java on of my skills?",
    "Question 4 \n Is it true thats my name is sayefdeen?",
    "Question 5 \n Is it true that i graduated with an excellent rating?",
  ];
  for (var q = 0; q < questionArray.length; q++) {
    answer1 = prompt(questionArray[q]);
    while (
      answer1.toLowerCase() !== "yes" &&
      answer1.toLowerCase() !== "y" &&
      answer1.toLowerCase() !== "no" &&
      answer1.toLowerCase() !== "n"
    ) {
      answer1 = prompt(
        "You have to answer with y/n OR yes/no \n " + questionArray[q]
      );
    }
    var guess = correct(answer1);
    alert(guess);
  }

  // Should have a number validation in this section.
  for (var i = 50; i > 0; i--) {
    var rightAnswer = Math.floor(Math.random() * 11);

    answer6 = prompt(
      "You have " +
        i +
        " chance left \n what is the number I have in mind between 0-10"
    );
    if (Regix.test(answer6)) {
      if (answer6 > rightAnswer) {
        alert("Too High");
      } else if (answer6 < rightAnswer) {
        alert("Too Low");
      } else {
        finalResult++;
        alert("Correct");
        break;
      }
    } else {
      alert("Please Enter a number");
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
  alert(
    `My Favorite movies are ${topMoviesArr[0]} , ${topMoviesArr[1]}, and ${topMoviesArr[2]}`
  );
}

function correct(answer) {
  if (answer.toLowerCase() === "yes" || answer.toLowerCase() === "y") {
    finalResult++;
    return "Correct";
  } else {
    return "Wrong";
  }
}
