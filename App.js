import React from "react";
import ReactDOM from "react-dom/client";

//  const heading= React.createElement("h1",{},"Hello from REACT" );
//  const root = ReactDOM.createRoot(document.getElementById("root"));
//  root.render(heading);

{/* <div id="parent">
    <div id="child">
        <h1>Hello h1 tag</h1>
        <h>Hello h2 tag</h>
    </div>
</div> */}

const parent = React.createElement ("div",{id:"parent"},
    React.createElement("div",{id:"child"},
        [React.createElement("h1",{},"hello h1 tag"),
        React.createElement("h2",{},"hello h2 tag")]
    )
)

const root= ReactDOM.createRoot(document.getElementById("root"));
console.log(root)
root.render(parent);
