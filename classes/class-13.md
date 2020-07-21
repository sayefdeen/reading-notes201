# Class 13 Reading Notes.

[HOME](https://sayefdeen.github.io/reading-notes201/)

# The Past, Present & Future of Local Storage for Web Applications.

## Preif.

The need of localStorage were essential to have these benefits:

- A lot of storage space.
- On the client side.
- Persists beyond a page refresh
- Isn't transmitted to the server

It was nessary to over come the usadge of Cookies, of course they could be used for persistent local storage of small amount of data, but they have some dealbreaking downsides:

- They are included with every HTTP request, therby slowing down the web application, therby sending data unencrypted over the internet.

- They are limited to 4 KB of data, enough to slow down your application, but not enought to be terribly useful.

## Introducing HTML5 Storage.

HTML5 Storage in certain browsers vedors also refere to it as "Local Storage" of "Dom Storage".

### What is HTML5 Storage?

It's a way for web pages to store named (key/value) pairs locally, within the client web browser. this data persists even after you navigate away from the web site, close your browser tab, or even exit the browser, This data is never transmitted to the remote web server (Unless you sent them manually).

### Which browser?

Well, the latest version of pretty much every browser supports HTML5 Storage… even Internet Explorer!

| browser | version |
| :-----: | :-----: |
|   IE    |  8.0+   |
| Firefox |  3.5+   |
| Safari  |  4.0+   |
| Chrome  |  4.0+   |
|  Opera  |  10.5+  |
| iPhone  |  2.0+   |
| Android |  2.0+   |

### Check for HTML5 Storage.

You can run this code in your console to check f your browser support the HTML Storage.

```javaScript
if (Modernizr.localstorage) {
  // window.localStorage is available!
  console.log("Supported");
} else {
    console.log("Not Supported");
  // no native support for HTML5 storage :(
  // maybe try dojox.storage or a third-party solution
}
```

## Using HTML5 Strorage.

HTML5 Storage is based on named (key/value) pairs. You store data based on a named key, then you can retrieve that data with the same key. The named key is a string, the data is actually stored as a string. If you are storing and retrieving anything other than strings, you will need to use functions like parseInt() or parseFloat() to coerce your retrieved data into the expected JavaScript datatype.

Like other JavaScript objects, you can treat the localStorage object as an associative array, you can use "dot notation" or "brackets notation", we have multiple methods such as

- setItem(key,value).
- getItem(key).
- removeItem(key).

If you called getItem() method and gave it a key that is not exist in localStorage, it will return null.

if you calles removeItem() method and gace it a key that is not exist in localStorage, it will do nothind

```javascript
localStorage.setItem("bar", "5 meters");
var value = localStorage.getItem("bar");
// bar is the key of the first item
// 5 meters is the value of the key.
```

## Tracking Changes to the HTML5 Storage Area.

If you want to keep track programmatically of when the storage area changes, you can trap the storage event. The storage event is fired on the window object whenever setItem(), removeItem(), or clear() is called and actually changes something.

```javascript
if (window.addEventListener) {
  window.addEventListener("storage", handle_storage, false);
} else {
  window.attachEvent("onstorage", handle_storage);
}

function handle_storage(e) {
  if (!e) {
    e = window.event;
  }
}
```

**StorageEvent Object**

| Property |  Type  |                              Description                              |
| :------: | :----: | :-------------------------------------------------------------------: |
|   key    | string |          the named key that was added, removed, or modified           |
| oldValue |  any   | the previous value (now overwritten), or null if a new item was added |
| newValue |  any   |             the new value, or null if an item was removed             |
|   url    | string |       he page which called a method that triggered this change        |

Note: the url property was originally called uri. Some browsers shipped with that property before the specification changed. For maximum compatibility, you should check whether the url property exists, and if not, check for the uri property instead.
