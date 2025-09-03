const { jsx } = require("react/jsx-runtime");

const h1 = React.createElement("h1", { id: "heding", className: "heading1" }, "Hello React");//It creates a javascript object
// React.createElement() is a React method that returns a React element, which is a plain JavaScript object describing the type of element (like h1, div, or a component), its attributes (props), and its children. It does not create a real DOM element directly; instead, React uses this object to later render and update the actual DOM efficiently.
console.log(h1)//Js object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(h1); 