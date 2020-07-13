# Class 07 Reading Notes.

[HOME](https://sayefdeen.github.io/reading-notes201/)

## Chapter 6 HTML Tables.

There are several types of information that need to be displayed in a grid or table. such as : sports resutl, stock, reports ... etc.

**Example :**

```html
<html>
  <head>
    <title>Tables</title>
  </head>
  <body>
    <table>
      <thead>
        <tr>
          <th></th>
          <th scope="col">Home starter hosting</th>
          <th scope="col">Premium business hosting</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Disk space</th>
          <td>250mb</td>
          <td>1gb</td>
        </tr>
        <tr>
          <th scope="row">Bandwidth</th>
          <td>5gb per month</td>
          <td>50gb per month</td>
        </tr>
        <!-- more rows like the two above here -->
      </tbody>
      <tfoot>
        <tr>
          <td></td>
          <td colspan="2">Sign up now and save 10%!</td>
        </tr>
      </tfoot>
    </table>
  </body>
</html>
```

<html>
 <head>
 <title>Tables</title>
 </head>
 <body>
 <table>
 <thead>
 <tr>
 <th></th>
 <th scope="col">Home starter hosting</th>
 <th scope="col">Premium business hosting</th>
   </tr>
 </thead>
 <tbody>
 <tr>
 <th scope="row">Disk space</th>
 <td>250mb</td>
 <td>1gb</td>
 </tr>
 <tr>
 <th scope="row">Bandwidth</th>
 <td>5gb per month</td>
 <td>50gb per month</td>
 </tr>
<!-- more rows like the two above here -->
 </tbody>
 <tfoot>
 <tr>
 <td></td>
 <td colspan="2">Sign up now and save 10%!</td>
 </tr>
 </tfoot>
 </table>
 </body>
</html>

`<table>` : a table tag which contain all the table tags.

`<thead>` : tells the browser that inside this tage is the table head.

`<tbody>` : tells the browser that inside this tage is the table body.

`<tr>` : table row.

`<th>` : table head data.

`<td>` : table data.

`<tfoot>` : The footer belongs inside the `<tfoot>` element.

---

## Chapter 3 Js Book: Functions, Methods, and Objects.

We talked about function in [class-04](https://sayefdeen.github.io/reading-notes201/classes/class-04) you can go and check that. Here we are going to talk about methods and Objects.

### Creating an Object construction notation.

```javascript
var hotel = new Object();
(hotel.name = "Quay"),
  (hotel.rooms = 40),
  (hotel.booked = 25),
  (hotel.checkAvailability = function () {
    return this.rooms - this.booked;
  });

// here we created an Instantiation from Object class.
// To update the value of properties, use dot notation of square brackets.
hotel.name = "Park";
hotel["name"] = "Park";
// delete a propertiy.
delete hotel.name;
```

### Creating Many Objects.

```javascript
function Hotel(name, rooms, booked) {
  this.name = name;
  this.rooms = rooms;
  this.booked = booked;
  this.checkAvalibilty = function () {
    return this.rooms - this.booked;
  };
}
//  To create an instance of the objet Hotel
var hotel1 = new Hotel("hotel1", 40, 25);
var hotel2 = new Hotel("hotel2", 120, 77);
// To call the method inside the constructor.

hotel1.checkAvalibilty();
```

The this keyword in used insted of the object name to indicate that the property or method belongs to the object that this function created.

When do we use individual Object Or multiple Objects.

1. Indivudal Objects

   - when you are storing/ transmitting data between application.

   - for global or configuration objects that set up inormation for the page.

2. Multible Objects.

   - You have lots of objects used with similar functionality whithin a page.
   - A complex object might not be used in code.

## Arrays Are Objects.

Arrays are actually a special type of objects, They hold a related set key/value pairs, but the key for each value is its **index** number.

You can combine arrays and object inside each other.

```javascript
object1 = {
  room1: [420, 40, 10],
  room2: [460, 20, 20],
  room3: [230, 0, 0],
  room4: [620, 150, 60],
};

object1.room1[0];
//  this gives 420
```

Browsers come with a set of built-in objects represent things like the browser window and the current web page shown in that window, these built-in objects act like a toolkit for creating interavtice web pages.

Object Model : is a group of objects,each of which represent related things from the real world, together they from a model of something larger.

1. Browser Object Model.

it contains objects that represent the current browser window or tab. it contains object that model things like browser history and the device's screen

The topmost object is the window object, which represent current browser window or tab, its child objects represent other browser features.

- window : current browser window/tab

- document : current web page.

- history : pages in browser history.

- location : url of current page.

- navigator : information about browser.

- screen : device's display information.

2. document Object Model.

It uses objects to create a represetation of the current page, we talked about the document object in [class-06](https://sayefdeen.github.io/reading-notes201/classes/class-06)

3. Global JavaScript Objects.

Represent the things that the javaScript language needs to create a model of,They are a goupe of individual objects that related to different parts of the JavaScript language.

- String : for working with string values.

- Number : for working with numeric values.

- Boolean : for working with boolean values.

- Date : to represent and handle dates.

- Math : for working with numbers and calculations.

- Regex : for matching patterns within string of text.

---

### The Browser Object Model.

|      Property      |                                          Describtion                                          |
| :----------------: | :-------------------------------------------------------------------------------------------: |
| window.innerHeight |                                       Height of window                                        |
| window.innerWidth  |                                        width of window                                        |
| window.pageXOffset |                       distance documetn has been scrolled horizontally                        |
| window.pageYOffset |                        distance documetn has been scrolled vertically                         |
|  window.document   | Reference to document object, which is used to represent the current page contained in window |
|      Methods       |                                          Description                                          |
|   window.alert()   |                               create a dialog box with message                                |
|   window.open()    |                        Opens new browser windoe wiht URL as parameter                         |
|   window.print()   |                Tells browser that user wantsto print contents of current page                 |

### The Document Object Model.

|       Property        |                   Describtion                    |
| :-------------------: | :----------------------------------------------: |
|    document.title     |            Title of current document             |
| document.lastModified |     Date on which document was last modified     |
|     document.URL      | Returns String containing URL of curent document |
|    document.domain    |        Returns domain of current document        |

Methods was described in details in [class-06](https://sayefdeen.github.io/reading-notes201/classes/class-06).

### The String Object.

|    Method     |                                            Describtion                                             |
| :-----------: | :------------------------------------------------------------------------------------------------: |
| toUpperCase() |                                   Change the text to UPPER CASE                                    |
| toLowerCase() |                                    Change the text to lowercase                                    |
|   charAt()    |         takes an indes number as parameter,and returns the character found at that number          |
|   indexOf()   | Returns indes number of the first time a character or set of characters is found within the string |
| lastIndexIf() |    Returns index number of the last time a character of charachters is found within the string     |
|  subString()  |                         Returns characters found between two index numbers                         |
|    split()    |             when a character is specified, it splits the string each time it is found.             |
|    trim()     |                          Remove whitespaces from start and end of string                           |
|   replace()   |                                       Like find and replace                                        |

### The Number Object.

|     Method      |                           Describtion                            |
| :-------------: | :--------------------------------------------------------------: |
|     isNaN()     |               checks if the value is not a number                |
|    isFixed()    |   Round to specified number of decimal places(return a string)   |
|  toPrecision()  |        Round to total number of places (returns a string)        |
| toExponential() | Returns a string representing the number in exponentail notation |

### The Math Object.

|    Prperty    |                Describtion                |
| :-----------: | :---------------------------------------: |
|    Math.PI    |        Returns pi (3.14159265359)         |
| Math.round()  |    Round number to the nearest integer    |
| Math.sqrt(n)  |  Returns square root of positive number   |
|  Math.ceil()  |  Round number up to the nearest integer   |
| Math.floor()  |  Round number down to the nearst integer  |
| Math.random() | Generates a random number between 0 and 1 |

### The Date Object.

```javascript
var today = new Date();
```

|        Method         |                     Describtion                     |
| :-------------------: | :-------------------------------------------------: |
|  getDate()/setDate()  |       Returns/set the day of the month (1-31)       |
|       getDay()        |             Returns the day of the week             |
|   getFullYear()/set   |          Returns/ sets the year (4 digits)          |
| getMilliseconds()/set |        Returns/sets the milliseconds (0-999)        |
|   getMinutes()/set    |           Returns/sets the minutes(0-59)            |
|    getMonthe()/set    |            Returns/Sets the month (0-11)            |
|     getTime()/set     | Numbers of milliseconds since 1/1/1971 00:00:00 UTC |

---

## Domain Modeling.

Domain modeling is the process of creating a conceptual model in code for a specific problem. A model describes the various entities, their attributes and behaviors, as well as the constraints that govern the problem domain. An entity that stores data in properties and encapsulates behaviors in methods is commonly referred to as an object-oriented model.

Domain modeling is the process of creating a conceptual model for a specific problem. And a domain model that's articulated well can verify and validate your understanding of that problem.

Here's some tips to follow when building your own domain models.

1.  When modeling a single entity that'll have many instances, build self-contained objects with the same attributes and behaviors.

2.  Model its attributes with a constructor function that defines and initializes properties.

3.  Model its behaviors with small methods that focus on doing one job well.

4.  Create instances using the new keyword followed by a call to a constructor function.

5.  Store the newly created object in a variable so you can access its properties and methods from outside.

6.  Use the this variable within methods so you can access the object's properties and methods from inside.
