//  const heading= React.createElement("h1",{},"Hello from REACT" );
//  const root = ReactDOM.createRoot(document.getElementById("root"));
//  root.render(heading);
const parent = React.createElement("div", {
    id: "parent"
}, React.createElement("div", {
    id: "child"
}, [
    React.createElement("h1", {}, "hello h1 tag"),
    React.createElement("h2", {}, "hello h2 tag")
]));
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(root);
root.render(parent);

//# sourceMappingURL=index.6bd02f5a.js.map
