# Class 09 Reading Notes.

[HOME](https://sayefdeen.github.io/reading-notes201/)

## Chapter 7 HTML Book Forms.

HTML borrows the concept of a form to refer to different elements that allow you to collect information from visitors to your site, such as the search box in Google, it gives the user the ability to search, also when registering as a member of a website.

### Form Contols.

There are several types of from controls that you can use to collect information from visitors to your site.

1.  Adding Text

    - Text input <input type="text" style="float: right">

    - password input <input type="password" style="float: right">

2.  Submitin forms

    - Submit button <input type="submit" style="float: right">

    - Uploding files <input type="file" style="float: right">

3.  Making Choices

    - Radio choices <input type="radio" style="float: right"><input type="radio" style="float: right"><input type="radio" style="float: right">

    - Checkboxes <input type="checkbox" style="float: right"><input type="checkbox" style="float: right"><input type="checkbox" style="float: right">

    - Drop down boxes
    <select style="float: right;">
    <option> item1 </option>
    <option> item2 </option>
    <option> item3 </option>
    </select>

---

## How Forms Work.

- A user fills in a form and then presses a button to submit the inforamtion to the server

- The server processing the infromation using a prgramming langauge such as C#, PHP, or Java. ti may also store the information in a database

- The server creates a new page to send back to the browser based on the information received

The server needs to know which piece of inputted data corresponds wiht which form element, because it has several form controls.

Information is sent from the browser to the server using **name/value** pairs.

Example:

```html
<html>
  <head>
    <title>Forms</title>
  </head>
  <body>
    <form action="http://www.example.com/review.php" method="get">
      <fieldset>
        <legend>
          Your Details:
        </legend>
        <label>
          Name:
          <input type="text" name="name" size="30" maxlength="100" />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" size="30" maxlength="100" />
        </label>
        <br />
      </fieldset>
      <br />
      <fieldset>
        <legend>
          Your Review:
        </legend>
        <p>
          <label for="hear-about">
            How did you hear about us?
          </label>
          <select name="referrer" id="hear-about">
            <option value="google">Google</option>
            <option value="friend">Friend</option>
            <option value="advert">Advert</option>
            <option value="other">Other</option>
          </select>
        </p>
        <p>
          Would you visit again?
          <br />
          <label>
            <input type="radio" name="rating" value="yes" />
            Yes
          </label>
          <label>
            <input type="radio" name="rating" value="no" />
            No
          </label>
          <label>
            <input type="radio" name="rating" value="maybe" />
            Maybe
          </label>
        </p>
        <p>
          <label for="comments">
            Comments:
          </label>
          <br />
          <textarea rows="4" cols="40" id="comments"> </textarea>
        </p>
        <label>
          <input type="checkbox" name="subscribe" checked="checked" />
          Sign me up for email updates
        </label>
        <br />
        <input type="submit" value="Submit review" />
      </fieldset>
    </form>
  </body>
</html>
```

<html>
  <head>
    <title>Forms</title>
  </head>
  <body>
    <form action="http://www.example.com/review.php" method="get">
      <fieldset>
        <legend>
          Your Details:
        </legend>
        <label>
          Name:
          <input type="text" name="name" size="30" maxlength="100" />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" size="30" maxlength="100" />
        </label>
        <br />
      </fieldset>
      <br />
      <fieldset>
        <legend>
          Your Review:
        </legend>
        <p>
          <label for="hear-about">
            How did you hear about us?
          </label>
          <select name="referrer" id="hear-about">
            <option value="google">Google</option>
            <option value="friend">Friend</option>
            <option value="advert">Advert</option>
            <option value="other">Other</option>
          </select>
        </p>
        <p>
          Would you visit again?
          <br />
          <label>
            <input type="radio" name="rating" value="yes" />
            Yes
          </label>
          <label>
            <input type="radio" name="rating" value="no" />
            No
          </label>
          <label>
            <input type="radio" name="rating" value="maybe" />
            Maybe
          </label>
        </p>
        <p>
          <label for="comments">
            Comments:
          </label>
          <br />
          <textarea rows="4" cols="40" id="comments"> </textarea>
        </p>
        <label>
          <input type="checkbox" name="subscribe" checked="checked" />
          Sign me up for email updates
        </label>
        <br />
        <input type="submit" value="Submit review" />
      </fieldset>
    </form>
  </body>
</html>

---

## Chapter 14 HTMl Book Lists,Tables,and Forms.

There are several CSS properties that were created to work with specific types ofHTML elements.

### Lists.

1. Bullet Point Style.

`list-syle-type` : this property aloows you to control the shape or style of a bullet point.

- Unordered List (ul) :
   <ul>
   <li style="list-style-type: none">none</li>
   <li style="list-style-type: disc">disc</li>
   <li style="list-style-type: circle">circle</li>
   <li style="list-style-type: square">square</li>
   </ul>

- ordered List (ol) :

  - decimal (1 2 3 4 5)

  - decimal-leading-zero (01 02 03)

  - lower-alpha (a b c)

  - Upper-alpha (A B C)

  - Lower-romain (i. ii. iii.)

  - Upper-romain (I. II. III.)

2. `list-style-image` : You can specify an image to act as a bullet point using the list-style-image property.

```css
ul {
  list-style-image: url("images/star.png");
}
li {
  margin: 10px 0px 0px 0px;
}
```

3. `list-style-position` : Lists are indented into the page by default and the list-style-position property indicates whether the marker should appear on the inside or the outside of the box containing the main points.

### Tables.

|        Peroperties        |                                     Description                                     |
| :-----------------------: | :---------------------------------------------------------------------------------: |
|           width           |                            to set the width of the table                            |
|          padding          |       to set the space between the border of each table cell and its content        |
|      text-transform       |              to convert the content of the table headers to uppercase               |
| letter-spacing, font-size |            to add additional styling to the content of the table headers            |
| border-top, border-bottom |                  to set borders above and below the table headers                   |
|        text-align         | to align the writing to the left of some table cells and to the right of the others |
|     background-color      |            to change the background color of the alternating table rows             |
|          :hover           |              to highlight a table row when a user's mouse goes over it              |

If you have empty cells in you table you can choose there display.

- show : This shows the borders of any empty cells

- hide : This hides the borders of any empty cells.

- inherit: If you have one table nested inside another, the inherit value instructs the table cells to obey the rules of the containing table.

---

### Forms

#### Aligning from controls.

Labels for form elements are often different lengths, which means that the form controls will not appear in a straight line. This is demonstrated in the example on the right (without CSS applied to the form controls).

```html
<form action="example.php" method="post">
  <div>
    <label for="name" class="title">Name:</label>
    <input type="text" id="name" name="name" />
  </div>
  <div>
    <label for="email" class="title">Email:</label>
    <input type="email" id="email" name="email" />
  </div>
  <div>
    <span class="title">Gender:</span>
    <input type="radio" name="gender" id="male" value="M" />
    <label for="male">Male</label>
    <input type="radio" name="gender" id="female" value="F" />
    <label for="female">Female</label><br />
  </div>
  <div>
    <input type="submit" value="Register" id="submit" />
  </div>
</form>
```

---

## Chapter 6 Js Book Events.

When you browse the web, your browser registers different types of events, it's the browser's way of saying " That Just Happend" Your scipt can then respond to these events, scripts often resopnd to these events by updating the content of the web page (via the Document Pbject Model).

### Different Types Of Events.

UI Events : User Interface Events.

| Event  |                           Description                            |
| :----: | :--------------------------------------------------------------: |
|  load  |                  Web page has finished loading                   |
| unload |                      Web page is unloading                       |
| error  | Browser encounters a JavaScript error or an assest doesn't exist |
| resize |                 Browser window has been resized                  |
| scroll |              User has scrolled up or sown the page               |

KeyBoard Events.

|  Event   |         Description         |
| :------: | :-------------------------: |
| keydown  |  User first presses a key   |
|  keyup   |     User releases a key     |
| keypress | Character is being inserted |

Mouse Events.

|   Event   |                   Description                    |
| :-------: | :----------------------------------------------: |
|   click   |            User clicks in an elements            |
|  dbclick  |        User double clicks in an elements         |
| mousedown |  User press a mouse button while in an element   |
|  mouseup  | User releases a mouse button while in an element |
| mousemove |    User moves the mouse (not in touch screen)    |
| mouseover |       User moves the mouse over an element       |
| mouseset  |       User moves the mouse off an element        |

Form Events.

| Event  |                     Description                      |
| :----: | :--------------------------------------------------: |
| input  |      Value in any `<input>` element has changed      |
| change | Value in select box,checkbox,or radio button changes |
| submit |                User submits the form                 |
| reset  |         User clicks on a form's reset button         |
|  cut   |         User cuts content from a from filed          |
|  copy  |        User copies content from a from filed         |
| paste  |         User paste content into a from filed         |
| select |        User selects some text in a form filed        |

---

## How Events Trigger JavaScipt code.

When the user interacts with the HTML on a web page, there are three steps involved in getting it to trigger aome JavaScript code. These three step known as **even handling**.

1. Select the element (node) you want the script to respond to respond to.

2. Indicate which event on the selectd node will trigger the response. Programming call this **binding** an event to a DOM node

3. State the code you want to run when the event occurs. when the event occurs, on a specified element, it will trigger a function, it could be named or make it anonymous function.

### Three ways to bind an event to an element.

1. HTML Event Handlers.

<p style="color: red; text-transform: uppercase;"> Please Note this approach is now considered bad practice</p>

Early versions of HTMl included a set of attributes that could respond to events on the element they were added to, The attribute names matched the event names, their values called the function that was to run when that event occurred.

```html
<form method="post" action="https://www.example.org/register">
  <label for="username"> Create a username:</label>
  <input type="text" id="username" onblur="checkUsername()" />
</form>

<!-- onblur : triggered when the user leaves the element/ it will call the function called checkUserName() -->
```

2. Traditional DOM Event Handlers.

All modern browsers understand this way of creating an event handler, but you can only attach one function to each event handler.

```javascript
element.onevent = functionName;

function checkUserName() {
  // code to check user name length
}
var el = document.getElementById("username");
el.onblur = checkUserName;
//  as you can see the () parentheses are omitted, because we want the function to be called by the event. if the parentheses was checkUserName(); the functon will be called even if the event wasn't triggered
```

3. Event Listeners.

Event listeners are a more recent approach to handling events, they can deal with more than one funciton at a time, but they are not supported in **_older browsers_**.

```javascript
element.addEventListener('event',functionName,Boolean);
// Boolean indicate something called capture, and is usually set to false.
function checkUserName(){
  // code to check user name length
}
var el = document.getElementById("username");
el.addEventListener('blur',checkUserName,false);

// Anonymous function.

el.addEventListener('blur',funcntion(){
  // code that will be triggered by the event.
},false)
```

Browser Support: Internet Explorer 8 and earlier versions of IE do not support the `addEventListener()` method, but they do support a method called `attachEvent()`.

<p style="color: green"> Unlike the HTML and traditional DOM event handlers, when you specify the name of the event that you want to react to, the event name is not preceded by the word <b>on</b> </p>
