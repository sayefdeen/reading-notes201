var userName;
var userAge;
var userProfession;
var userMajor;
questions();
answer();
alert("You Answerd all question\n Go to console to see the result Please!!");
consol_log();

function questions() {
  userName = prompt("What is your name?");
  userAge = prompt("How old are you");
  userProfession = prompt("What is your profession?");
  userMajor = prompt("What is your major?");
}

function answer() {
  alert(
    "Your Name is " +
      userName +
      "\nYour age is " +
      userAge +
      "\n Your profession is " +
      userProfession +
      "\n Your major is " +
      userMajor
  );
}

function consol_log() {
  console.log("What is your name? Answer: " + userName);
  console.log("How old are you? Answer: " + userAge);
  console.log("What is your proffession? Answer: " + userProfession);
  console.log("What is you major? Answer: " + userMajor);
}
