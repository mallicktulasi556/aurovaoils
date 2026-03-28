import React from "react";
import "./ProfileOrders.css";
import { NavLink, useNavigate, useLocation, Link } from "react-router-dom";
import { FaShoppingCart, FaHeart, FaBell, FaUser } from "react-icons/fa";
import pic from "../images/pic.png";

export default function Orders() {

  const navigate = useNavigate();

  // ✅ ADDED
  const location = useLocation();

  // ✅ ADDED (profile pages logic)
  const isProfileActive =
    location.pathname === "/profile" ||
    location.pathname === "/ProfileOrders" ||
    location.pathname === "/privacy" ||
    location.pathname === "/terms";

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div>

      {/* NAVBAR */}
      <nav className="navbar">
        <h2>Aurova Oils</h2>

        <ul className="nav-links">
          <li><NavLink to="/home">Home</NavLink></li>
          <li><NavLink to="/about">About Us</NavLink></li>
          <li><NavLink to="/oils">Oils</NavLink></li>
          <li><NavLink to="/benefits">Health Benefits</NavLink></li>
          <li><NavLink to="/contact">Contact Us</NavLink></li>
        </ul>

        <div className="nav-icons">

          <NavLink to="/cart" className={({isActive}) => isActive ? "icon active" : "icon"}>
            <FaShoppingCart/>
          </NavLink>

          <NavLink to="/wishlist" className={({isActive}) => isActive ? "icon active" : "icon"}>
            <FaHeart/>
          </NavLink>

          <NavLink to="/notifications" className={({isActive}) => isActive ? "icon active" : "icon"}>
            <FaBell/>
          </NavLink>

          {/* ✅ FIXED PROFILE ICON */}
          <NavLink
            to="/profile"
            className={isProfileActive ? "icon active" : "icon"}
          >
            <FaUser/>
          </NavLink>

        </div>
      </nav>

      {/* MAIN */}
      <div className="profile-page-main">

        {/* SIDEBAR */}
        <div className="profile-sidebar-main">

          <NavLink to="/profile" className="menu-item">My Profile</NavLink>
          <NavLink to="/ProfileOrders" className="menu-item">Orders</NavLink>
          <NavLink to="/privacy" className="menu-item">Privacy Policy</NavLink>
          <NavLink to="/terms" className="menu-item">Terms</NavLink>

          <button className="logout" onClick={handleLogout}>
            Log Out
          </button>

        </div>

        {/* CONTENT */}
        <div className="profile-content-main">
          <h2>My Orders</h2>

  {/* FILTER TABS */}
  <div className="order-tabs">
    <span className="active">All</span>
    <span>In Progress</span>
    <span>Delivered</span>
    <span>Canceled</span>
  </div>

  {/* ORDER CARD */}
  <div className="order-card">

    {/* TOP INFO */}
    <div className="order-top">
      <span className="status">Inprogress</span>
      <span>8-mar-2026</span>
      <span>Order ID - 254648</span>
    </div>

    {/* MAIN CONTENT */}
    <div className="order-body">
      <img src={pic} alt="oil" />

      <div className="order-details">
        <h4>Ground Nut Oil</h4>
        <p>250ml</p>
        <p>₹190</p>
      </div>

      <div className="arrow">
        ❯
      </div>
    </div>

  </div>

  {/* DUPLICATE CARD (optional like your UI) */}
  <div className="order-card">

    <div className="order-top">
      <span className="status">Inprogress</span>
      <span>8-mar-2026</span>
      <span>Order ID - 254648</span>
    </div>

    <div className="order-body">
      <img src={pic} alt="oil" />

      <div className="order-details">
        <h4>Ground Nut Oil</h4>
        <p>250ml</p>
        <p>₹190</p>
      </div>

      <div className="arrow">
        ❯
      </div>
</div>
</div>
        </div>
         </div>
      

<footer className="footer">

  <div>
    <h3>Aurova Oils</h3>
    <p>
      We produce natural oils using traditional cold-pressed
      methods that preserve nutrients and flavor while ensuring
      purity.
    </p>
  </div>

  <div>
    <h4>Quick Links</h4>
    <Link to="/home"><p>Home</p></Link>
    <Link to="/oils"><p>All Oils</p></Link>
    <Link to="/benefits"><p>Health Benefits</p></Link>
    <Link to="/about"><p>About Us</p></Link>
    <Link to="/contact"><p>Contact</p></Link>
  </div>

  <div>
    <h4>Customer Support</h4>
    <Link to="/privacy"><p>Privacy Policy</p></Link>
    <Link to="/terms"><p>Terms & Conditions</p></Link>
  </div>

  <div>
    <h4>Contact Us</h4>
    <p>Address: 123 Oil Street</p>
          <p>Mumbai, India</p>
          <p>Phone: +91 98765 43210</p>
          <p>Email: oils@gmail.com</p>
  </div>

</footer>

<div className="copyright">
 © 2026 Aurova Oils. All rights reserved. Made with ❤️ for healthy living.
</div>

</div>
     
  );
}