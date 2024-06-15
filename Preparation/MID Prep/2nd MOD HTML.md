# Module 2 - HTML and CSS

1. HTML
   1. Different Types of Hyperlinks
   2. Tables
   3. Lists
2. CSS
   1. Designing a web page
   2. Animations/CSS block model with Example

## 1.1 Different Types of Hyperlinks

### `<a>` Anchor Tag - Defines Hyperlink

```html
<a href="url">link text</a>
```

> Target Attribute

```text
_self - opens in same page
_blank - opens in different tab
_parent - opens in the parent frame
_top - opens in the full body of the window
```

```html
<a href="url" target="_blank">link text</a>
```

> Absolute URLs vs. Relative URLs

```html
<h2>Absolute URLs</h2>
<p><a href="https://www.w3.org/">W3C</a></p>
<p><a href="https://www.google.com/">Google</a></p>

<h2>Relative URLs</h2>
<p><a href="html_images.html">HTML Images</a></p>
<p><a href="/css/default.html">CSS Tutorial</a></p>
```

>Email

```html
<a href="mailto:someone@example.com">Send email</a>
```

>Phone

```html
<a href="tel:+4733378901">+47 333 78 901</a>
```

### `<img>` Tag

```html
<a href="url">
<img src="smiley.gif" alt="alt text" style="width:42px;height:42px;">
</a>
```

### `button` Tag

```html
<button onclick="document.location='default.asp'">HTML Tutorial</button>
```

>Title Element

```html
<a href="https://www.w3schools.com/html/" title="Go to W3Schools HTML section">Visit our HTML Tutorial</a>
```

> refer to the class notes for the Video and Audio hyperlinks

### Link Colors

```html
<style>
a:link {
  color: green;
  background-color: transparent;
  text-decoration: none;
}

a:visited {
  color: pink;
  background-color: transparent;
  text-decoration: none;
}

a:hover {
  color: red;
  background-color: transparent;
  text-decoration: underline;
}

a:active {
  color: yellow;
  background-color: transparent;
  text-decoration: underline;
}
</style>
```

## 1.2 Tables

## 1.3 Lists
