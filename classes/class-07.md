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
