import React from "react";
import ReactDOM from "react-dom/client"

React.createElement("child", { id: "child" }, React.createElement("h1", {}, "hello World"));
const parent = React.createElement("div", { id: "parent" }, [
    React.createElement("div", { id: "child" }, [
        React.createElement("h1", {}, "hello World"),
        React.createElement("h1", {}, "hello World"),
    ]),
    React.createElement("div", { id: "child2" }, [
        React.createElement("h1", {}, "hello World"),
        React.createElement("h1", {}, "hello World"),
    ]),

]);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent); 