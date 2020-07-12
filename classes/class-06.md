# Class 06 Reading Notes.

[HOME](https://sayefdeen.github.io/reading-notes201/)

---

## Chapter 3 Js Book, Objects.

Objects group together a set of variables and function to create a model of a something you would recognize from the real world,

<p><span style = "text-transform : Uppercase"> in an objects variables becomes known as properties </span> properties tell us about the object,such as the name of a hotel or the number of rooms it has.</p>
<p><span style = "text-transform : Uppercase"> in an objects functions becomes known as methods </span> methods represent tasks that are associated with the object.</p>

**Example**

```javascript
var hotel = {
  name: "Quay",
  rooms: 40,
  booked: 25,
  gym: true,
  roomTypes: ["twin", "double", "suite"],
  checkAvailability: function () {
    return this.rooms - this.booked;
  },
};
// This is How to accessing an object, properities and methods.
var hotelName = hotel.name;
// This will gives us hotelName = Quay;
var roomesFree = hotel.checkAvalibilty();
// This will execute the function inside the object hotel.
// Another way to access an Object (JUST ITS PROPERTIES).
var hotelRooms = hotel["rooms"];
```

The code above, you can see name,rooms,booked,gtm, and roomTypes : all of htese are called properties which have KEY and VALUE fro each one.
checkAvailability(); called a method.

<p> You accessing an Object by using what we call a <b>DOT NOTATION</b> It is shown above in the comments.</p>

---

## Chapter 6 Js Book Document Object Model.

The Document object model (DOM) specifies how browsers shuould create a model of an HTML page and how JavaScript can access and update the contents of a web page while it is in the browser window.

You can imagin that the HTML page is like a tree, each element has some branches under it all these branched has one parent in the top of it. which it is the `<html>` tag .

```html
<html>
  <body>
    <div id="page">
      <h1 id="header">List</h1>
      <h2>By groceries</h2>
      <ul>
        <li id="one" class="hot"><em>fresh</em></li>
        <li id="two" class="hot">pinenuts</li>
        <li id="three" class="hot">honey</li>
        <li id="four">balsamic vinegar</li>
      </ul>
      <script src="js/list.js"></script>
    </div>
  </body>
</html>
```

<img src="img/DOM.jpg" align="middle"/>

<p><span style="color:yellow">The Document Node</span> it represent the entire page (and also correspondes to the document object.), when you access ant element, attribute, or text node you navigate to it via the document node, relationships between the document and all of the element nodes are descibed using the terms as a family tree : Parent,Children,Sibling, Ancestors, and Descendants.</p>

<p><span style="color:green">The Element Nodes</span> HTML elements describe the structure of an HTML page, to access the DOM tree, you should start by looking for elements, then you can access its text and attribute nodes if you want to.</p>

<p><span style="color:orange">The Attribute Nodes</span> Attribute nodes are not <b>children</b> of the element.</p>

<p><span style="color:pink">Text Nodes</span> Once you have accessed an element node, you can then reach the text within that element</p>

<h3> Working with the DOM tree. </h3>

<ul>
<li> Access the elements : you can access any element in the DOM by using these selectors.</li>
  <ul>
 <li>getElementById(id name) : Used to select an element with a specific id.</li>

 <li>getElementsByClassName(class name) : Used to select all elements that have that class name as an attribute (Returns an array of elements), to select one of the items you can use the **item(index)** method or you can access it just like an array.</li>

 <li>parentNode: select the parent of the current element node.</li>

 <li>previousSibling/nextSibling: select the previous of next sibling of the DOM tree.</li>

 <li>firstChild/lastChild: select the first child of the last of the current element.</li>

 <li>querySelector(): Uses a CSS selector, and returns the first matching element.</li>

<li>getElementsByTagName(tag name) : select all elements that have this tag name.</li>

<li>querySelectorAll(): Uses a CSS selector to select all matching elements.</li>
  </ul>
  <li>Work with those elements.</li>
  <ul>
  <li>Access/Update Text nodes</li>
  <ul>
    <li>nodeValue :This property lets you access or update contents of a text node.</li>
  </ul>
  <li>Work with HTML content</li>
  <ul>
    <li>innerHTMl : allows to access child elements and text content.</li>

  <li>textContent : same as innerHTML.</li>

   <li>createElement()/createTextNode() : this method let you create new nodes.</li>

   <li>appendChild()/removeChild() : Add nodes to a tree/ remove nodes from a tree.</li>
  </ul>
  <li>Access or Update Attribute values</li>
  <ul>
  <li> hasAttribute() : checks if the attribute exists.</li>

   <li> getAttribute() : get the value of an attribute.</li>

  <li> setAttribute() : update the value.</li>

  <li> removeAttribute() : removes the attributes.</li>
  </ul>
  </ul>
</ul>

### Cross-site Scripting (XSS) attacks.

if you add HTML to a page using inerHTML (or several jQuery methods), you need to be aware of Cross-Site-Scripting Attacks or XSS, other wise an attacker could gain access to your users' accounts.

<h4> How XSS Happens</h4>

XSS involves an attacker placing malicious code into a site, websites ofter feature content created by many different people, Data you do not have complete control over is known as **untrusted data**; it must be handled with care.

<h4 style="text-transform: capitalize"> what can hese attacks do</h4>

XSS can give the attacker access to informtion in :

<ul>
<li> The DOM (including form data).</li>
<li> That website's cookies.</li>
 <li>Session tokens: information that identifies you from other users when you log into a site</li>
</ul>

<h4 style="text-transform: uppercase">Defending against cross-site scripting</h4>

<ol>
<li> Only let the visitors input the kind of characters they need to when supplying information, This is known as **Validation**.</li>

<li> Double-check calidation on the server before displaying user content/storing it in a database, users can bypass validation in the browser by turning JavaScript off.</li>

<li> The database my saftly contain markup and script from trusted sources, This is because it does not try to process the code; it just stores it.</li>

<li> As the data leaves the database, all potentailly dangerous characters should be escaped.</li>

<li> Make sure that you are only inserting content generated by users into certain parts of the template files.</li>

<li> Do not create DOM fragments containing HTML from untrusted sources. It should only be added as text once it has been escaped.</li>
</ol>

<h2> Understanding The Problem Domain Is The Hardest Part Of Programming </h2>

There are many that is hard about programming

- Learning a new technology

- Naming things

- Testing your code

- Debugging

- Fixing bugs

- Making software maintainable

<h3> Why problem domains are hard.</h3>

The big issue is that many problem domains are like a puzzle with a blurry picture or no picture at all.you can’t really see what you are trying to build very clearly, The same thing happens when writing code. Writing code is a lot like putting together a jigsaw puzzle. We put together code with the purpose of building components that we have taken out of the “bigger picture” of the problem domain.

<h3> Programming is easy if you understand the problem domain.</h3>

understanding the problem is the most critical piece to the equation. It is very difficult to solve a problem before you know the question. It’s like buzzing in on Jeopardy before you hear the clue and shouting out random questions.

<h3> What can you do about it?</h3>

1. Make the problem domain easier
2. Get better at understanding the problem domain
