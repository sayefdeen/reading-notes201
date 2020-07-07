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
