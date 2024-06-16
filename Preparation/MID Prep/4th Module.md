# Module 4

## AJAX

- What is AJAX
  - Async JS and XML
  - No a standalone language or technology
  - It is a technique that combines a set of known languages in order to create faster and more friendly web pages
  - It's a client Side Technology
- Purpose of AJAX
  - Prevents unnecessary reloading of the page
  - When we submit a form, although most of the page remains the same, whole page is reloaded from the server
  - This causes very long waiting times and waste of bandwidth
  - AJAX aims at the loading only the necessary information, and making only the necessary changes on the current page without reloading the Whole Page
- Technologies Used
  - JS (for Altering the page)
  - XmL (For Information Exchange)
  - ASP or JSP (server side)
- Data Exchange in AjAX

AJAX, which stands for Asynchronous JavaScript and XML, is a technique used in web development to create asynchronous web applications. This allows web pages to be updated asynchronously by exchanging small amounts of data with the server behind the scenes. This means that it is possible to update parts of a web page without reloading the entire page.

Here's a breakdown of the basic request and response of AJAX, including the functions involved:

Components of AJAX
XMLHttpRequest Object: This is the key component for making an asynchronous request to the server. Despite its name, it can be used to retrieve any type of data, not just XML, and can handle responses in various formats like JSON, XML, HTML, or plain text.

Server-side Script: A script on the server (such as PHP, ASP.NET, Node.js, etc.) that processes the request and sends back a response.

JavaScript: The language used to create and manage the AJAX request, handle the server response, and update the web page dynamically.

Basic Request and Response Flow
Creating an XMLHttpRequest Object: This initializes the AJAX request.
Configuring the Request: Setting up the request type (GET/POST), URL, and whether the request should be asynchronous.
Sending the Request: Initiating the request to the server.
Handling the Response: Processing the response received from the server and updating the web page accordingly.
Functions and Example
Here’s a step-by-step example using JavaScript and AJAX to request data from a server and update the web page without reloading it:

1. Creating an XMLHttpRequest Object
javascript
Copy code
let xhr = new XMLHttpRequest();
2. Configuring the Request
javascript
Copy code
xhr.open("GET", "https://api.example.com/data", true);
"GET": The type of request. It can also be "POST" depending on what you're trying to achieve.
"https://api.example.com/data": The URL to which the request is sent.
true: Indicates whether the request should be asynchronous (true for asynchronous, false for synchronous).
3. Sending the Request
javascript
Copy code
xhr.send();
4. Handling the Response
javascript
Copy code
xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
        // Process the server response here
        let data = JSON.parse(xhr.responseText);
        document.getElementById("output").innerText = data.message;
    }
};
xhr.onreadystatechange: This event is triggered every time the readyState property changes.
xhr.readyState: Holds the status of the XMLHttpRequest. Common values are:
0: Request not initialized
1: Server connection established
2: Request received
3: Processing request
4: Request finished and response is ready
xhr.status: The HTTP status code of the response. 200 indicates that the request was successful.
xhr.responseText: Contains the response data as a string.
Complete Example
Here is a complete example that brings all the above components together:

html
Copy code
<!DOCTYPE html>
<html>
<head>
    <title>AJAX Example</title>
</head>
<body>
    <h1>AJAX Example</h1>
    <button id="fetchData">Fetch Data</button>
    <p id="output"></p>

    <script>
        document.getElementById("fetchData").addEventListener("click", function() {
            // Create an XMLHttpRequest object
            let xhr = new XMLHttpRequest();
            
            // Configure the request
            xhr.open("GET", "https://api.example.com/data", true);
            
            // Send the request
            xhr.send();
            
            // Handle the response
            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    let data = JSON.parse(xhr.responseText);
                    document.getElementById("output").innerText = data.message;
                }
            };
        });
    </script>
</body>
</html>
In this example:

When the "Fetch Data" button is clicked, an AJAX request is made to https://api.example.com/data.
The server responds with data, which is then processed and displayed in the <p> element with the ID output.
Summary of Functions
XMLHttpRequest(): Creates a new XMLHttpRequest object.
open(method, url, async): Initializes the request.
send(): Sends the request to the server.
onreadystatechange: Defines a function to be called when the readyState property changes.
readyState: Holds the status of the XMLHttpRequest.
status: Contains the HTTP status code of the response.
responseText: Contains the response data as a string.
This example demonstrates a simple AJAX interaction where the page content is dynamically updated based on the server's response.
