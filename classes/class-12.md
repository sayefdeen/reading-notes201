# Class 12 Reading Notes.

[HOME](https://sayefdeen.github.io/reading-notes201/)

## Charts.Js

Charts are far netter for displaying data visually than tables,they're easier to look at and convey data quickly, but they're not always easy to create.

A great way to get started with Chart.js, a JavaSript plugin that uses HTML5 `<canvas>` element to draw the graph onto the page.

### Setting Up

The first thing we need to do is [download Chart.js](https://github.com/chartjs/Chart.js), Copt the Chart.min.js out of the unzipped folder and into the directory you'll be working in, Then create a new html page and import the script:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Chart.js demo</title>
    <script src="Chart.min.js"></script>
  </head>
  <body></body>
</html>
```

### Drawing a line chart.

To draw a line chart, the first thing we need to do is create a `<canves>` element in our HTML in which Chart.js can draw our chart. So add this to the body of out HTML page:

```html
<canvas id="buyers" width="600" height="400"></canvas>

<script>
  var buyers = document.getElementById("buyers").getContext("2d");
  new Chart(buyers).Line(buyerData);
</script>
```

### Drawing a Pi chart.

```html
<script>
  var buyerData = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        fillColor: "rgba(172,194,132,0.4)",
        strokeColor: "#ACC26D",
        pointColor: "#fff",
        pointStrokeColor: "#9DB86D",
        data: [203, 156, 99, 251, 305, 247],
      },
    ],
  };
  var countries = document.getElementById("countries").getContext("2d");
  new Chart(countries).Pie(pieData, pieOptions);
</script>

<canvas id="countries" width="600" height="400"></canvas>
```

---

## Basic usage of canvas.

```html
<canvas id="tutorial" width="150" height="150"></canvas>
```

At first sight a `<canvas>` looks like the `<img>` element, with the only clear difference being that it doesn't have the src and alt attributes. Indeed, the `<canvas>` element has only two attributes, width and height. These are both optional and can also be set using DOM properties. When no width and height attributes are specified, the canvas will initially be 300 pixels wide and 150 pixels high. The element can be sized arbitrarily by CSS, but during rendering the image is scaled to fit its layout size.

<span style="color:red;"> if the CSS sizing doesn't respect the ratio of the initial canvas, it will appear distorted, The `<canvas>`element can be styled just like any normal image (margin, border, background…). These rules, however, don't affect the actual drawing on the canvas </span>.

```html
<canvas id="stockGraph" width="150" height="150">
  current stock price: $3.15 + 0.15
</canvas>

<canvas id="clock" width="150" height="150">
  <img src="images/clock.png" width="150" height="150" alt="" />
</canvas>
```

If you look at the code above you will ses that there is an `<img>` tag inside the `<canvas>` tag that's mean if the browser doesn't support the `<canvas>` tag the `<img>` will appear insted.

### Checking for Support

The method `getContext()` can accessthe drawing context using this method, it will check for support programmatically by simple testing for the presence of this method.

```javascript
var canvas = document.getElementById("tutorial");

if (canvas.getContext) {
  var ctx = canvas.getContext("2d");
  // drawing code here
} else {
  // canvas-unsupported code here
}
```

Example:

The script includes a function called `draw()`, which is executed once the page finishes loading; this is done by listening for the load event on the document.

```html
<html>
  <head>
    <meta charset="utf-8" />
    <title>Canvas tutorial</title>
    <script type="text/javascript">
      function draw() {
        var canvas = document.getElementById("tutorial");
        if (canvas.getContext) {
          var ctx = canvas.getContext("2d");
        }
      }
    </script>
    <style type="text/css">
      canvas {
        border: 1px solid black;
      }
    </style>
  </head>
  <body onload="draw();">
    <canvas id="tutorial" width="150" height="150"></canvas>
  </body>
</html>
```

The Result:

<html>
  <head>
    <meta charset="utf-8" />
    <title>Canvas tutorial</title>
    <script type="text/javascript">
      function draw() {
        var canvas = document.getElementById("tutorial");
        if (canvas.getContext) {
          var ctx = canvas.getContext("2d");
        }
      }
    </script>
    <style type="text/css">
      canvas {
        border: 1px solid black;
      }
    </style>
  </head>
  <body onload="draw();">
    <canvas id="tutorial" width="150" height="150"></canvas>
  </body>
</html>
