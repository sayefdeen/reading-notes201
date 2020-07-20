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

<canvas id="buyers" width="600" height="100"></canvas>

<script>
  var buyers = document.getElementById("buyers").getContext("2d");
  new Chart(buyers).Line(buyerData);
</script>

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
