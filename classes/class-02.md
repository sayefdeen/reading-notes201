# Read02 Reading Notes.

[HOME](https://sayefdeen.github.io/reading-notes201/)

## Chapter 2 Text.

---

When creating a web page, you add tags (known as markup) to the content of the page. These tags provide exxtra meaning and allow browsers to show users the appropriate structure for the page.

- Structural markup : the elemnts that you can user to describe both headings and paragraphes.

- Semantic markup : which provides extra information; such as where emphasis is placed in a sentence, that something you have written is a quotation (and who said it), the meaning of acronyms, and so on.

|      Tags      |      Name       |                                                 Usage                                                 |
| :------------: | :-------------: | :---------------------------------------------------------------------------------------------------: |
| `<h1> to <h6>` |    Headings     |                 using to tell the browesr that the test between the tags is a header                  |
|     `<p>`      |   Paragraphs    | To create a paragraph, surroung the words that make up the paragraph with opening tag and closing tag |
|     `<b>`      |      bold       |                       The character between these tags are shown <br>bold</br>                        |
|     `<i>`      |     italic      |                        he character between these tags are shown <i>italic</i>                        |
|    `<sup>`     |   superscript   |                              it shows charachter like this 2<sup>2</sup>                              |
|    `<sub>`     |    subscript    |                              it shows charachter like this 2<sub>2</sub>                              |
|    `<br/>`     |      break      |                         make a new line it it was inserted infront of any tag                         |
|    `<hr/>`     | horizontal rule |                                           put a line <hr/>                                            |
|   `<strong>`   |     strong      |                      shows that the content is strong <strong>important</strong>                      |
|     `<em>`     |    emphasis     |                   indicates emphasis that subtly changes the meaning of a sentence.                   |
| `<blockquote>` |   block qoute   |                      is used for longer quotes that take up an entire paragraph                       |
|     `<q>`      |     quotes      |                        is used for shorter quotes that sit within a paragraph                         |
|    `<abbr>`    |  abbreviation   |                A title attribute on the opening tag is used to specify the full term.                 |
|    `<cite>`    |    citation     |            When you are referencing a piece of work such as a book, film or research paper            |
|    `<dfn>`     |    defining     |                            The first time you explain some new terminology                            |
|  `<address>`   |     address     |                        to contain contact details for the author of the page.                         |
|    `<ins>`     |    inserted     |                        to show content that has been inserted into a document                         |
|    `<del>`     |     delete      |                         can show text that has been deleted from a document.                          |
|     `<s>`      |                 | element indicates something that is no longer accurate or relevant (but that should not be deleted).  |

### Example

```html
<html>
  <head>
    <title>Text</title>
  </head>
  <body>
    <h1>The Story in the Book</h1>
    <h2>Chapter 1</h2>
    <p>
      Molly had been staring out of her window for about an hour now. On her
      desk, lying between the copies of <i>Nature</i>, <i>New Scientist</i>, and
      all the other scientific journals her work had appeared in, was a well
      thumbed copy of <cite>On The Road</cite>. It had been Molly's favorite
      book since college, and the longer she spent in these four walls the more
      she felt she needed to be free.
    </p>
    <p>
      She had spent the last ten years in this room, sitting under a poster with
      an Oscar Wilde quote proclaiming that
      <q>Work is the refuge of people who have nothing better to do</q>.
      Although many considered her pioneering work, unraveling the secrets of
      the llama <abbr title="Deoxyribonucleic acid">DNA</abbr>, to be an
      outstanding achievement, Molly <em>did</em> think she had something better
      to do.
    </p>
  </body>
</html>
```

## Chapter 10 Introduction CSS.

---

The key to under standing how CSS works is to imagine that there is an invisible box aroung every HTML element, CSS allows you to create rules that control the way each individual box (and the contents of theat box) is presented.

CSS works by associating rules with HTML elements. These rules govern how the content of specified elements should be displayed. A CSS rule contains two parts: a selector and a declaration.

```css
p {
  font-family: Arial;
  color: red;
}
```

- p is the selector
- font-family : called the property.
- Arial : called the value.

**How can you connect CSS into HTML document?**

you have three ways to connect Css files to HTML documents.

- Using External CSS By using `<link>` tag with `href` attribute.
  ```html
  <link href="css/styles.css" type="text/css" rel="stylesheet" />
  ```

* Using internal CSS By using the `<style>` tag in HTML document.

      ```html
      <!DOCTYPE html>
      <html>
      <head>
      <title>Using Internal CSS</title>
      <style type="text/css">
        body {
          font-family: arial;
          background-color: rgb(185, 179, 175);
        }
        h1 {
          color: rgb(255, 255, 255);
        }
      </style>

    </head>
    <body>
      <h1>Potatoes</h1>
      <p>
        There are dozens of different potato varieties. They are usually described
        as early, second early and maincrop.
      </p>
    </body>
  </html>

---

### CSS selectors.

| Name                      | Symbol        | Targets                                                                                    |
| ------------------------- | ------------- | ------------------------------------------------------------------------------------------ |
| Universal selector        | `*{}`         | Target all the elements within the page                                                    |
| Type Selector             | `h1,h2,h3 {}` | Target the `<h1>`,`<h2>`,`<h3>` elements                                                   |
| Class Selector            | `.note {}`    | Target each elemnt that hade `class="note"` as a class                                     |
| ID Selector               | `#note {}`    | Target each elemnt that hade `id="note"` as a class                                        |
| Child Selector            | `li>a {}`     | Target each `<a>` that it is inside a `<li>` tag                                           |
| Descendant Selector       | `p a {}`      | Target each `<a>` that it is inside a `<p>` tag even there is another elemnts between them |
| Adjacent Sibling Selector | `h1+p {}`     | Target the **first** `<p>` element after any `<h1>` element (But no other elements)        |
| General Sibling Selector  | `h1~p {}`     | if you had two `<p>` elements after any `<h1>` element this rule apply to both             |

---

## Chapter 2 Basic JavaScript Instructions.

A script is a series of instructions that a computer can follow one-by-one, Each individual instruction or step is known as a statement, and it should end with a semicolon, which tells the JavaScript interperter when a step in over, indication that it should move to the next step.

**What is a variable?**: A scripte will have to temporarily store the bits of information it needs to do its job. It can store this data in variables.

```javascript
var quantity = 3;
```

- var : variable keyword
- quantity : variable name;
- = : Assignment operator.
- 3 : value

### Data types.

- Numeric Data type

```javascript
var number1 = 0.75;
```

- String Sata Type

```javascript
var string1 = "Hello World";
```

- Boolean Data type

```javascript
var result = true;
var result1 = false;
```

### Rules for Naming Variables.

1.  the name must begin with a letter, dollar sign (\$) or an underscore(\_), **Not with a number**
2.  The name can contain numbers, dollar sign, or an underscore, **But it must not include a dash (-) of a period (.)**
3.  You can't user a [reserved](https://www.w3schools.com/js/js_reserved.asp) keywords in javascript.
4.  All vairables are case sensitive.
5.  Use a name that describe the kind on information you want to store.
6.  user camelCase if the vairable is more than one word.

## Arrays.

an array is a special type of variable. It doesn't just store one calue, it stores a list of values.

Creating Your first Array.

```javascript
var colors;
colors = ["red", "black", "blue"];
colors[0]; // this wll gives you the first value of this array 'red'
colors[1] = "yellow"; // this will change the second value form black to yellow
```

Values in an array are accessed as if they are in a numberd list, it is important to know that the numering of this list starts at **zero** Not one.

## Operators.

|      Name      | Operator |                   Usage                    | Exapmle      | Result |
| :------------: | :------: | :----------------------------------------: | ------------ | ------ |
|    Addition    |    +     |             adding two numbers             | 10+5         | 15     |
|  Subtraction   |    -     |            subtract two numbers            | 10-5         | 5      |
|    division    |    /     |            divides two numbers             | 10/5         | 2      |
| Multiplication |    \*    |           multiplies two numbers           | 10\*5        | 50     |
|   Increment    |    ++    |       Adds ont to the current number       | `i=10` , i++ | 11     |
|   Decrement    |    --    |     Subtract one to the current number     | `i=10` , i-- | 9      |
|    Modulus     |    %     | Divides tow values and return the reminder | 10%3         | 1      |

---

## Chapter 4 Decisions and Loops.

there are often several places in a script where decisions are mae that determine which lines of code should be run next, there are two components to a decision , An expression is evaluated, which returns a value and a conditional statment says what to do in a given situation.

```javascript
var score = 55;
if (score > 50) {
  document.write("Passed");
} else {
  document.write("Try again");
}
```

here if the score is larger than 50 the condition will become true therefor the next code will be `document.write('Passed')` but if the score was less than 50 the condition will become false therefor the next code will bb `document.write('Try again')`;

| Symbol |         Name          |                                   Job                                   |
| :----: | :-------------------: | :---------------------------------------------------------------------: |
|   ==   |      Is Equal To      |             compares two values to see if they are the same             |
|   !=   |    Is Not Equal To    |           compares two values to see if they are not the same           |
|  ===   |    Strict Equal To    |   compares two values and cheack there data type if they are the same   |
|  !==   |  Strict Not Equal To  | compares two values and cheack there data type if they are not the same |
|   >    |      Grater than      |      checks if the number on the left is greater than on the right      |
|   <    |       Less than       |       checks if the number on the left is less than on the right        |
|   >=   | greater than or equal | checks if the number on the left is greater than or equal on the right  |
|   <=   |  less than or equal   |   checks if the number on the left is less than or equal on the right   |

In any condition, there is usually one **operator** and two **operands**, The operands are placed on each side of the operator, they can be values of variables, You often see expressions enclosed in brackets.

`(score >= Pass)`

- `()` Enclosing brackets
- `score` Operand
- `pass` Operand
- `>=` Conditional Operator

`((5 < 2 ) && (2 >= 3))`

- `(5 < 2)` Expression 1
- `(2 >= 3)` Expression 2
- `&&` Logical Operator

| Condition 1 | Logical Operator | Condition 2 | Result |
| ----------- | ---------------- | ----------- | ------ |
| True        | `&&`             | True        | True   |
| True        | `&&`             | False       | False  |
| False       | `&&`             | False       | False  |
| True        | `||`             | True        | True   |
| True        | `||`             | False       | True   |
| False       | `||`             | False       | False  |
