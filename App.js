import React from "react";
import ReactDOM from "react-dom/client";


const Title1 =  <h1>Im Title </h1>
//React Functional Componets 
const Title = () =>{
  return <h1>Im Title </h1>
}
const App = () => {
  return (
    <>
    {/* component composition */}
    <Title />
      <h1>hello world</h1>
      
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
