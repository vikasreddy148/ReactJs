import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router";
import UserContext from "../utils/UserContext";
const Header = () => {
  const [btnLogin, setBtnLogin] = useState("Login");

  const {loggedInUser} = useContext(UserContext);
  return (
    <div className="flex justify-between bg-blue-200 shadow-lg h-20">
      <div className="w-15 m-2  flex items-center justify-center">
        <Link to={"/"}>
          <img className="rounded-4xl" src={LOGO_URL} />
        </Link>
      </div>
      <div className="nav-items flex items-center">
        <ul className="flex px-2">
          <li className="px-1.5">
            <Link to={"/home"}>Home</Link>
          </li>
          <li className="px-2">
            <Link to={"/about"}>About us</Link>
          </li>
          <li className="px-2">
            <Link to={"/contact"}>Contact us</Link>
          </li>
          <li className="px-2">
            <Link to={"/grocery"}>Grocery</Link>
          </li>
          <li className="px-2">Cart</li>
          <button
            className="bg-cyan-200  px-4 rounded-lg"
            onClick={() => {
              btnLogin === "Login"
                ? setBtnLogin("Logout")
                : setBtnLogin("Login");
            }}
            style={{ cursor: "pointer" }}
          >
            {btnLogin}
          </button>
          <li className="px-4">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
