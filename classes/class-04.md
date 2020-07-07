# Class 04 Reading Notes.

[HOME](https://sayefdeen.github.io/reading-notes201/)

## Chapter 4 HTML Book Links.

Links are the defining feature of the web because they allow you to mive from one web page to another.

```html
<a href="http://www.imdb.com">IMDB</a>
<!-- Used to Linke ti web pages outside the project -->
<a href="index.html">Home</a>
<!-- Used to Link to another page inside the project -->
```

### Folders Structure.

|        Type        |                                                 Usage                                                  |                     Example                      |
| :----------------: | :----------------------------------------------------------------------------------------------------: | :----------------------------------------------: |
|    Same Folder     |                                  To Link to a file in the same folder                                  |          `<a href="Home.html">Home</a>`          |
|    Child Folder    |                                           for a child folder                                           |       `<a href="html/Home.html">Home</a>`        |
| Grand Child Folder | Use the name of the child folder, a forward slash, grandchild folder,another forward slash, file name. | `<a href="movies/dvd/reviews.html"> Reviews</a>` |
|   Parent Folder    |        Use ../ to indicate the folder above the current one, then follow it with the file name.        |        `<a href="../index.html">Home</a>`        |
| GrandParent Folder |             Repeat the ../ to indicate that you want to go up two folders (rather than one             |      `<a href="../../index.html">Home</a>`       |

### Email Links

Use `mailto` To create a link that starts up the user's email program and addresses an email to a specified email address, you use the `<a>`element. However, this time the value of the href attribute starts with mailto: and is followed by the email address you want the email to be sent to.

`<a href="mailto:jon@example.org">Email Jon</a>`

### Opening Links in a new window.

If you want a link to open in a new window, you can use the target attribute on the opening `<a>` tag. The value of this attribute should be \_blank.

`<a href="http://www.imdb.com" target="_blank"> Internet Movie Database</a>`

### Linking to a specific part of the same page.

in the href attribute you have to use the ide of the section you want to link to.

```html
<h1 id="top">Film-Making Terms</h1>
<a href="#arc_shot">Arc Shot</a><br />
<a href="#interlude">Interlude</a><br />
<a href="#prologue">Prologue</a><br /><br />
<h2 id="arc_shot">Arc Shot</h2>
<p>
  A shot in which the subject is photographed by an encircling or moving camera
</p>
<h2 id="interlude">Interlude</h2>
<p>
  A brief, intervening film scene or sequence, not specifically tied to the
  plot, that appears within a film
</p>
<h2 id="prologue">Prologue</h2>
<p>
  A speech, preface, introduction, or brief scene preceding the the main action
  or plot of a film; contrast to epilogue
</p>
<p><a href="#top">Top</a></p>
```

---

## Chapter 15 HTML book Layout.

**page 358-364**

CSS treats each HTML elemnt as if it is in its own box, This box will either be a **block-level** box or an **inline box**

- Block-level elemtns :
  `<h1-h6> <p> <ul> <li>`
- Inline-level elements :
  `<img> <b> <i>`.

### Containint Elemtns

if one block-level eemtn sits inside another block-level elemnt then the outer box is known as the **containin** or **parent** element,It is common to group a number of elements together inside a `<div>`(or other block-level) element. For example, you might group together all of the elements that form the header of a site (such as the logo and the main navigation). The `<div>` element that contains this group of elements is then referred to as the containing element.

### ControLLing the position of eLements

CSS has the following positioning schemes that allow you to control the layout of a page: normal flow, relative positioning, and absolute positioning. You specify the positioning scheme using the position property in CSS. You can also float elements using the float property.

- **Normal flow** : Every block-level element appears on a new line, causing each item to appear lower down the page than the previous one. Even if you specify the width of the boxes and there is space for two elements to sit side-by-side, they will not appear next to each other. This is the default behavior (unless you tell the browser to do something else).

- **Relative Positioning** : This moves an element from the position it would be in normal flow, shifting it to the top, right, bottom, or left of where it would have been placed. This does not affect the position of surrounding elements; they stay in the position they would be in in normal flow.

- **Absolute Positioning** : This positions the element
  in relation to its containing element. It is taken out of normal flow, meaning that it does not affect the position
  of any surrounding elements (as they simply ignore the space it would have taken up). Absolutely positioned elements move as users scroll up and down the page.

To indicate where a box should be positioned, you may also need to use box offset properties to tell the browser how far from the top or bottom and left or right it should be placed.

- Fixed Positioning : This is a form of absolute positioning that positions the element in relation to the browser window, as opposed to the containing element. Elements with fixed positioning do not affect the position of surrounding elements and they do not move when the user scrolls up or down the page.

- Floating elements : Floating an element allows you to take that element out of normal flow and position it to the far left or right of a containing box. The floated element becomes a block-level element around which other content can flow.

---

## Cahpter 3 Js Book Functions, methods & Objects.

Browsers require very detailed instructions about what we want them to do, Therfore, complex scripts can run to hundreds of lines. Programmers use functions, methods,and objects to orginize their code.

### Functions.

functions let you group a series of statments together to perform a specific task, If different parts of a script repeat the same task, you can reuse the function (rather than repeating the same set of statements).

To create a function, you give it a name and then write the statments neede to achieve its task inside the curly braces.
This is known as a **_function declaration_**

**Example for declaring a function**

```javaScript
var msg = 'Sign up to receive our newsletter for 10% off!';

function updateMessage() {
  // Some Codes (Script) that will excuted if the function was called;
}

// Thats how we call a function
updateMessage();

  //  width and heigth called the function parameters.
function getArea(width, height){
  return width * height;

// function that returns a single value;
function getArea (width, height){
  var area = width * height;
  return area;
}
// this is how we call a function with arguments
  getAre(3,5);


// This function returns multiple values in an array.
function getSize(width,height,depth){
  var area = width * height;
  var volume = width * height * depth;
  var sizes = [area,volume];
  return sizes;
}

// Fucntion expression you can decleare a function to a vairable and called this fucntion by the variable name.
var area = function(width,height){
  return width * height;
};

var size = area(3,4);

// Immediately Invoked Function.

var area = (function (){
var width = 3;
var height = 2;
return width * height;
}());

// The final () after the closin curly braces of the code block interpreter to call the function immediately.
// The groping operators are paerntheses there to ensure the intepreter treats this as an expression.
}
```

### Note:

- Parameters : whent the function was declared, you can see the word (width, height) inside the curly braces of the function, those words act like vairables.

- Arguments : When the function was called, the values that was requierd form the function (3,5) are called arguments.

### Viriable scope

The location where you declare a varable will affect where it can be used within you code, if you declare it within a function, it can only be used within that function. This is known as the variable's scope.

- function-level variable : Called for the variable if it was created in a function , and it has a function-level-scope.
  - if the function runs twice, the variable can have different values each time.
  - Two different function can use variables with the same name without any kind of naming conflict.
- global variable : Called for the variable if it was created outside a function, it can be used anywhere within the script,

### Naming collisions.

if an HTML Page uses two JavaScript files, and both hava a global varable with the same name, it can cause errors, **_because the global variable is stored in the momery as long as the web page is loaded, but the fucntion-level variables are stored as the function run, and the momery will delete them after the script in the function is finished_** Imagine a page using these two scripts:

```javascript
function showPlotSize() {
  var width = 3;
  var height = 2;
  return "Area: " + width * height;
}
var msg = showPlotSize();
```

```javascript
function showGardernSize() {
  var width = 12;
  var height = 25;
  return width * height;
}
var msg = showGardenSize();
```

If you notice that width and height varaibles are declared as local variables (function-level), so there is no name conflict between the two scripts, On the other hand the variable msg was declared as a global variable so here we will hava a naming conflict.

---

## Article: “6 Reasons for Pair Programming”.

Iterative loops. Code reviews. Fast feedback. Error checking and linting. These are software engineering practices that have proven to dramatically improve the quality of code developers produce. you can get these practices while typing code line by line, by using something called **pair programming**.

### How dose pair programming work?

In this technique there is two roles : the Driver and the Navigator.

The Driver is the programes who is typing and the only ine whose hands are on the keyboard, handling the coding, manages the text editor, switching files,version control and codeing.

The Navigator uses their words to suide the Driver but sode not provide ant direct input to the computer, thinks about the big picture, what comes next, how an algotith might be converted in to code, while scanning for typos or bugs.

### Why pair Program?

while learning a new language you need to have four skills, Listening, Speaking, Reading,and Writing.

Developers explain out what the code should bt, listen to others' guidance, read code that others have written, and write code themselves.

1. Greate efficieny.

   If you think about it pari programming takes longer time to finish the job, because ther is two people focus n the same code base, but it is easier to catch mistakes in the making, so it produces higher quality code that doesn't require later effort in troubleshooting and debugging, so in the long term it's often actually more efficient than two people working on separate features.

2. Engaged collaboration.

   When two programmers focus on the same code, the experience is more engaging and both programmers are more focused than if they were working alone. When developers pair program, they rely more on each other and can often find a solution together without needing to ask for additional help.

3. Learning from fellow students.

   The developers in a pairing have different skill sets. If one programmer is more experienced in a certain skill, they can teach a student who is less familiar with that area.

4. Social Skills.

   Pair programming is great for improving social skills. When working with someone who has a different coding style, communication is key. This can become more difficult when two programmers have different personalities.

5. Job interview readiness.

   A common step in many interview processes involves pair programming between a current employee and an applicant, either in person or through a shared screen. They will carry out exercises together, such as code challenges, building a project or feature, or debugging an existing code base. By doing so, companies can get a better feel for how an applicant will fit into the team and their collaboration style.

6. Work environment readiness.

   Many companies that utilize pair programing expect to train fresh hires from CS-degree programs on how they operate to actually deliver a product. Code Fellows graduates who are already familiar with how pairing works can hit the ground running at a new job, with one less hurdle to overcome
