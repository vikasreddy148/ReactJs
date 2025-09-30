import UserContext from "../utils/UserContext";
import UserClass from "./UserClass";
import { Component } from "react";
class About extends Component {
  render() {
    return (
      <div>
        <h1>About Us Class component</h1>
        <div>
          LoggedIn User : 
          <UserContext.Consumer>
            {({loggedInUser}) => <span> {loggedInUser}</span>}
          </UserContext.Consumer>
        </div>
        <UserClass />
      </div>
    );
  }
}
export default About;
