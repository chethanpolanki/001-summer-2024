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

# CSS

## Designing a Webpage

```html
<html>
<head>
<title>My ePortfolio</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            padding-bottom: 50px; /* Add padding to make space for the footer */
        }

        .container {
            width: 100%;
            margin: 0 auto;
            background-color: #e9e49b;
        }

        header {
            background-color: #246c0c;
            padding: 10px 0px 50px 0px;
        }

        nav ul {
            list-style: none;
            padding: 0;
            display: flex;
            justify-content: right;
        }

        .menu-item {
            display: inline-block;
            padding: 5px 10px;
            border: 2px solid white;
            border-radius: 5px;
            margin: 0 15px;
        }

        nav ul li a {
            color: white;
            text-decoration: none;
            font-weight: bold;
        }

        .welcome-section {
            text-align: center;
            padding: 20px;
        }

        .welcome-section h1 {
            margin-bottom: 10px;
            font-size: 24px;
            color: #246c0c;
        }

        .welcome-section p {
            color: #333;
        }

        .circular-image {
            border-radius: 50%;
            width: 100%;
            height: auto;
            display: block;
        }

        .cards-section {
            display: flex;
            justify-content: space-around;
            padding: 20px;
        }

        .card {
            background-color: #fff;
            padding: 20px;
            border: 1px solid #246c0c;
            border-radius: 10px;
            text-align: center;
            width: 25%;
        }

        .card img {
            width: 100%;
            height: auto;
            margin-bottom: 10px;
        }

        .card h4 {
            color: #246c0c;
        }

        .card p {
            color: #333;
        }

        .card a {
            display: inline;
            margin-top: 10px;
            text-decoration: none;
            font-weight: bold;
        }

        .combined-section {
            padding: 20px;
            background-color: #e9e49b;
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
        }

        .combined-section .about {
            width: 70%;
            background-color: #f9f9f9;
            border-radius: 12%;
            padding: 20px;
            text-align: justify;
        }

        .combined-section .about h2 {
            color: #246c0c;
        }

        .combined-section .about p {
            color: #333;
        }

        .combined-section .articles {
            margin-top: 1.5%;
            width: 25%;
            background-color: #f9f9f9;
            border-radius: 20% 0% 20% 0%;
            border-color: 2px solid #246c0c;
            
        }

        .combined-section .articles h2 {
            color: #246c0c;
            margin-left: 5%;
        }

        .combined-section .articles ul {
            list-style: none;
            padding: 0;
            margin-left: 5%;
        }

        .combined-section .articles ul li {
            margin-bottom: 10px;
        }

        .combined-section .articles ul li a {
            color: #246c0c;
            text-decoration: none;
        }

        .combined-section .articles img {
            width: 100px;
            height: auto;
        }

        footer {
            background-color: #246c0c;
            color: white;
            text-align: left;
            padding: 10px 0px 10px 100px;
            width: 90%;
            margin: 10% auto;
            position: flex;
            bottom: 0;
            left: 0;
            right: 0;

        }
    </style>
</head>
<body>
    <div class="container">
        <header>
            <nav>
                <div class="button-wrapper">
                    <ul>
                        <div class="menu-item">
                            <li><a href="#">Home</a></li>
                        </div>
                        <div class="menu-item">
                            <li><a href="#">About</a></li>
                        </div>
                        <div class="menu-item">
                            <li><a href="#">Portfolio</a></li>
                        </div>
                        <div class="menu-item">
                            <li><a href="#">Contact</a></li>
                        </div>
                    </ul>
                </div>
            </nav>
        </header>
        <main>
            <section class="welcome-section" style="overflow: auto;">
                <div style="float: left; width: 70%;">
                    <h1 style="border-bottom: 2px solid #246c0c; display: inline;">Welcome to my ePortfolio</h1>
                    <p>Myself Chethan Polanki and this is my E-Portfolio</p>
                </div>
                <div style="float: right; width: 30%;">
                    <img src="greenglobe.png" alt="Globe" class="circular-image">
                </div>
            </section>
            <section class="cards-section">
                <div class="card">
                    <h4>See My Portfolio</h4>
                    <img src="eportfolio.jpg" alt="Portfolio">
                    <p>Mauris condimentum ...</p>
                    <a href="#">MORE</a>
                </div>
                <div class="card">
                    <h4>Checkout My Classwork</h4>
                    <img src="design.jpg" alt="Classwork">
                    <p>Mauris condimentum ...</p>
                    <a href="#">MORE</a>
                </div>
                <div class="card">
                    <h4>Read More About Me</h4>
                    <img src="me.png" alt="This is me">
                    <p> congue maximus...</p>
                    <a href="#">MORE</a>
                </div>
            </section>
            <section class="combined-section">
                <div class="about">
                    <h2>Why I Love Web Design</h2>
                    <p>Web Design is so awesome! I can design pages for people and use my artistic abilities and computer skills and instantly create something that anyone in the world can see! My first love is <b>Graphic Design</b>. I love how a good layout can lead to an eye catching creation that communicate an organization’s message. My second love is technology. It’s constantly change, it’s constantly evolving which forces me to be constantly learning new things. For me Web Design is the perfect marriage between both loves! I am constantly adding to my portfolio of design and learning how to create web pages that people want to visit. Web design is my way of continuing learning how to take art off the page and put it on the web for the world.</p>
                </div>
                <div class="articles" style="border: #246c0c 2px solid;">
                    <h2>Article on Web Design</h2>
                    <ul>
                        <li style="border-bottom:1px  solid black ;"><a href="#">Article on Web design with a link to external page</a></li>
                        <li style="border-bottom:1px solid black;"><a href="#">Article on Web design with a link to external page</a></li>
                        <li><a href="#">Article on Web design with a link to external page</a></li>
                    </ul>
                </div>
            </section>
        </main>
        <footer>
            <p>Site designed by: Polanki Chethan Reg. No: 20BCT0302<br>Summer Semester<br>VIT University, Vellore</p>
        </footer>
    </div>
</body>
</html>

```

## BOX Animations And CSS Block Model with Examples

[PPT Uploaded By Maam](https://github.com/chethanpolanki/001-summer-2024/blob/78bb5d6cb6f20400361afa778544188f92c6e264/VTOP%20Uploads/CoursePage-Material_SUMSEM2023-24_CSE2015_ETH_VL2023240700502_13647_2024-06-14_17-30-56/SUMSEM2023-24_CSE2015_ETH_VL2023240700502_2024-05-27_Reference-Material-I.pdf)
