# Class-01 Notes.

## 1. How the Web Works?

when you visit a website, the web server hosting that site cuold be anywhere in the world. In order for you to fine the location of the web server, your browser will first conncet to a domain Name System (DNS) server.

1. when you connect to the web, you do so via an internet service provider (ISP), you type the domain name or web address into your browser.

2. Your computer contacts a network of servers called Domain Name System (DNS) servers. These act like phone books; they tell your computer the IP address associated with the requested domain name.

3. The unique number that the DNS server returns to your computer allows your browser to contact the web server that hosts the website you requested.

4. The web server then sends the page you requested back to your web browser.

## 2. Chapter 1 Structure

In this chapter you will understand structure, learning about markup, tags and elements.

on each story you read in newspaper, there will be a headline, some text, and possibly some images. if the article is a long piece there may be a subheadings that split the story into seperate sections or qoutes from those involved. Structure helps readers understand the storied in the newspaper.

```html
<html>
  <body>
    <h1>This is the main Heading</h1>
    <p>This text migh be an intrudoction to the rest of the page</p>
    <h2>This is a Sub-Heading</h2>
    <p>
      Many long articles have sub-Headings so to help you follow the structure
      of what is being written
    </p>
    <h2>Another Sub- Heading</h2>
    <p>Here you can see another sub-heading</p>
  </body>
</html>
```

The HTML code (blue) is made up of characters that live inside angled brackets-these are called HTML elements. these elements are usually made of two tags `<>` opening tag and `</>` closing tag. Tags act like containers, they tell you something about the information that lies between their opening and closing tags.

**Closer Look at tags**

```html
<p lang="en-us">Paragraph In English</p>
```

- `<p>` : opening tag
- `</p>`: closing tag
- `lang`: Arrtibute Name
- `en-us` : Attribute value

* `<body>` : Everything inside this element is shown isnide the main browser window
* `<head>` : This contain information about the page you will usually fine `<title>` element inside it, this tag appear above `<bodt>` tag.
* `<title>` this contain the title of the page which shown in the top of the browser.

### How to create a web page?

- open NotePad.
- copy and paste the structure above.
- save you file as a html file.
- open the file in your browser.

### How to see the structure of the page?

Go to any web page you want to see its code, then right click in any empty space, then click in **_View Page source_**.

## 3. Chapter 8 Extra Markup
