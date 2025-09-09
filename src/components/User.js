import { useEffect } from "react"

const User = (props) => {
 useEffect(()=>{
const interval =  setInterval(() => {
  console.log("Interval Called");

 },[1000]);
 return()=>{
    clearInterval(interval)
    console.log("Interval Cleared");
  }
 },[])
  return (
    <div className="user">
        <h1>{props.name} From Function Based Component</h1>
        <h3>Location : {props.location}</h3>
    </div>
  )
}

export default User