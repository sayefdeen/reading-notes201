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
