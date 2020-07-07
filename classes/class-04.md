# Class 04 Reading Notes.

[HOME](https://sayefdeen.github.io/reading-notes201/)

## Chapter 4 HTML Book Links.

Links are the defining feature of the web because they allow you to mive from one web page to another.

```html
<a href="http://www.imdb.com">IMDB</a>
<!-- Used to Linke ti web pages outside the project -->
<a href="index.html">Home</a>
<!-- Used to Link to another page inside the project -->
```

### Folders Structure.

|        Type        |                                                 Usage                                                  |                     Example                      |
| :----------------: | :----------------------------------------------------------------------------------------------------: | :----------------------------------------------: |
|    Same Folder     |                                  To Link to a file in the same folder                                  |          `<a href="Home.html">Home</a>`          |
|    Child Folder    |                                           for a child folder                                           |       `<a href="html/Home.html">Home</a>`        |
| Grand Child Folder | Use the name of the child folder, a forward slash, grandchild folder,another forward slash, file name. | `<a href="movies/dvd/reviews.html"> Reviews</a>` |
|   Parent Folder    |        Use ../ to indicate the folder above the current one, then follow it with the file name.        |        `<a href="../index.html">Home</a>`        |
| GrandParent Folder |             Repeat the ../ to indicate that you want to go up two folders (rather than one             |      `<a href="../../index.html">Home</a>`       |

### Email Links

Use `mailto` To create a link that starts up the user's email program and addresses an email to a specified email address, you use the `<a>`element. However, this time the value of the href attribute starts with mailto: and is followed by the email address you want the email to be sent to.

`<a href="mailto:jon@example.org">Email Jon</a>`

### Opening Links in a new window.

If you want a link to open in a new window, you can use the target attribute on the opening `<a>` tag. The value of this attribute should be \_blank.

`<a href="http://www.imdb.com" target="_blank"> Internet Movie Database</a>`

### Linking to a specific part of the same page.

in the href attribute you have to use the ide of the section you want to link to.

```html
<h1 id="top">Film-Making Terms</h1>
<a href="#arc_shot">Arc Shot</a><br />
<a href="#interlude">Interlude</a><br />
<a href="#prologue">Prologue</a><br /><br />
<h2 id="arc_shot">Arc Shot</h2>
<p>
  A shot in which the subject is photographed by an encircling or moving camera
</p>
<h2 id="interlude">Interlude</h2>
<p>
  A brief, intervening film scene or sequence, not specifically tied to the
  plot, that appears within a film
</p>
<h2 id="prologue">Prologue</h2>
<p>
  A speech, preface, introduction, or brief scene preceding the the main action
  or plot of a film; contrast to epilogue
</p>
<p><a href="#top">Top</a></p>
```

---

## Chapter 15 HTML book Layout.
