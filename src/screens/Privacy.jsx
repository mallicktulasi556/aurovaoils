import React from "react";
import "./Privacy.css";
import { NavLink, useNavigate, useLocation, Link } from "react-router-dom";
import { FaShoppingCart, FaHeart, FaBell, FaUser } from "react-icons/fa";

export default function Privacy() {

  const navigate = useNavigate();
  const location = useLocation();

  // ✅ profile icon active logic
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
          <li><NavLink to="/">Home</NavLink></li>
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

          <NavLink 
            to="/profile" 
            end
            className={({isActive}) => isActive ? "menu-item active" : "menu-item"}
          >
            My Profile
          </NavLink>

          <NavLink 
            to="/ProfileOrders" 
            className={({isActive}) => isActive ? "menu-item active" : "menu-item"}
          >
            Orders
          </NavLink>

          <NavLink 
            to="/privacy" 
            className={({isActive}) => isActive ? "menu-item active" : "menu-item"}
          >
            Privacy Policy
          </NavLink>

          <NavLink 
            to="/terms" 
            className={({isActive}) => isActive ? "menu-item active" : "menu-item"}
          >
            Terms
          </NavLink>

          <button className="logout" onClick={handleLogout}>
            Log Out
          </button>

        </div>

        {/* CONTENT */}
        <div className="profile-content-main">

          <h2>Privacy Policy</h2>

          <p>
            We collect basic customer information such as name,
            email and contact details to process orders.
          </p>

          <p>
            Your information is used only to fulfil orders and
            provide better service.
          </p>

        </div>
         </div>
{/* FOOTER */}

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
<Link to="/"><p>Home</p></Link>
<Link to="/oils"><p>All Oils</p></Link>
<Link to="/benefits"><p>Health Benefits</p></Link>
<Link to="/about"><p>About Us</p></Link>
<Link to="/contact"><p>Contact</p></Link>
</div>

<div>
<h4>Customer Support</h4>
<p>Privacy Policy</p>
<p>Terms & Conditions</p>
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