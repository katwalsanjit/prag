/* 
  <div id="parent">
    <div id="child">
      <h2>I'm heading one</h2>
    </div>
  </div>
*/ //const heading = React.createElement("h1", {
// id: "heading"
//}, "Hello world from react"); // 1. tag name, 2. Attributes 3. Children
const parent = React.createElement("div", {
    id: "parent"
}, React.createElement("div", {
    id: "child"
}, React.createElement("h1", {}, "im heading one")));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

//# sourceMappingURL=index.6bd02f5a.js.map
