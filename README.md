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
 - const heading= React.createElement("h1",{},"Hello from REACT" );
   const root = ReactDOM.createRoot(document.getElementById("root"));
   root.render(heading);

 - (for nested child)
   - const parent = React.createElement("div",{id:"parent"},
    React.createElement("div",{id:"child"},
        [React.createElement("h1",{},"hello h1 tag"),
        React.createElement("h2",{},"hello h2 tag")]
    )
)

const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

- Console.log(heading) : it gives heading as a object , and when heading is rendered on root it is converted int HTML file 
- React.createElement(object)  ===>  HTML(Browser understands)
   

# Episode 2 

- Package.json is the configuration for "NPM"

# adding packages and dependencies into our application

- npm init ( initialising npm , it gives package.json file to us )
- npm install -D parcel ( installing parcel[bundler] into our app through npm)
- transitive dependencies (eg: we need parcel as a dependency in our project, but parcel also have its own dependecies and      these dependencies can have their own dependencies , this is called transitive dependency )
- In project we dont have only only one package.json and package-lock.json , each dependency (eg:parcel) have its own package.  json and package-lock.json as it has its own dependencies.
- node modules should not be added to git , because it can be regenerated through (npm install)
- package.json and package-lock.json should be added to git because they are important files containing the dependency and its exact version in package-lock.json.

- node_modules: The actual code of all dependencies your project needs to run.
- package-lock.json: A detailed map of exactly what should be in node_modules, ensuring consistent installs across different environments.

- import React from "react" ,"react-dom" ( we are importing these from the node-module).
- dist folder , .parce-cache can be re-generated during the build process. so, we can put these into .gitignore file.

# Episode_03

- JSX => Babel transpiles it to react.createElement => React.createElement ->(JS object) => HTML Element (on render)
- React component
  - class based component
  - functional component
- React component is a JS function , which returns some piece of JSX.
- component composition [ component inside compponent is called component composition].
- inside curly braces {}, you can write any JS in react.
