# Class 06 Reading Notes.

[HOME](https://sayefdeen.github.io/reading-notes201/)

---

## Chapter 3 Js Book, Objects.

Objects group together a set of variables and function to create a model of a something you would recognize from the real world,

<p style = "text-transform : Uppercase"> in an objects variables becomes known as properties </p> properties tell us about the object,such as the name of a hotel or the number of rooms it has.
<p style = "text-transform : Uppercase"> in an objects functions becomes known as methods </p> methods represent tasks that are associated with the object.

**Example**:

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
