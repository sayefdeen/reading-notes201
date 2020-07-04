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

## 5. Chapter 18 Process & Design.

This chapter discusses a process that you can use when you are creating a new website, every website should be designed for the target audience, not just for yourself or the site owner. It is therefore very important to understand who your target audance is. the author should ask himself these questions

A. who is your visitores.

Are they individuals? if is you should know the range of thier age,gender,countries,average income,type of education,how many ours do they work per week.

Are they companies? if are you should know the size of this company,the position of the people who visited the site, do they use the website for themselves or for someone else.

B. Why People visit your website.

Now that you know who your visitors are, you need to consider why they are coming. While some people will simply chance across your website, most will visit for a specific reason.

The first attempts to discover the underlying motivations for why visitors come to the site.
The second examines the specific goals of the visitors. These are the triggers making them come to the site now.

C. What your visitors are trying to achieve.

It is unlikely that you will be able to list every reason why someone visits your site but you are looking for key tasks and motivations. This information can help guide your site designs.

First you want to create a list of reasons why people would be coming to your site. You can then assign the list of tasks to the fictional visitors you created in the step described on the previous point.

D. What inFormation your visitors need

You know who is coming to your site and why they are coming, so now you need to work out what information they need in order to achieve their goals quickly and effectively.

E. How often people will visit your site.

Some sites benefit from being updated more frequently than others. Some information (such as news) may be constantly changing, while other content remains relatively static.

### 5.1 Site Maps.

Now that you know what needs to appear on your site, you can start to organize the information into sections or pages.The aim is to create a diagram of the pages that will be used to structure the site. This is known as a site map and it will show how those pages can be grouped.

To help you decide what information should go on each page, you can use a technique called **_card sorting_**.

This involves placing each piece of information that a visitor might need to know on a separate piece of paper and then organizing the related information into groups.

### 5.2 WireFrames.

A wireframe is a simple sketch of the key information that needs to go on each page of a site. It shows the hierarchy of the information and how much space it might require.

### 5.3 Getting your message across using Design.

The primary aim of any kind of visual design is to communicate. Organizing and prioritizing information on a page helps users understand its importance and what order to read it in.

- Content : Web pages often have a lot of information to communicate. For example, the pages of online newspapers will have information that does not appear on every page of the print equivalent.

- Prioritizing : If everything on a page appeared in the same style, it would be much harder to understand. (Key messages would not stand out.)

- organizing : Grouping together related content into blocks or chunks makes the page look simpler (and easier to understand).

- visual hierarchy : Attention is immediately drawn to a picture that shows the service this company offers and a headline to explain it. The size and colored background reinforce that this is the primary message on the page.

- grouping.

- similarity

### 5.4 Visual Hierachy.

Most web users do not read entire pages. Rather, they skim to find information. You can use contrast to create a visual hierarchy that gets across your key message and helps users find what they are looking for.

- Size : make the important information with larg font size.

- Color : Foreground and background color can draw attention to key messages.

- Style : An element may be the same size and color as surrounding content but have a different style applied to it to make it stand out.

### 5.5 Grouping and similarity.

When making sense of a design, we tend to organize visual elements into groups. Grouping related pieces of information together can make a design easier to comprehend. Here are some ways this can be achieved.

- Proximity : When several items are placed close together, they are perceived as more related than items that are placed further apart.

- closure : When faced with a complicated arrangement of items, we will often look for a single or recognisable pattern or form. A real or imaginary box can be formed around elements due to their proximity and alignment.

- continuance : When elements are placed in a line or a curve then they are perceived to be more related than those that are not following the same direction. This can be used to direct a reader from one part of a page to the next.

- White space : Placing related items closer together and leaving a bigger gap between unrelated items.

- Color : A background color placed behind related items to emphasize their connection.

- Borders : A line can be drawn around the border of the group or between it and its neighbors.

### 5.6 Designing Navigation.

Site navigation not only helps people find where they want to go, but also helps them understand what your site is about and how it is organized. Good navigation tends to follow these principles...

- Concise :Ideally, the navigation should be quick and easy to read. It is a good idea to try to limit the number of options in a menu to no more than eight links. These can link to section homepages which in turn link to other pages.

- Clear : Users should be able to predict the kind of information that they will find on the page before clicking on the link. Where possible, choose single descriptive words for each link rather than phrases.

- Selective : The primary navigation should only reflect the sections or content of the site. Functions like logins and search, and legal information like terms and conditions and so on are best placed elsewhere on the page.

- Context : Good navigation provides context. It lets the user know where they are in the website at that moment. Using a different color or some kind of visual marker to indicate the current page is a good way to do this.

- Interactive : Each link should be big enough to click on and the appearance of the link should change when the user hovers over each item or clicks on it. It should also be visually distinct from other content on the page.

- Consistent : The more pages a site contains, the larger the number of navigation items there will be. Although secondary navigation will change from page to page, it is best to keep the primary navigation exactly the same.

## 6. JavaScript.

### 6.1 Introduction.

Before you learn how to read and write JavaScript language itself, you need to become familiar with some key concepts in computer programming.

- What is a script and how do I create one.
- How do computers fit in with the world around them?
- How do i write for a web page?

A. What is a Script and how do I create one.

A Script is a series of instructions that a computer can follow to achieve a goal, that the computer an follow step by step.

To write a script you need to first state your goal and then list the tasks need to be completed in order to achieve it. to know what you want ask yourself these questions:

- Define The Goal.
- Design The Script.
- Code Each Step.

Every Step for every task needs to be written in a language the computer can understand and follow, you need to learn to think like a computer because they solve tasks in different wats than you.

Since scripts are bunch of step that the computer read, you can use a flowchart to make these step more comfortable to be read by you.

B. How do computers fit in with the world around them?

Computers create moduels of the world using data by using what is called **Objects & Properties**

Objects: In computer Programming each physical thing in the world can be represented as an object each object has its own Properties,Events, and Methods

Properties: refer to the characteristices of an object, each one has a _name & value_

Events: in the real worls people interact with objects, these interactions can change the value of the properties in these objects, so what is an Event? programs are designed to do different things when users interact with the computer in different ways. **An Event is the computer's way of sticking up its hand to say That this is happend**

Methods: typically represent how people interact with the objects in the real world

computers user data to create models of things in the real world.
The events, methods, and properties of an object all realted to each other.

Events can trigger methods, and methods can retrieve of update an object's properties.

Web browsers create similar models of the web page they are showing and of the browser window that the page is being shown in. such as :

- Window Object : The browser represents each window or tab using a window object, The location property of the window object will tell you you the URL of the current page

- Document Object : The current web page loaded into each window is modelled using document object.

How A browser sees a web page??

in order to understand how you can change the content of an HTML page using JavaScript, you need to know how a browser interprets the HTML code and applies styling to it.

1. Receive a page as HTML code

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Example</title>
  </head>
  <body>
    <h1>Main Title Of This page</h1>
    <p>For all orders and inquiries please call <em> 888888888 </em></p>
  </body>
</html>
```

2. Create a models of the page and store it in memory. (Called The [DOM](https://www.w3schools.com/js/pic_htmltree.gif))

3. User a rendering engine to show the page on screen.

C . How do i write for a web page?

Before diving in the JavaScript coding you have to know HTML and CSS.

- HTML : Content Layer .html files
- CSS : Presentatin Layer .css files
- JavaScript: Behavior Layer .js files

How to use Obejects and methods?

This one line of javaScript shows how to use objects and methods.

```javascript
document.write("Good Afternoon!");
```

- `document` : the document object which was disscused.
- `.` Member Operator.
- `write` : it is a method that was called from the document object.

You have To link youe js file to the HTML file using.

```html
<script src="[Path of js folder]"></script>
```
