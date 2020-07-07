# Class 03 Reading notes

[HOME](https://sayefdeen.github.io/reading-notes201/)

## Chapter 3 Lists.

There are three type of lists in HTML.

A. Ordered Lists : where each item in the list is numberd.

`<ol>` indicate an ordered list
`<li>` indocate a list item.

Example:

```html
<ol>
  <li>Chop potatoes into quarters</li>
  <li>Simmer in salted water for 15-20 minutes until tender</li>
  <li>Heat milk, butter and nutmeg</li>
  <li>Drain potatoes and mash</li>
  <li>Mix in the milk mixture</li>
</ol>
```

Result:

<ol>
 <li>Chop potatoes into quarters</li>
 <li>Simmer in salted water for 15-20   minutes until tender</li>
 <li>Heat milk, butter and nutmeg</li>  
 <li>Drain potatoes and mash</li>
 <li>Mix in the milk mixture</li>
</ol>

---

B . Unordered Lists : lists that begin with a bullet point rather than characters that indicate order.

`<ul>` indicate an ordered list
`<li>` indocate a list item.

Example:

```html
<ul>
  <li>1kg King Edward potatoes</li>
  <li>100ml milk</li>
  <li>50g salted butter</li>
  <li>Freshly grated nutmeg</li>
  <li>Salt and pepper to taste</li>
</ul>
```

Result:

<ul>
  <li>1kg King Edward potatoes</li>
  <li>100ml milk</li>
  <li>50g salted butter</li>
  <li>Freshly grated nutmeg</li>
  <li>Salt and pepper to taste</li>
</ul>

---

C . Definition lists : are mad up of a set of terms aling with the defenisions for each of those terms.

`<dl>` indicate an defenition list
`<dt>` indocate a term bing defined.
`<dd>` indocate a definition of a term.

Example:

```html
<dl>
  <dt>Sashimi</dt>
  <dd>
    Sliced raw fish that is served with condiments such as shredded daikon
    radish or ginger root, wasabi and soy sauce
  </dd>
  <dt>Scale</dt>
  <dd>A device used to accurately measure the weight of ingredients</dd>
  <dd>A technique by which the scales are removed from the skin of a fish</dd>
  <dt>Scamorze</dt>
  <dt>Scamorzo</dt>
  <dd>
    An Italian cheese usually made from whole cow's milk (although it was
    traditionally made from buffalo milk)
  </dd>
</dl>
```

Result:

<dl>
  <dt>Sashimi</dt>
  <dd>
    Sliced raw fish that is served with condiments such as shredded daikon
    radish or ginger root, wasabi and soy sauce
  </dd>
  <dt>Scale</dt>
  <dd>A device used to accurately measure the weight of ingredients</dd>
  <dd>A technique by which the scales are removed from the skin of a fish</dd>
  <dt>Scamorze</dt>
  <dt>Scamorzo</dt>
  <dd>
    An Italian cheese usually made from whole cow's milk (although it was
    traditionally made from buffalo milk)
  </dd>
</dl>

---

Finally If you want to make a nested List.

Example:

```html
<ul>
  <li>Mousses</li>
  <li>
    Pastries
    <ul>
      <li>Croissant</li>
      <li>Mille-feuille</li>
      <li>Palmier</li>
      <li>Profiterole</li>
    </ul>
  </li>
  <li>Tarts</li>
</ul>
```

Result:

<ul>
 <li>Mousses</li>
 <li>Pastries
  <ul>
 <li>Croissant</li>
 <li>Mille-feuille</li>
 <li>Palmier</li>
 <li>Profiterole</li>
 </ul>
 </li>
 <li>Tarts</li>
</ul>

---

## Chapter 13 Boxes.

Yoy can treats each HTML elemnt as if it lives in its own box, you can set several properties that affext the appearance of these boxed.

By default a box is sized just big enough to hold its contents, To set your own dimensions for a box you can user the `height and width` properties.

```css
div.box {
  height: 300px;
  width: 300px;
  background-color: #bbbbaa;
}
p {
  height: 75%;
  width: 75%;
  background-color: #0088dd;
}
```

**OverFlowing Content**

`overflow`

The overflow property tells the browser what to do if the content contained within a box is larger than the box itself. It can have one of two values:

`hidden` : This property simply hides any extra content that dos not fit in the box.

`scroll` : This property adds a scrollbar to the box so that users can scroll to see the missing content.

```css
p.one {
  overflow: hidden;
}
p.two {
  overflow: scroll;
}
```

---

### Border, margin & Padding.

Every box has three available properties that can be adjusted to control its appearance: The padding and margin properties are very helpful in adding space between various items on the page.

- Border : Every box has a border (even if it is not visible or is specified to be 0 pixels wide). The border separates the edge of one box from another.

- Margin : Margins sit outside the edge of the border. You can set the width of a margin to create a gap between the borders of two adjacent boxes.

- Padding : Padding is the space between the border of a box and any content contained within it. Adding padding can increase the readability of its contents.

### Border:

```css
/* control the border width */
p {
  border-width: 2px;
  border-width: thick;
  border-width: medium;
  border-width: thin;
}

/* control the border style */

p {
  border-style: solid;
  border-style: dotted;
  border-style: dashed;
  border-style: double;
  border-style: groove;
  border-style: ridge;
  border-style: inset;
  border-style: outset;
}

/* control the border color */

p {
  border-color: red;
  border-color: #000000;
}

/* or You can use this for shothand */

p {
  width: 250px;
  border: 3px dotted #000000;
}
```

### Padding

```css
p {
  padding: 10px;
}
/* This measn that p has a padding in all side 10px (top - right - bottom - left) */
```

### margin

```css
p {
  margin: 20px;
}
/* This meann that the p has a margin in all sides 20px (top - right - bottom  - left) */

p {
  margin: 10px auto 10px auto;
}
/* This means that the p is centered to the conter of the page */
```

## Cahnge Inline/Block.

`display`

- inline : This causes a block-level element to act like an inline element.
- block : This causes an inline element to act like a block-level element.
- inline-block : This causes a block-level element to flow like an inline element, while retaining other features of a block-level element
- none : This hides an element from the page. In this case, the element acts as though it is not on the page at all (although a user could still see the content of the box if they used the view source option in their browser).

## Hiding Boxes.

`visiblity`

- hidden : This hides the element,If the visibility of an element is set to hidden, a blank space will appear in its place.
- visible : This shows the element

`border-image` : the border-image property applies an image to the border of any box. It takes a background image and slices it into nine pieces.

- The URL of the image
- Where to slice the image 3:
- What to do with the straight edges; the possible values are:
  - stretch stretches the image
  - repeat repeats the image
  - round like repeat but if the tiles do not fit exactly, scales the tile image so they will

`box-shadow` : The box-shadow property allows you to add a drop shadow around a box. It works just like the text-shadow property that you met on page 288. It must use at least the first of these two values as well as a color:

- horizontAl offset: Negative values position the shadow to the left of the box.
- vertical offset Negative values position the shadow to the top of the box.
- Blur distance If omitted, the shadow is a solid line like a border.
- Spread of shadow If used, a positive value will cause the shadow to expand in all directions, and a negative value will make it contract.

`border-radius` : CSS3 introduces the ability to create rounded corners on any box, using a property called border-radius. The value indicates the size of the radius in pixels.

`border-radius` : To create more complex shapes, you can specify different distances for the horizontal and the vertical parts of the rounded corners.

---

## Chapter 4 Js Book
