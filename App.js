import React from "react";
import ReactDOM from "react-dom/client";
/**
 * Header
 *  -logo
 *  -nav items
 * Body
 *  -search
 *  -Resturants container
 *    -ResturantCard
 *        - image
 *        - Name of Res, Star Rating, cusine, delery tie
 *    -
 * Footer
 *  -copy rigths
 *  -links
 *  -Address
 *  -Contact
 */
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=food&sf=&txt_keyword=All"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
const ResturantCard = () => {
  return (
    <div className="res-card">
      <div className="res-img">
        <img alt="res image"className= "res-logo"src="https://b3067249.smushcdn.com/3067249/wp-content/uploads/2023/03/chicken-Biryani.jpg?lossy=0&strip=1&webp=1" />
      </div>
      <h3>Mehfil Resturant</h3>
      <h4>Biryani , South Indian, USA</h4>
      <h5>4.7 stars</h5>
      <h5>10 minutes</h5>
    </div>
  );
};
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <ResturantCard />
        <ResturantCard />
        <ResturantCard />
        <ResturantCard />
        <ResturantCard />
        <ResturantCard />
        <ResturantCard />
        <ResturantCard />
        <ResturantCard />
        <ResturantCard />
        <ResturantCard />
      </div>
    </div>
  );
};
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
