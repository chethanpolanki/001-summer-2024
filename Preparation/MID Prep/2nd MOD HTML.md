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

>[!WARNING]
> Refer to the class notes for the Video and Audio hyperlinks.

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

### `<id>` Attribute

```html
<!-- using id attribute to create a bookmark-->
<h2 id="C4">Chapter 4</h2> 
<!-- add a link to the bookmark ("Jump to Chapter 4"), from within the same page: -->
<a href="#C4">Jump to Chapter 4</a>
<!-- also add a link to a bookmark on another page: -->
<a href="html_demo.html#C4">Jump to Chapter 4</a>
```

## 1.2 Tables

>[!NOTE]
>`<table>` - creating a table
>`<tr>` - Table Row
>`<th>` - Table Header
>`<td>` - Table Data

```html
<!-- 
First initialising table
then <tr> every line
    in first line alone <th> for table header
    this structure is followed 
-->
<table>
  <tr>
    <th>Company</th>
    <th>Contact</th>
    <th>Country</th>
  </tr>
  <tr>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td>Germany</td>
  </tr>
  <tr>
    <td>Centro comercial Moctezuma</td>
    <td>Francisco Chang</td>
    <td>Mexico</td>
  </tr>
</table>
```

```text
<caption> Defines a table caption
<colgroup> Specifies a group of one or more columns in a table for formatting
<col> Specifies column properties for each column within a <colgroup> element
<thead> Groups the header content in a table
<tbody> Groups the body content in a table
<tfoot> Groups the footer content in a table
```

```css
/* In CSS */
/* Normal 2 line border - border for every cell */
table, th, td {
  border: 1px solid black;
}

/* Single line border called collapse */
table, th, td {
  border: 1px solid black;
  border-collapse: collapse;
}

/* Cell Background */
table, th, td {
  border: 1px solid white;
  border-collapse: collapse;
}
th, td {
  background-color: #96D4D4;
}

/* Curved Radius */
table, th, td {
  border: 1px solid black;
  border-radius: 10px;
}

/* Skip the border around the table by leaving out table from the css selector */
th, td {
  border: 1px solid black;
  border-radius: 10px;
}

/* others 

dotted     
dashed     
solid     
double     
groove     
ridge     
inset     
outset     
none     
hidden
*/

/* border color */

 th, td {
  border-color: #96D4D4;
}
```

### Table Sizes

>Column height Alter

```html
<table style="width:100%">
  <tr>
    <th style="width:70%">Firstname</th>
    <th>Lastname</th>
    <th>Age</th>
  </tr>
  <tr>
    <td>Jill</td>
    <td>Smith</td>
    <td>50</td>
  </tr>
  <tr>
    <td>Eve</td>
    <td>Jackson</td>
    <td>94</td>
  </tr>
</table>
```

>Row height Alter

```html
<table style="width:100%">
  <tr>
    <th>Firstname</th>
    <th>Lastname</th>
    <th>Age</th>
  </tr>
  <tr style="height:200px">
    <td>Jill</td>
    <td>Smith</td>
    <td>50</td>
  </tr>
  <tr>
    <td>Eve</td>
    <td>Jackson</td>
    <td>94</td>
  </tr>
</table>
```

> Vertical Table Align

```html
<table>
  <tr>
    <th>Firstname</th>
    <td>Jill</td>
    <td>Eve</td>
  </tr>
  <tr>
    <th>Lastname</th>
    <td>Smith</td>
    <td>Jackson</td>
  </tr>
  <tr>
    <th>Age</th>
    <td>94</td>
    <td>50</td>
  </tr>
</table>

<!-- css -->
<!-- to align text -->
th {
  text-align: left;
}
```
>[!IMPORTANT]
>`colspan` attribute on the `<th>` element

```html
<table>
  <tr>
    <th colspan="2">Name</th>
    <th>Age</th>
  </tr>
  <tr>
    <td>Jill</td>
    <td>Smith</td>
    <td>50</td>
  </tr>
  <tr>
    <td>Eve</td>
    <td>Jackson</td>
    <td>94</td>
  </tr>
</table>
```

>[!IMPORTANT]
>ROW SPAN

```html
<table>
  <tr>
    <th>Name</th>
    <td>Jill</td>
  </tr>
  <tr>
    <th rowspan="2">Phone</th>
    <td>555-1234</td>
  </tr>
  <tr>
    <td>555-8745</td>
</tr>
</table>
```

```css
/*  Padding */
th, td {
  padding-top: 10px;
  padding-bottom: 20px;
  padding-left: 30px;
  padding-right: 40px;
}

/* Border Spacing */
table {
  border-spacing: 30px;
}

/* Combine Vertical and Horizontal Zebra Stripes */
td:nth-child(even), th:nth-child(even) {
  background-color: #D6EEEE;
}

/* hover */
tr:hover {background-color: #D6EEEE;}
```

## 1.3 Lists

```text
1. Ordered Lists
2. Unordered lists
3. Description Lists
```

```html
<!-- Unordered List -->
 <!-- li - List Items -->
<ul>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ul>
```

```html
<ol>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ol>
```

```html
<!--
Descriptive List
Description Title
Description Data 
-->
<dl>
  <dt>Coffee</dt>
  <dd>- black hot drink</dd>
  <dt>Milk</dt>
  <dd>- white cold drink</dd>
</dl>
```

```html
<!-- disc - Sets the list item marker to a bullet (default)
circle - Sets the list item marker to a circle
square - Sets the list item marker to a square
none - The list items will not be marked -->

<ul style="list-style-type:disc;">
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ul>
```

```html
<!-- Horizontal List with CSS -->
<!-- Useful for Website -->
<!DOCTYPE html>
<html>
<head>
<style>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333333;
}

li {
  float: left;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 16px;
  text-decoration: none;
}

li a:hover {
  background-color: #111111;
}
</style>
</head>
<body>

<ul>
  <li><a href="#home">Home</a></li>
  <li><a href="#news">News</a></li>
  <li><a href="#contact">Contact</a></li>
  <li><a href="#about">About</a></li>
</ul>

</body>
</html>
```

```html
<!-- type="1" The list items will be numbered with numbers (default)
type="A" The list items will be numbered with uppercase letters
type="a" The list items will be numbered with lowercase letters
type="I" The list items will be numbered with uppercase roman numbers
type="i" The list items will be numbered with lowercase roman numbers -->

<ol type="1">
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ol>
```

```html
<!-- start wherever you want -->
<ol start="50">
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ol>
```
