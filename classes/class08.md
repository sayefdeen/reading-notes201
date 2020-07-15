# Class 08 Reading Notes.

[HOME](https://sayefdeen.github.io/reading-notes201/)

## Chapter 15 HTML Layout.

We already talked about chapter 15 in [class-04](https://sayefdeen.github.io/reading-notes201/classes/class-04), page 358-364 but we will continue where we lift.

1. Noraml Flow : `position : static;` In normal flow, each block-level element sits on top of the next one. Since this is the default way in which browsers treat HTML elements, you do not need a CSS property to indicate that elements should appear in normal flow

2. Relative positions : `position : relativ;` Relative positioning moves an element in relation to where it would have been in normal flow. by using the offset properties (top or bottom and left or right).

3. Absolute positionsing : `position:absolute;` When the position property is given a value of absolute, the box is taken out of normal flow and no longer affects the position of other elements on the page

4. Fixed positiosing : `position:fixed;` Fixed positioning is a type of absolute positioning that requires the position property to have a value of fixed.

5. OverLaping Elements: `z-index;` When you use relative, fixed, or absolute positioning, boxes can overlap. If boxes do overlap, the elements that appear later in the HTML code sit on top of those that are earlier in the page, you can use z-index to control which element sits on top. from (0-10)

6. Floating Elements : `float` The float property allows you to take an element in normal flow and place it as far to the left or right of the containing element as possible.

---

## Screen Sizes, Screen resolution , Page sizes

Different visitors to your site will have different sized screens that show different amounts of information, so your design needs to be able to work on a range of different sized screens, same to resolution and page sizes, designers often try to create pages of around **960-1000** pixels wide.

To overcome these defferences, there is alot of layouts theat designers use, each one has its own advantages and disadvantages.

1. Fixed width layout.

Fixed width layout designs do not change size as the user increases or decreases the size of their browser window. Measurements tend to be given in pixels, for examples :  
 `widht : 980px`

- Advantages

  - Pixel values are accurate at controlling size and positioning of elements

  - The designer has far greater control over the appearance and position of items on the page than with liquid layouts.

  - You can control the lemghts of lines of text regadless of the size of the user's wimdow.

  - The size of an image will always remain the same relative to the rest of the page.

- Disadvantages

  - You can end up with big gaps around the edge of a page.

  - If the user's screen is a much higher resolution thatn the designer's screen, the page can look smaller and text can be harder to read.

  - if a user increases font sizes, text might not fit into the allotted sapces.

  - The deign works best on devices that have a site of resolution similar to that of desktop or laptop computers.

  - The page will often take up more vertical spaces than a liquid layout with the same content.

1. Liquid layout.

Liquid layout designs stretch and contract as the user increases or decreases the size of their browser window. They tend to use percentages, for example `width:90%`

- Advantages

  - Pages expand to fill the entire browser window so there are no spaces around the page on a large screen.

  - If the user has a small window, the page can contract to fit it without the user having to scroll to the side.

  - The design is tolerant of users setting font sizes larger than the designer intended (because the page can stretch).

- Disadvantages

  - If you do not control the width of sections of the page then the design can look very different than you intended, with unexpected gaps around certain elements or items squashed together.

  - If the user has a wide window, lines of text can become very long, which makes them harder to read.

  - If the user has a very narrow window, words may be squashed and you can end up with few words on each line.

  - If a fixed width item (such as an image) is in a box that is too small to hold it (because the user has made the window smaller) the image can overflow over the text.

---

## CSS Frameworks.

CSS frameworks aim to make your life easier by providing the code for common tasks, such as creating layout grids, styling forms, creating printer-friendly versions of pages and so on. You can include the CSS framework code in your projects rather than writing the CSS from scratch.

- Advantages.

  - They save you from repeatedly eriting code for the same task.

  - The will have been tested across different browser versions (which helps avoid browser bugs).

- Disadvantage.

  - They often require you to use class names in your HTML code that only control the presentation of the page rather than describe its content.

  - In order to satisfy a wide variety of needs, they often contain more code than you need for your particular web page (commonly referred to as code "bloat").

### Multiple Style Sheets.

1. `@import`

Some web page authors splits up their CSS style rules into separate style sheets.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Multiple Style Sheets - Import</title>
    <link rel="stylesheet" type="text/css" href="css/styles.css" />
  </head>
  <body>
    <!-- HTML page content here -->
  </body>
</html>
```

```css
@import url("tables.css");
@import url("typography.css");
body {
  color: #666666;
  background-color: #f8f8f8;
  text-align: center;
}
#page {
  width: 600px;
  text-align: left;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid #d6d6d6;
  padding: 20px;
}
h3 {
  color: #547ca0;
}
```

In this example , we used one `<link>` element in the HTML page to link to a style page called style.css , This stylesheet then uses the `@import` rule to import the typography.css and table.css files.

<p style= "color: red; text-transform : capitalize; font-size:20px"> If a styesheet uses the @import rule, it should appear before  the other rules.</p>

2. `<link>` Element.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Multiple Style Sheets - Link</title>
    <link rel="stylesheet" type="text/css" href="css/site.css" />
    <link rel="stylesheet" type="text/css" href="css/tables.css" />
    <link rel="stylesheet" type="text/css" href="css/typography.css" />
  </head>
  <body>
    <!-- HTML page content here -->
  </body>
</html>
```

As you can see, we had multible `<link>` elements pointing in different CSS pages.

<p style= "color: red; text-transform : capitalize; font-size:20px">As with all style sheets, if two rules apply to the same element then rules that appear<span style="text-decoration : underline; font-weight : bold"> later in a document</span> will take precedence over previous rules. </p>
