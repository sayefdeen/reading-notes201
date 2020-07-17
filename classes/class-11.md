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

---

## Cahpter 19 HTML book Practical Information.

This chapter talking about some practical information that will help the developer to lunch a successful site.

### Search Engine Optimization (SEO).

Search engine optimization (or SEO) is the practice of trying to help your site appear nearer the top of search engine results when people look for the topics that your website covers.

In order to determine who comes first in the search results, **search engines do not only look at what appears on your site. They also consider how many sites link to you (and how relevant those links are)**. For this reason, SEO is often split into two areas.

1. On-Page Techniques.

Its the methods you can user on your web pages to improve their rating in search engines, The main component of this is looking at **keywords that people are likely to enter into a search engine if they wanted to find your site**, and then including these in the text and HTML code for your site in order to help the search engines know that your site covers these topics.

2. Off-page Techniques.

Getting other sites to link to you is just as important as on-page techniques. Search engines help determine how to rank your site by looking at the number of other sites that link to yours.

<p style="color:red; font-size:15px">Search engines also look at the words between the opening (a) tag and closing (a) tag in the link. If the text in the link contains keywords (rather than just click here or your website address) it may be considered more relevant.</p>

### On-Page SEO.

In every page of your website there are seven key places where keywords (the words people might search on to find your site) can appear in order to improve its findability.

- Page Title.

The page title appears at the top of the browser window or on the tab of a browser it is specified in the `<title>` element which lives inside the `<head>` element.

- URL / Web Address.

The name of the file is part of the URL. Where possible, use keywords in the file name.

- Headings.

If the keywords are in a heading `<h1-h6>` element then a search engine will know that this page is all about that subject and give it greater weight than other text.

- Text.

Where possible, it helps to repeat the keywords in the main body of the text at least 2-3 times. Do not, however, over-use these terms, because the text must be easy for a human to read.

- Link Text.

Use keywords in the text that create links between pages (rather thatn using generic expression such as "click here").

- Image Alt Text.

Search engins rely on you providing accurate description of images in the aly text, this will also help your images show up in the result of image-based searches.

- Page Descriptions.

The description also lives inside the `<head>` element and is specified using a `<meta>` tag. It should be a sentence that describes the content of the page. (These are not shown in the browser window but they may be displayed in the results pages of search engines.)

#### How to identify keywords and phrases.

Determining which keywords to use on your site can be one of the hardest tasks when you start to think about SEO.

1. **Brainstorm** : List down the words that someone might type into Google to find your site. Be sure to include the various topics, products or services your site is about.

2. **Organize** : Group the keywords into separate lists for the different sections or categories of your website.

3. **Research** : There are several tools that let you enter your keywords and then they will suggest additional keywords you might like to consider, such as:

   - [Word Tracker](www.wordtracker.com).
   - [Keyword Discovery](www.keyworddiscovery.com).

4. **Compare** : It is very unlikely that your
   site will appear at the top of the search results for every keyword. This is especially true for topics where there is a lot of competition, Some of the keyword research sites can tell you how many people have searched for a specific keyword to help you know how much competition those terms have.

5. **Refine** : If there is a phrase that is very relevant but you find there is a lot of competition, you should still use it. To improve the chances of your site being found you can look at whether there are other words that could be incorporated into a phrase

6. **Map** : Pick 3-5 keywords or phrases that map to each page of your website and use these as the keywords for each page.

### Analytics : Learning About your visitors.

As soon as people start coming to your site, you can start analyzing how they found it, what they were looking at and at what point they are leaving. One of the best tools for doing this is a free service offered by Google called **Google Analytics**.

The Google Analytics service relies on you signing up for an account at: [Google Analytics](https://analytics.google.com/analytics/web/provision/#/provision) The site will give you a piece of tracking code which you need to put on every page of your site.

A tracking code is provided
by Google Analytics for each website you are tracking. It should appear just before the closing `</head>` tag. The code does not alter the appearance of your web pages.

### Analytics : how many People are coming to your site?

1. **Visits** : This is the number of times people have come to your site. If someone is inactive on your site for 30 minutes and then looks at another page on your site, it will be counted as a new visit.

2. **Unique Visits** : This is the total number of people who have visited your site over the specified period. The number of unique visits will be lower than the number of visits if people have been returning to your site more than once in the defined period.

3. **Page Views** : The total number of pages all visitors have viewed on your site.

4. **Pages per Visit** : The average number of pages each visitors has looked at on your site per visit.

5. **Average Time On Site** : The average amount of time each user has spent on the site per visit.

6. **Date Selector** : Using the date selector in the top right hand corner of the site, you can change the period of time the reports display. When you log in, this is usually set to the last month, but you can change it to report on a specific time period.

7. **Export** : The export link just above the title that says "visitors overview" allows you to export the statistics on this page for other applications such as Excel.

## Video and Audio APIs.

HTML5 comes with elements for embedding rich media in documents `<video>` and `<audio>`

<video controls>
  <source src="img/rabbit320.mp4" type="video/mp4">
  <p>Your browser doesn't support HTML5 video. Here is a <a href="rabbit320.mp4">link to the video</a> instead.</p>
</video>

```javascript
<video controls>
  <source src="img/rabbit320.mp4" type="video/mp4">
  <p>Your browser doesn't support HTML5 video. Here is a <a href="rabbit320.mp4">link to the video</a> instead.</p>
</video>
```

You can review what all the HTML features do in the article linked above; for our purposes here, the most interesting attribute is `controls`, which enables the default set of playback controls. If you don't specify this, you get no playback controls.
