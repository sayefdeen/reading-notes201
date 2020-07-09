# Class 05 Reading Notes.

[HOME](https://sayefdeen.github.io/reading-notes201/)

---

## Chapter 5 HTML book Images.

There are many reasons why you might want ro add an image to a web page, you might want to include a logo, photograph, illustration, diagram, or chart.

If you are building a site from scratch, it is good practice to create a folder for all of the images the site uses. As a website grows, keeping images in a separate folder helps you understand how the site is organized. Images should be :

- Be relevant
- Convy information
- Convey the right mood
- Be instantly recognisable
- Fit the color palette

```html
<img
  src="images/quokka.jpg"
  alt="A family of   quokka"
  title="The quokka is an Australian   marsupial that is similar in size to the   domestic cat."
/>
```

<img src="img/quokka.jpg" alt="A family of   quokka" title="The quokka is an Australian   marsupial that is similar in size to the   domestic cat." align="left" style="margin: 10px;"/>

`src`: This tells the browser where
it can find the image file. This will usually be a relative URL pointing to an image on your own site.

`alt`:This provides a text description of the image which describes the image if you cannot see it.

`title` : You can also use the title attribute with the `<img>`element to provide additional information about the image.

`align` : tou can choose between left,right,middle,bottom,and top.

it is really rocmended that you should place it at :

- before a paragraph The paragraph starts on a new line after the image.
- InsIde the start of a paragraph
  The first row of text aligns with the bottom of the image.
- In the mIddle of a paragraph
  The image is placed between the words of the paragraph that it appears in.

### Three rules to create a picture.

1.  Save the images in the right format , jpeg,gif, or png formats.
2.  Save the images at the right size
3.  Use the correct resolution.

**Example on the gif pictuers**

```html
<img
  src="img/coding-cat.gif"
  alt="A Funny gif"
  title="Students at 5 PM"
  align="middle"
  style="margin: 10px;"
/>
```

<img src="img/coding-cat.gif" alt="A Funny gif" title="Students at 5 PM" align="middle" style="margin: 10px;"/>

**HTML5 Figure and Figure caption.**

`<figure>`:Images often come with captions. HTML5 has introduced a new `<figure>` element to contain images and their caption so that the two are associated. you can have more than one image in the `<figure>` tag, you can say it is like the container.

`<figcaption>` : The `<figcaption>` element has been added to HTML5 in order to allow web page authors to add a caption to an image.

Example:

```html
<figure>
  <img
    src="img/otters.jpg"
    alt="Photograph of   two sea otters floating in water"
  />
  <br />
  <figcaption>
    Sea otters hold hands when they sleep so they don't drift away from each
    other.
  </figcaption>
</figure>
```

<figure>
  <img
    src="img/otters.jpg"
    alt="Photograph of   two sea otters floating in water"
  />
  <br />
  <figcaption>
    Sea otters hold hands when they sleep so they don't drift away from each
    other.
  </figcaption>
</figure>

---

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

## Chapter 12 HTML book Text.

There is 3 main types of default fonts in general.

- Serif : <p style="font-family: serif; ">Serif fonts have extra details on the ends of the main strokes of the letters. These details are known as serifs</p>.

- Sans-serif : <p style ="font-family: sans-serif;">Sans-serif fonts have straight ends to letters, and therefore have a much cleaner design.</p>

- Monospace : <p p style ="font-family: monospace;">Every letter in a monospace (or fixed-width) font is the same width. (Non-monospace fonts have different widths.)</p>

These fonts and many others are installed in your computer by default, but what if i want to use a font that is not intalled?

```css
@font-face {
  font-family: "ChunkFiveRegular";
  src: url("fonts/chunkfive.eot");
}
h1,
h2 {
  font-family: ChunkFiveRegular, Georgia, serif;
}
```

as shown above you can use something called `@font-face` this makes you define a new font family with its url and source, then you can use it freely in any selector you want.

Some important properties for text :

`font-weight : bold/normal` : it makes your text <span style="font-weight : bold">bold</span> ir normal.

`font-style : normal/italic/oblique` : it makes your text appear normal, <span style="font-style : italic">italic</span>, and <span style="font-style : obliqu">obliqu</span>

`text-transform : uppercase/lowercase/capitalize` it makes you text , <span style = "text-transform : uppercase" > uppercase</span> , <span style = "text-transform : lowercase" > LOWERCASE</span> , <span style = "text-transform : capitalize" > capitalize</span>.

`text-decoration : none/underline/overline/line-through/blink` it makes you text , <span style = "text-decoration: none" > none</span> , <span style = "text-decoration : underline" > underline</span> , <span style = "text-decoration : overline" > overline</span>,
<span style = "text-decoration: line-through" > line through</span> , <span style = "text-decoration : blink" > blink</span>

`line-height` : take a unit like 5px of 1.5 just like WORD , it gives a space between each line.

`letter-spacing/word-spacing` : <span style = "letter-spacing: 5px" > letter spacing</span>

<span style = "word-spacing: 5px" > This Text has normal space</span>

`text-align: left/right/justify/center` :

<p style = "text-align: left" > This Text has left align</p>  
<p style = "text-align: right" > This Text has right align</p>  
<p style = "text-align: center" > This Text has center align</p>  
<p style = "text-align: justify" > This Text has justify align</p>

`text-shadow` :

<p style = "background-color: #cccccc;
color: #ffffff;
text-shadow: 2px 2px 7px #111111;" > This Text has shadow </p>

| Selector  |                                          meaning                                          | example                                                                                  |
| :-------: | :---------------------------------------------------------------------------------------: | ---------------------------------------------------------------------------------------- |
| existence |                             [ ] Matches a specific attribute                              | p[class] select all p with class attribute                                               |
| equality  |                  [=] Matches a specific attribute with a specific value                   | p[class="dog"] select all p with attribut class has a value of dog                       |
|   Space   | [~=] Matches a specific attribute whose value appears in a space- separated list of words | p[class~="dog"] select all p with attribute class and has a seperated value contains dog |  |
|  prefix   |        [^=] Matches a specific attribute whose value begins with a specific string        | p[attr^"d"] select all p with an attribute begins with d letter                          |
| Substring |        [*=] Matches a specific attribute whose value contains a specific substring        | p[attr*"do"] select any p with and attribute has a value contains the letter do          |
|  Suffix   |         [$=] Matches a specific attribute whose valu ends with a specific string          | p[attr$"g"] targer any p with an attribute has a vale ends with the letter g             |
