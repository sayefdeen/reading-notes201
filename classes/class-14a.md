# Class 14 a Reading Notes.

[HOME](https://sayefdeen.github.io/reading-notes201/)

## Transforms.

With CSS3 came new ways to position and alter elements. Now general layout techniques can be revisited with alternative ways to size, position, and change elements. All of these new techniques are made possible by the `transform` property.

### Transform Syntax.

including the transform property followed by the value. The value specifies the transform type followed by a specific amount inside parentheses.

```css
div {
  -webkit-transform: scale(1.5);
  -moz-transform: scale(1.5);
  -o-transform: scale(1.5);
  transform: scale(1.5);
}
```

Notice how the transform property includes multiple vendor prefixes to gain the best support across all browsers. The un-prefixed declaration comes last to overwrite the prefixed versions, should a browser fully support the transform property.

### 2D Transforms.

Two-dimensional transforms work on the x and y axes, known as horizontal and vertical axes.

1. 2D Rotat

`transform : rotate(deg)` : make the object rotate at some smount of an angle.

2. 2D Scale.

`transform : scale(number)` : make the object larger or smaller, depending on the number.

3. 2D Translate

`transform : translateX(-10px)` The translate value works a bit like that of relative positioning, pushing and pulling an element in different directions without interrupting the normal flow of the document. Using the translateX value will change the position of an element on the horizontal axis while using the translateY value will change the position of an element on the vertical axis.

### 3D Transforms.

1. 3D Rotate

```css
.box-1 {
  transform: perspective(200px) rotateX(45deg);
}
.box-2 {
  transform: perspective(200px) rotateY(45deg);
}
.box-3 {
  transform: perspective(200px) rotateZ(45deg);
}
```

2. 3D Scale.

```css
.box-1 {
  transform: perspective(200px) scaleZ(1.75) rotateX(45deg);
}
.box-2 {
  transform: perspective(200px) scaleZ(0.25) rotateX(45deg);
}
```

3. 3D Translate

```css
.box-1 {
  transform: perspective(200px) translateZ(-50px);
}
.box-2 {
  transform: perspective(200px) translateZ(50px);
}
```

## Transitions & Animations.

With CSS3 transitions you have the potential to alter the appearance and behavior of an element whenever a state change occurs, such as when it is hovered over, focused on, active, or targeted.

### Transition.

The easiest way for determining styles for different states is by using the :`hover`, `:focus`, `:active`, and `:target` pseudo-classes.

There are four transition related properties in total, including transition-property,transition-duration,transition-timing-function, and transition-delay. Not all of these are required to build a transition, with the first three are the most popular.

```html
<html>
  <style>
    body {
      color: #fff;
      font: 14px/24px "Open Sans", "HelveticaNeue-Light", "Helvetica Neue Light",
        "Helvetica Neue", Helvetica, Arial, "Lucida Grande", Sans-Serif;
    }
    .box {
      background: #2db34a;
      border-radius: 6px;
      cursor: pointer;
      height: 95px;
      line-height: 95px;
      text-align: center;
      transition-property: background;
      transition-duration: 1s;
      transition-timing-function: linear;
      width: 95px;
    }
    .box:hover {
      background: #ff7b29;
    }
  </style>
  <div class="box">Box</div>
</html>
```

---

<html>
<style>
body {
  color: #fff;
  font:  14px/24px "Open Sans", "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", Sans-Serif;
}
.box {
  background: #2db34a;
  border-radius: 6px;
  cursor: pointer;
  height: 95px;
  line-height: 95px;
  text-align: center;
  transition-property: background;
  transition-duration: 1s;
  transition-timing-function: linear;
  width: 95px;
  float : right;
}
.box:hover {
  background: #ff7b29;
}
</style>
<div class="box">Box</div>
</html>

A handful of the more popular transitional properties include the following.

- **Transition Duration** : The duration in which a transition takes place is set using the transition-duration property. The value of this property can be set using general timing values, including seconds (s) and milliseconds (ms). These timing values may also come in fractional measurements, .2s for example.

<html>
<style>
body {
  color: #fff;
  font:  14px/24px "Open Sans", "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", Sans-Serif;
}
.box1 {
    background: #2db34a;
  border-radius: 6px;
  cursor: pointer;
  height: 95px;
  line-height: 95px;
  text-align: center;
  width: 95px;
  float : right;
  transition: background .2s linear, border-radius 1s ease-in 1s;
}
.box1:hover {
  background: #ff7b29;
  border-radius: 50%;
}
</style>
<div class="box1">Box</div>
</html>

- **Transition Delay** : you can also set a delay with the transition-delay property. The delay sets a time value, seconds or milliseconds, that determines how long a transition should be stalled before executing.

### Animation.

Transitions do a great job of building out visual interactions from one state to another, and are perfect for these kinds of single state changes. However, when more control is required, transitions need to have multiple states. In return, this is where animations pick up where transitions leave off.

- **Animation Keyframes** : To set multiple points at which an element should undergo a transition, use the`@keyframes` rule. The `@keyframes` rule includes the animation name, any animation breakpoints, and the properties intended to be animated.

<html>
<style>
@keyframes slide {
  0% {
    left: 0;
    top: 0;
  }
  50% {
    left: 244px;
    top: 100px;
  }
  100% {
    left: 488px;
    top: 0;
  }
}
.stage {
  background: #eaeaed;
  border-radius: 6px;
  height: 150px;
  position: relative;
  min-width: 538px;
}
.stage:hover .ball {
  animation: slide 2s linear;
}
.ball {
  background: #2db34a;
  border-radius: 50%;
  height: 50px;
  position: absolute;
  width: 50px;
}
</style>
<div class="stage">
  <figure class="ball"></figure>
</div>
</html>

- **Animation Iteration** : By default, animations run their cycle once from beginning to end and then stop. To have an animation repeat itself numerous times the `animation-iteration-count : infinite` property may be used

<html>
<style>
@keyframes slide {
  0% {
    left: 0;
    top: 0;
  }
  50% {
    left: 244px;
    top: 100px;
  }
  100% {
    left: 488px;
    top: 0;
  }
}
.stage1 {
  background: #eaeaed;
  border-radius: 6px;
  height: 150px;
  position: relative;
  min-width: 538px;
}
.stage1:hover .ball1 {
  animation-name: slide;
  animation-duration: 2s;
  animation-timing-function: ease-in-out;
  animation-delay: .5s;
  animation-iteration-count: infinite;
}
.ball1 {
  background: #2db34a;
  border-radius: 50%;
  height: 50px;
  position: absolute;
  width: 50px;
}
</style>
<div class="stage1">
  <figure class="ball1"></figure>
</div>
</html>

- **Animation Direction** : On top of being able to set the number of times an animation repeats, you may also declare the direction an animation completes using the `animation-direction` property. Values for the `animation-direction` property include `normal`, `reverse`, `alternate`, and `alternate-reverse`.

<html>
<style>
@keyframes slide {
  0% {
    left: 0;
    top: 0;
  }
  50% {
    left: 244px;
    top: 100px;
  }
  100% {
    left: 488px;
    top: 0;
  }
}
.stage2 {
  background: #eaeaed;
  border-radius: 6px;
  height: 150px;
  position: relative;
  min-width: 538px;
}
.stage2:hover .ball2 {
  animation-name: slide;
  animation-duration: 2s;
  animation-timing-function: ease-in-out;
  animation-delay: .5s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}
.ball2 {
  background: #2db34a;
  border-radius: 50%;
  height: 50px;
  position: absolute;
  width: 50px;
}
</style>
<div class="stage2">
  <figure class="ball2"></figure>
</div>
</html>

---
