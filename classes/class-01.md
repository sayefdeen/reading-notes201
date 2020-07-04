# Class-01 Notes.

[HOME](https://sayefdeen.github.io/reading-notes201/)

## 1. How the Web Works?

when you visit a website, the web server hosting that site cuold be anywhere in the world. In order for you to fine the location of the web server, your browser will first conncet to a domain Name System (DNS) server.

1. when you connect to the web, you do so via an internet service provider (ISP), you type the domain name or web address into your browser.

2. Your computer contacts a network of servers called Domain Name System (DNS) servers. These act like phone books; they tell your computer the IP address associated with the requested domain name.

3. The unique number that the DNS server returns to your computer allows your browser to contact the web server that hosts the website you requested.

4. The web server then sends the page you requested back to your web browser.

## 2. Chapter 1 Structure

In this chapter you will understand structure, learning about markup, tags and elements.

on each story you read in newspaper, there will be a headline, some text, and possibly some images. if the article is a long piece there may be a subheadings that split the story into seperate sections or qoutes from those involved. Structure helps readers understand the storied in the newspaper.

```html
<html>
  <body>
    <h1>This is the main Heading</h1>
    <p>This text migh be an intrudoction to the rest of the page</p>
    <h2>This is a Sub-Heading</h2>
    <p>
      Many long articles have sub-Headings so to help you follow the structure
      of what is being written
    </p>
    <h2>Another Sub- Heading</h2>
    <p>Here you can see another sub-heading</p>
  </body>
</html>
```

The HTML code (blue) is made up of characters that live inside angled brackets-these are called HTML elements. these elements are usually made of two tags `<>` opening tag and `</>` closing tag. Tags act like containers, they tell you something about the information that lies between their opening and closing tags.

**Closer Look at tags**

```html
<p lang="en-us">Paragraph In English</p>
```

- `<p>` : opening tag
- `</p>`: closing tag
- `lang`: Arrtibute Name
- `en-us` : Attribute value

* `<body>` : Everything inside this element is shown isnide the main browser window
* `<head>` : This contain information about the page you will usually fine `<title>` element inside it, this tag appear above `<bodt>` tag.
* `<title>` this contain the title of the page which shown in the top of the browser.

### How to create a web page?

- open NotePad.
- copy and paste the structure above.
- save you file as a html file.
- open the file in your browser.

### How to see the structure of the page?

Go to any web page you want to see its code, then right click in any empty space, then click in **_View Page source_**.

## 3. Chapter 8 Extra Markup.

Since the web was first created, there have been several different versions of HTML, Each new version was designed to be an improvement on the last (with new elements and attributes added and older code removed).

1. HTML4 Released 1997, had some presentational elements to control the appearance of pages, authors are not recommended to use them any more. (Examples include the `<center>` element for centering content on a page, `<font>` for controlling the appearance of text, and
   `<strike>` to put a line through the text all of these can be achieved with CSS instead.)

2. In 1998, a language called XML was published. Its purpose was to allow people to write new markup languages. Since HTML was the most widely used markup language around, it was
   decided that HTML 4 should be reformulated to follow the rules of XML and it was renamed
   XHTML. This meant that authors had to follow some new, more strict rules about writing
   markup. For example:

- Every element needed a
  closing tag (except for empty
  elements such as `<img/>`).
- Attribute names had to be in lowercase.
- All attributes required a value, and all values were to be placed in double quotes
- Deprecated elements should no longer be used.
- Every element that was opened inside another
  element should be closed inside that same element.

3. HTML5 Released 2000,In HTML5, web page authors do not need to close all tags, and
   new elements and attributes will be introduced. At the time of writing, the HTML5 specification
   had not been completed, but the major browser makers had started to implement many of
   the new features, and web page authors were rapidly adopting the new markup.

### Examples Of Tags.

- DOCTYPES : `<!DOCTYPE html>` Because there have been several versions of HTML, each
  web page should begin with a DOCTYPE declaration to tell a browser which version of HTML the page is using (although
  browsers usually display the page even if it is not included).

- Comments In HTML : `<!-- -->` If you want to add a comment to your code that will not be
  visible in the user's browser, you
  can add the text between these
  characters:
  `<!-- comment goes here -->`

- ID attribute : `id="id_example"` Every HTML element can carry the id attribute. It is used to uniquely identify that element
  from other elements on the page. Its value should start with a letter or an underscore (not a number or any other character).

- Class attribure : `class="class_example"` Every HTML element can also carry a class attribute. Sometimes, rather than uniquely
  identifying one element within a document, you will want a way to identify several elements
  as being different from the other elements on the page.

- Block elements : Some elements will always
  appear to start on a new line in the browser window. These are known as block level elements.
  such like `<h1-h6> <p> <ul> <li>`

- Inline elements : Some elements will always
  appear to continue on the same line as their neighbouring elements. These are known as
  inline elements. such like `<a> <b> <em> <img>`

- Grouping Text & elements in a block : `<div>` element allows you to group a set of elements together
  in one block-level box.

- Grouping Text & elements inline : The `<span>` element acts like
  an inline equivalent of the `<div>`
  element. It is used to either

      *  Contain a section of text where there is no other suitable element to differentiate it from its surrounding text

      * Contain a number of inline elements

- IFRAMES `<iframe>` : An iframe is like a little window that has been cut into your
  page — and in that window you can see another page. The term iframe is an abbreviation of inline frame.

### Escape Characters

There are some characters that are used in and reserved by HTML code

| Characters |         Name         |        HTML         |
| :--------: | :------------------: | :-----------------: |
|     <      |    Less-than sign    |   `&lt;` `&#60;`    |
|     >      |  Greater-than sign   |   `&gt;` `&amp;`    |
|     &      |      Ampersand       |   `&amp;` `&#38;`   |
|     "      |    Quotation mark    |  `&quot;` `&#34;`   |
|     ¢      |      Cent sign       |  `&cent;` `&#162;`  |
|     £      |      Pound sign      | `&pound;` `&#163;`  |
|     ¥      |       Yen sign       |  `&yen;` `&#165;`   |
|     ¤      |      Euro sign       | `&euro;` `&#8364;`  |
|     ©      |   Copyright symbol   |  `&copy;` `&#169;`  |
|     ®      | Registered trademark |  `&reg;` `&#174;`   |
|     ™      |      Trademark       | `&trade;` `&#8482;` |
|     ‘      |  Left single quote   | `&lsquo;` `&#8216;` |
|     '      |  Right single quote  | `&rsquo;` `&#8217;` |
|     “      |  Left double quotes  | `&ldquo;` `&#8220;` |
|     ”      | Right double quotes  | `&rdquo;` `&#8221;` |
|     ×      | Multiplication sign  | `&times;` `&#215;`  |
|     ÷      |    Division sign     | `&divide;` `&#247;` |

|

Exapmle

```html
EXTRA MARKUP 196
<!DOCTYPE html>
<html>
  <head>
    <meta
      name="description"
      content="Telephone, email
and directions for The Art Bookshop, London, UK"
    />
    <title>Contact The Art Bookshop, London UK</title>
  </head>
  <body>
    <div id="header">
      <h1>The Art Book Shop</h1>
      <ul>
        <li><a href="index.html">home</a></li>
        <li><a href="index.html">new publications</a></li>
        <li class="current-page">
          <a href="index.html">contact</a>
        </li>
      </ul>
    </div>
    <!-- end header -->
    <div id="content">
      <p>Charing Cross Road, London, WC2, UK</p>
      <p><span class="contact">Telephone</span> 0207 946 0946</p>
      <p>
        <span class="contact">Email</span>
        <a href="mailto:books@example.com"> books@example.com</a>
      </p>
      <iframe
        width="425"
        height="275"
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
        src="http://maps.google.co.uk/maps?f=q&amp;
source=s_q&amp;hl=en&amp;geocode=&amp;
q=charing+cross+road+london&amp;output=embed"
      >
      </iframe>
    </div>
    <!-- end content -->
    <p>&copy; The Art Bookshop</p>
  </body>
</html>
```

## 4. Chapter 17 HTML5 Layout

For a long time, web page authirs used `<div>` elements to group together related elements on the page (such as the elements that form a header,and article, footer of sidebar) authors used class of id attributes to indicate the role of the `<div>` elemts in the structure of the page.

HTML5 introduces a new set of elements that allow you to divide up the parts of a page. The names of these elemnts indicate the kind of content you will find in them.

- `<header>` : The main header that appear in the top of the page.

- `<footer>` : The main footer that appear in the bottom of the page.

- `<nav>` : this element is used to contain the major navigational blocks on the site such as the primary site navigation.

- `<article>` : this element acts as a container for any section of a page that could stand alone and potentially be syndicated.

- `<aside>` : this element has two purposes, depending on whether it is inside an `<article>` element or not.

- `<section>` : this element groups related content together, and typically each section would have its own heading.

- `<hgroup>` : The purpose of the `<hgroup>` element is to group together a set of one or more `<h1>` through `<h6>` elements so that they are treated as one single heading.

- `<figure> <figcaption>` :It can be used to contain any content that is referenced from the main flow of an article (not just images). images,Videos,Graphes,Diagrams,Code samples and text that support the main body of an article.

- `<div>` :this element still important to groupe together related elements.

### Example

```html
<!DOCTYPE html>
<html>
  <head>
    <title>HTML5 Layout</title>
  </head>
  <body>
    <div class="wrapper">
      <header>
        <h1>Yoko's Kitchen</h1>
        <nav>
          <ul>
            <li><a href="" class="current">home</a></li>
            <li><a href="">classes</a></li>
            <li><a href="">catering</a></li>
            <li><a href="">about</a></li>
            <li><a href="">contact</a></li>
          </ul>
        </nav>
      </header>
      <section class="courses">
        <article>
          <figure>
            <img src="images/bok-choi.jpg" alt="Bok Choi" />
            <figcaption>Bok Choi</figcaption>
          </figure>
          <hgroup>
            <h2>Japanese Vegetarian</h2>
            <h3>Five week course in London</h3>
          </hgroup>
          <p>
            A five week introduction to traditional Japanese vegetarian meals,
            teaching you a selection of rice and noodle dishes.
          </p>
        </article>
        <article>
          <figure>
            <img src="images/teriyaki.jpg" alt="Teriyaki sauce" />
            <figcaption>Teriyaki Sauce</figcaption>
          </figure>
          <hgroup>
            <h2>Sauces Masterclass</h2>
            <h3>One day workshop</h3>
          </hgroup>
          <p>
            An intensive one-day course looking at how to create the most
            delicious sauces for use in a range of Japanese cookery.
          </p>
        </article>
      </section>
      <aside>
        <section class="popular-recipes">
          <h2>Popular Recipes</h2>
          <a href="">Yakitori (grilled chicken)</a>
          <a href="">Tsukune (minced chicken patties)</a>
          <a href="">Okonomiyaki (savory pancakes)</a>
          <a href="">Mizutaki (chicken stew)</a>
        </section>
        <section class="contact-details">
          <h2>Contact</h2>
          <p>
            Yoko's Kitchen<br />
            27 Redchurch Street<br />
            Shoreditch<br />
            London E2 7DP
          </p>
        </section>
      </aside>
      <footer>
        &copy; 2011 Yoko's Kitchen
      </footer>
    </div>
    <!-- .wrapper -->
  </body>
</html>
```
