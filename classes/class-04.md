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
