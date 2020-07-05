# Read02 Reading Notes.

[HOME](https://sayefdeen.github.io/reading-notes201/)

## Chapter 2 Text.

---

When creating a web page, you add tags (known as markup) to the content of the page. These tags provide exxtra meaning and allow browsers to show users the appropriate structure for the page.

- Structural markup : the elemnts that you can user to describe both headings and paragraphes.

- Semantic markup : which provides extra information; such as where emphasis is placed in a sentence, that something you have written is a quotation (and who said it), the meaning of acronyms, and so on.

|      Tags      |      Name       |                                                 Usage                                                 |
| :------------: | :-------------: | :---------------------------------------------------------------------------------------------------: |
| `<h1> to <h6>` |    Headings     |                 using to tell the browesr that the test between the tags is a header                  |
|     `<p>`      |   Paragraphs    | To create a paragraph, surroung the words that make up the paragraph with opening tag and closing tag |
|     `<b>`      |      bold       |                       The character between these tags are shown <br>bold</br>                        |
|     `<i>`      |     italic      |                        he character between these tags are shown <i>italic</i>                        |
|    `<sup>`     |   superscript   |                              it shows charachter like this 2<sup>2</sup>                              |
|    `<sub>`     |    subscript    |                              it shows charachter like this 2<sub>2</sub>                              |
|    `<br/>`     |      break      |                         make a new line it it was inserted infront of any tag                         |
|    `<hr/>`     | horizontal rule |                                           put a line <hr/>                                            |
|   `<strong>`   |     strong      |                      shows that the content is strong <strong>important</strong>                      |
|     `<em>`     |    emphasis     |                   indicates emphasis that subtly changes the meaning of a sentence.                   |
| `<blockquote>` |   block qoute   |                      is used for longer quotes that take up an entire paragraph                       |
|     `<q>`      |     quotes      |                        is used for shorter quotes that sit within a paragraph                         |
|    `<abbr>`    |  abbreviation   |                A title attribute on the opening tag is used to specify the full term.                 |
|    `<cite>`    |    citation     |            When you are referencing a piece of work such as a book, film or research paper            |
|    `<dfn>`     |    defining     |                            The first time you explain some new terminology                            |
|  `<address>`   |     address     |                        to contain contact details for the author of the page.                         |
|    `<ins>`     |    inserted     |                        to show content that has been inserted into a document                         |
|    `<del>`     |     delete      |                         can show text that has been deleted from a document.                          |
|     `<s>`      |                 | element indicates something that is no longer accurate or relevant (but that should not be deleted).  |

### Exapmle

```html
<html>
  <head>
    <title>Text</title>
  </head>
  <body>
    <h1>The Story in the Book</h1>
    <h2>Chapter 1</h2>
    <p>
      Molly had been staring out of her window for about an hour now. On her
      desk, lying between the copies of <i>Nature</i>, <i>New Scientist</i>, and
      all the other scientific journals her work had appeared in, was a well
      thumbed copy of <cite>On The Road</cite>. It had been Molly's favorite
      book since college, and the longer she spent in these four walls the more
      she felt she needed to be free.
    </p>
    <p>
      She had spent the last ten years in this room, sitting under a poster with
      an Oscar Wilde quote proclaiming that
      <q>Work is the refuge of people who have nothing better to do</q>.
      Although many considered her pioneering work, unraveling the secrets of
      the llama <abbr title="Deoxyribonucleic acid">DNA</abbr>, to be an
      outstanding achievement, Molly <em>did</em> think she had something better
      to do.
    </p>
  </body>
</html>
```

## Chapter 10 Introduction CSS.
