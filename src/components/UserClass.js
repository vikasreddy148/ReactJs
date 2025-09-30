import React from "react";
class UserClass extends React.Component {
    constructor(props){
        console.log("User Class construtor called");
        super(props);
        this.state ={
            user : {}
        }
    }
    
    async componentDidMount(){
    console.log("User Class componentDidMount called");
        
    const URL = "https://api.github.com/users/vikasreddy148";
    const response = await fetch(URL);
    const json = await response.json();
    this.setState({
        user : json
    })

    this.interval = setInterval(()=>{
      console.log("setInterval called")
    },[1000])
    
  }
  componentWillUnmount(){
    clearInterval(this.interval);
    console.log("setInterval cleared");
  }
  
  render() {
    
    const {name,login,location,avatar_url} = this.state.user;
    console.log(name,login,location,avatar_url);

  
    return (
        
      <div className="user">
        <img src={avatar_url} alt="profile pic"  width={50} height={50}/>
        <h1> User Name : {name} </h1>
        <h1>User Id : {login}</h1>
        <h1>Location : {location}</h1>
        
        
      </div>
    );
  }
}
export default UserClass;
