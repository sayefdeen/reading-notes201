# Class 11 Reading Notes.

[HOME](https://sayefdeen.github.io/reading-notes201/)

## Chapter 16 HTML/CSS Book Images.

Controlling the size and alignment of your images using CSS keeps rules that affect the presentation of your page in the CSS and out of the HTML markup.

<style>
img.large {  width: 300px;  height: 300px;} img.medium {  width: 150px;  height: 150px;} img.small {  width: 50px;  height: 50px;}
</style>
<img src="img/image.jpg" class="large" alt="Magnolia" /> 
<img src="img/image.jpg" class="medium" alt="Magnolia" /> 
<img src="img/image.jpg" class="small" alt="Magnolia" />

### Aligne Images Using CSS.

```css
img.align-left {
  float: left;
  margin-right: 10px;
}
img.align-right {
  float: right;
  margin-left: 10px;
}
img.medium {
  width: 250px;
  height: 250px;
}
```

### Center Images using CSS

```css
img.align-center {
  display: block;
  margin: 0px auto;
}
img.medium {
  width: 250px;
  height: 250px;
}
```

### Background Images.

The background-image property allows you to place an image behind any HTML element. This could be the entire page or just part of the page. By default, a background image will repeat to fill the entire box.

```css
body {
  background-image: url("image-Path");
}
```

- **background-repeat** : The background-repeat property can have four values:

  - repeate : The background image is repeated both horizontally and vertically (the default way it is shown if the background-repeat property isn't used).

  - repeat-x : The image is repeated horizontally only

  - repeat-y : The image is repeated vertically only.

  - no-repeat : The image is only shown once.

- **background-attachment** : specifies whether a background image should stay in one position or move as the user scrolls up and down the page. It can have one of two values:

  - fixed : The background image stays in the same position on the page.

  - scroll : The background image moves up and down as the user scrolls up and down the page.

- **backgroung-position** : When an image is not being repeated, you can use the background-position property to specify where in the browser window the background image should be placed, **If you only specify one value, the second value will default to center.**

  - left top
  - left center
  - left bottom
  - center top
  - center center
  - center bottom
  - right top
  - right center
  - right bottom

- **background** : The background property acts like a shorthand for all of the other background properties you have just seen, and also the background-color property.

### CSS3 Gradient `background-image`.

CSS3 is going to introduce the ability to specify a gradient for the background of a box. The gradient is created using the background-image property and, at the time of writing, different browsers required a different syntax.

Since it is not supported by all browsers, it is possible to specify a background image for the box first (which would represent the gradient) and then provide the CSS alternatives for browsers that support gradients.

```css
#gradient {
  /* fallback color */
  background-color: #66cccc;
  /* fallback image */
  background-image: url(images/fallback-image.png); /* Firefox 3.6+ */
  background-image: -moz-linear-gradient(#336666, #66cccc);
  /* Safari 4+, Chrome 1+ */
  background-image: -webkit-gradient(
    linear,
    0% 0%,
    0% 100%,
    from(#66cccc),
    to(#336666)
  );
  /* Safari 5.1+, Chrome 10+ */
  background-image: -webkit-linear-gradient(#336666, #66cccc);
  /* Opera 11.10+ */
  background-image: -o-linear-gradient(#336666, #66cccc);
  height: 150px;
  width: 300px;
}
```
