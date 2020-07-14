# Class 08 Reading Notes.

[HOME](https://sayefdeen.github.io/reading-notes201/)

## Chapter 15 HTML Layout.

We already talked about chapter 15 in [class-04](https://sayefdeen.github.io/reading-notes201/classes/class-04), page 358-364 but we will continue where we lift.

1. Noraml Flow : `position : static;` In normal flow, each block-level element sits on top of the next one. Since this is the default way in which browsers treat HTML elements, you do not need a CSS property to indicate that elements should appear in normal flow

2. Relative positions : `position : relativ;` Relative positioning moves an element in relation to where it would have been in normal flow. by using the offset properties (top or bottom and left or right).

3. Absolute positionsing : `position:absolute;` When the position property is given a value of absolute, the box is taken out of normal flow and no longer affects the position of other elements on the page

4. Fixed positiosing : `position:fixed;` Fixed positioning is a type of absolute positioning that requires the position property to have a value of fixed.

5. OverLaping Elements: `z-index;` When you use relative, fixed, or absolute positioning, boxes can overlap. If boxes do overlap, the elements that appear later in the HTML code sit on top of those that are earlier in the page, you can use z-index to control which element sits on top. from (0-10)

6. Floating Elements : `float` The float property allows you to take an element in normal flow and place it as far to the left or right of the containing element as possible.

---

## Screen Sizes.

Different visitors to your site will have different sized screens that show different amounts of information, so your design needs to be able to work on a range of different sized screens.
