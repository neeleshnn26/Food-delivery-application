import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => JS object => HTML element
// const heading= React.createElement("h1",{},"Hello from react");


// ---------------------Writing JSX--------------------------------
// JSX => Babel transpiles it to react.createElement => React.createElement ->(JS object) => HTML Element (on render)

const jsxHeading= <h1 className="jsx">Hello from JSX heading</h1>


const root= ReactDOM.createRoot(document.getElementById("root"))
root.render(jsxHeading);