/**
 * <div id="parent">
        <div id="child">
            <h1>Hello World</h1>
        </div>
    </div>
    ---------------------------------
    <div id="parent">
        <div id="child">
            <h1>Hello World</h1>
            <h1>Hello World</h1>
        </div>
    </div>
    ----------------------------------
    <div id="parent">
        <div id="child">
            <h1>Hello World</h1>
            <h1>Hello World</h1>
        </div>
        <div id="child">
            <h1>Hello World</h1>
            <h1>Hello World</h1>
        </div>
    </div>

 * 
 * 
 * ReactElement(Object) => HTML(Browser Understands);
 */

// const parent = React.createElement("parent", { id: "parent" }, React.createElement("child", { id: "child" }, React.createElement("h1", {}, "hello World")));
// const parent = React.createElement("parent", { id: "parent" }, React.createElement("child", { id: "child" }, [React.createElement("h1", {}, "hello World"),React.createElement("h1", {}, "hello World")]));
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