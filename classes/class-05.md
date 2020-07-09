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
