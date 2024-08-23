# About the HTML emmet 
- <head>: Information about the webpage (meta tags, styles, scripts, title)
- <body>: The actual content of the webpage (text, images, buttons, etc.)
- <!DOCTYPE html>
  - It specifically declares that the document is written in HTML5, which is the latest version of HTML.
  - The DOCTYPE declaration ensures that the browser renders the page correctly according to the HTML5 standards. Without it, browsers might render the page in "quirks mode," where they try to be backward-compatible with older versions of HTML, potentially leading to unexpected behavior or layout issues.
  - Unlike most HTML elements, <!DOCTYPE html> is not a tag. It doesn’t have a closing tag, and it’s not part of the HTML structure (head, body, etc.). It’s just a declaration.
  - quirks mode (A browser mode for rendering older web pages that may not follow modern web standards.)

# Writing hello world with HTML,JS,REACT

- HTML
  -  <div id="root">
       <h1>Hello world from HTML</h1>
    </div>

- JAVASCRIPT
 - <script>
      const heading=document.createElement("h1");
      heading.innerHTML="Hello world from Javascript";
      const root=document.getElementById("root");
      root.appendChild(heading);
    </script>

- REACT
 - 