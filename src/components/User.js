
const User = (props) => {
  return (
    <div className="user">
        <h1>{props.name} From Function Based Component</h1>
        <h3>Location : {props.location}</h3>
    </div>
  )
}

export default User