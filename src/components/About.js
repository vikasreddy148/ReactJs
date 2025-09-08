import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";
class About extends Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  
  render() {
    return (
      <div>
        <h1>About Us</h1>
        <p>{this.state.count}</p>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          click
        </button>
        
        <UserClass  />
      </div>
    );
  }
}
export default About;
