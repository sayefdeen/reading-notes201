"use strict";

var answer1, answer2, answer3, answer4, answer5;

var userName = prompt("Hello Stranger Can I Know Your Name?");
alert("Nice To meet You, " + userName);
questions();
alert("Thank You for you Time, " + userName);

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
}

function correct(answer) {
  if (answer.toLowerCase() === "yes" || answer.toLowerCase() === "y") {
    return "Correct";
  } else {
    return "Wrong";
  }
}
