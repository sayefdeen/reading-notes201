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
