# Class 10 Reading Notes.

[HOME](https://sayefdeen.github.io/reading-notes201/)

## Chapter 10 JS Book Error Handling & Debugging.

Programming is like problem solving, don't expect ro write it perfectly at the first time, so we are going to learn how ti find the errors in your code.

### Order Of Execution.

<img src="img/order.jpg" align="middle" style="margin:15px;" title="Order in JavaScript" />

<p>This script create a greeting massege, you might think the order of execution would be as numberd, but it is a little more complicated </p>

<p>To Complete stepp one, the interpreter needs the results of the funstion in steps 2 and 3, because the message contains calues returned by those functions the order of execution is more like this : 
<span style="color:red;">1,2,3,2,1,4</span></p>

- Step(1) The greeting varaible gets value from the greetUser() function.

- Step(2) greetUser() creates the message by combining the string 'Hello ' with the result of getName().

- Step(3) getName() returns the name of greetUser().

- greetUser() now knows the name, and combines it with the string. It then returns the ,essage to the statment that called it in Step(1).

- 1. The value of the greeting is stored in memory.
- 4. This greeting variable is written to an alert box.

The JavaScript interpreter uses the concept of **execution contexts** There is one global execution context; plus each function creates a new execution context. They correspond to variable scope.

<ul>
<li>GLOBAL CONTEXT : Code that is in the script, but not in a function There is only one global context in any page</li>
<li>FUNCTION CONTEXT : Code that is being run wihtin a function. Each function has its own function context.</li>
</ul>
