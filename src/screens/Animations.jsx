import React, { useEffect, useState } from "react";
import "./Animations.css";
import bottle from "../images/OIL.png";
import {
  FaShoppingCart,
  FaHeart,
  FaBell,
  FaUser
} from "react-icons/fa";
import { NavLink, Link, useNavigate, useParams } from "react-router-dom";

export default function Animations() {

  const [showNavbar, setShowNavbar] = useState(false);
  const [startAnimation, setStartAnimation] = useState(false);
  const [showText, setShowText] = useState(false);

  const navigate = useNavigate();
  const { id } = useParams();

  // 🔥 MAIN ANIMATION CONTROL
  useEffect(() => {

    // Navbar appears
    setTimeout(() => {
      setShowNavbar(true);
    }, 200);

    // Bottle animation starts
    setTimeout(() => {
      setStartAnimation(true);
    }, 700);

    // Text appears
    setTimeout(() => {
      setShowText(true);
    }, 1500);

  }, []);

  // 🔥 REDIRECT AFTER FULL ANIMATION
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate(`/productdescription/${id}`);
    }, 3200);

    return () => clearTimeout(timer);
  }, [id, navigate]);

  return (
    <div>

      {/* NAVBAR */}
      {showNavbar && (
        <nav className="navbar animate-navbar">

          <h2 className="logo">Aurova Oils</h2>

          <ul className="nav-links">

            <li>
              <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>
                Home
              </NavLink>
            </li>

            <li>
              <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>
                About Us
              </NavLink>
            </li>

            <li>
              <NavLink to="/oils" className={({ isActive }) => isActive ? "active" : ""}>
                Oils
              </NavLink>
            </li>

            <li>
              <NavLink to="/benefits" className={({ isActive }) => isActive ? "active" : ""}>
                Health Benefits
              </NavLink>
            </li>

            <li>
              <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>
                Contact Us
              </NavLink>
            </li>

          </ul>

          <div className="nav-icons">

            <NavLink to="/cart" className={({ isActive }) => isActive ? "icon active" : "icon"}>
              <FaShoppingCart />
            </NavLink>

            <NavLink to="/wishlist" className={({ isActive }) => isActive ? "icon active" : "icon"}>
              <FaHeart />
            </NavLink>

            <NavLink to="/notifications" className={({ isActive }) => isActive ? "icon active" : "icon"}>
              <FaBell />
            </NavLink>

            <NavLink to="/profile" className={({ isActive }) => isActive ? "icon active" : "icon"}>
              <FaUser />
            </NavLink>

          </div>

        </nav>
      )}

      {/* ANIMATION SECTION */}
      <div className="hero-section">

        {/* LEFT TEXT */}
        <div className={`text left ${showText ? "show" : ""}`}>
          <div className="box" style={{ animationDelay: "0.2s" }}>No Preservatives</div>
          <div className="box" style={{ animationDelay: "0.6s" }}>Rich in Healthy Fats</div>
          <div className="box highlight" style={{ animationDelay: "1s" }}>Natural Aroma & Flavor</div>
        </div>

        {/* CENTER BOTTLE */}
       <div className="center-img">
  <img
    src={bottle}
    alt="oil"
    className={`bottle ${startAnimation ? "start" : ""}`}
  />
</div>
        {/* RIGHT TEXT */}
        <div className={`text right ${showText ? "show" : ""}`}>
          <div className="box" style={{ animationDelay: "0.2s" }}>Premium Quality Groundnuts</div>
          <div className="box" style={{ animationDelay: "0.6s" }}>Cold-Pressed Extraction</div>
          <div className="box highlight" style={{ animationDelay: "1s" }}>Single-Filtered Process</div>
        </div>

      </div>

    </div>
  );
}