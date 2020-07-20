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

---

## Drawing Shpes with canvas.

### The Grid.

<img src="img/grid.png" style="float:right; margin: 15px" />
Before we can start drawing, we need to talk about the canvas grid or coordinate space. Our HTML skeleton from the previous page had a canvas element 150 pixels wide and 150 pixels high. To the right, you see this canvas with the default grid overlayed. Normally 1 unit in the grid corresponds to 1 pixel on the canvas. The origin of this grid is positioned in the top left corner at coordinate (0,0). All elements are placed relative to this origin. So the position of the top left corner of the blue square becomes x pixels from the left and y pixels from the top, at coordinate (x,y). Later in this tutorial we'll see how we can translate the origin to a different position, rotate the grid and even scale it, but for now we'll stick to the default.

`<canvas>` only supports two primitive shapes: rectangles and paths (lists of points connected by lines). All other shapes must be created by combining one or more paths. Luckily, we have an assortment of path drawing functions which make it possible to compose very complex shapes.

1. Rectangular.
2. Paths.
3. Arcs.
4. Bezier and quadratic curves.

---

## Drawing text.

The canves rendering context provides two methods to render text.

`fillText(text,x,y[, ,axWidth]`
Fills a given text at the given (x,y) position, Optionally with a maximum width to draw, it will Appeare as a filled Text

`strokeText (text,x,y [,maxWidth]`
Strokes a given text at the given (x,y) position, Optionally with a maximum width to draw, it will appear as a non-filled text.

### Styling text.

- font = value : This string uses the same syntax as the CSS font property, The default font is **10px sans-serif**

- textAlign = value : Text alignment setting Possible values are (top,end,left,right,center) the default value is start

- textBaseLine = value : Baseline alignment setting, Possible value (top, hanging,middle,alphabetic, ideographic,bottom) the default value is alphabetic.

- direction = value : Directionality, Possible values : (ltr,rtl,inherate), The defaule value is inherit

## Applying styles and colors.

There are two important properties we can use.

- `fillStyle` = color : Sets the style used when filling shapes, the color will appear filling the object
- `strokeStyle` = color : Sets the style shaped outline, the color will appear around the object.

### Transparency.

n addition to drawing opaque shapes to the canvas, we can also draw semi-transparent (or translucent) shapes. This is done by either setting the `globalAlpha` property or by assigning a semi-transparent color to the stroke and/or fill style.

The `globalAlpha` property can be useful if you want to draw a lot of shapes on the canvas with similar transparency, but otherwise it's generally more useful to set the transparency on individual shapes when setting their colors.

### Line Style.

There are several properties which allow us to style lines.

- lineWidth = value : Sets the width of lines drawn in the future

- lineCape = type : Sets the appearance of the ends of lines.

- lineJoin = type : Sets the appearance of the "corners" where lines meet.

- miterLimit = value : Establishes a limit on the miter when two lines join at a sharp angle, to let you control how thick the junction becomes.

- getLineDash() : Returns the current line dash pattern array containing an even number of non-negative numbers.

- setLineDash(segmants) : Sets the current line dash pattern.

- lineDashOffset = value : Specifies where to start a dash array on a line.

### Gradients

Just like any normal drawing program, we can fill and stroke shapes using linear and radial gradients. We create a `CanvasGradient` object by using one of the following methods. We can then assign this object to the `fillStyle` or `strokeStyle` properties.

- createLinearGradient(x1,x2,y1,y2) : Creates a linear gradient object with a starting point of (x1, y1) and an end point of (x2, y2).

- createLinearGradient(x1,x2,y1,y2,r2) : Creates a radial gradient. The parameters represent two circles, one with its center at `(x1, y1)` and a radius of `r1`, and the other with its center at `(x2, y2)` with a radius of `r2`

### Patterns

`createPattern(image,type)` : We use this method to create a `CanvasPattern` object, Once we've created a pattern, we can assign it to the `fillStyle` or `strokeStyle` properties.

The type specifies how to use the image in order to create the pattern, and must be one of the following string values:

- repeat
  Tiles the image in both vertical and horizontal directions.

- repeat-x
  Tiles the image horizontally but not vertically.

- repeat-y
  Tiles the image vertically but not horizontally.
- no-repeat
  Doesn't tile the image. It's used only once.
