// import React from "react";
// import "./Profile.css";
// import { NavLink, useNavigate } from "react-router-dom";
// import { FaShoppingCart, FaHeart, FaBell, FaUser } from "react-icons/fa";

// export default function Profile() {

//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.clear();
//     navigate("/");
//   };

//   return (
//     <div>

//       {/*  NAVBAR */}
//       <nav className="navbar">

//         <h2>Aurova Oils</h2>

//         <ul className="nav-links">
//           <li><NavLink to="/">Home</NavLink></li>
//           <li><NavLink to="/about">About Us</NavLink></li>
//           <li><NavLink to="/oils">Oils</NavLink></li>
//           <li><NavLink to="/benefits">Health Benefits</NavLink></li>
//           <li><NavLink to="/contact">Contact Us</NavLink></li>
//         </ul>

//         <div className="nav-icons">
//           <NavLink to="/cart"><FaShoppingCart/></NavLink>
//           <NavLink to="/wishlist"><FaHeart/></NavLink>
//           <NavLink to="/notifications"><FaBell/></NavLink>
//           <NavLink to="/profile"><FaUser/></NavLink>
//         </div>

//       </nav>

//       {/* 🔥 MAIN LAYOUT */}
//       <div className="profile-page-main">

//         {/* SIDEBAR */}
//         <div className="profile-sidebar-main">

//           <NavLink to="/profile" className="menu-item">My Profile</NavLink>
//           <NavLink to="/ProfileOrders" className="menu-item">Orders</NavLink>
//           <NavLink to="/privacy" className="menu-item">Privacy Policy</NavLink>
//           <NavLink to="/terms" className="menu-item">Terms</NavLink>

//           <button className="logout" onClick={handleLogout}>
//             Log Out
//           </button>

//         </div>

//         {/* CONTENT */}
//         <div className="profile-content-main">

//           <h2>Profile Information</h2>

//           <input placeholder="Full Name" defaultValue="K Manohara"/>

//           <div className="row">
//             <input placeholder="Email" defaultValue="manohara@gmail.com"/>
//             <input placeholder="Mobile" defaultValue="+918576473856"/>
//           </div>

//           <div className="row">
//             <input type="password" placeholder="Password"/>
//             <input type="password" placeholder="Confirm Password"/>
//           </div>

//           <button className="update-btn">Update Profile</button>

//         </div>

//       </div>

//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import "./Profile.css";
import { NavLink, useNavigate, Link } from "react-router-dom";
import { FaShoppingCart, FaHeart, FaBell, FaUser } from "react-icons/fa";

export default function Profile() {

  const navigate = useNavigate();

  const [profile, setProfile] = useState({
    fullName: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: ""
  });

  const [loading, setLoading] = useState(false);

  // 🔴 LOGOUT
  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  // 🟢 GET PROFILE DATA
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token");

        const response = await fetch("http://192.168.88.10:8080/api/profile", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          }
        });

        const data = await response.json();

        console.log("GET Profile:", data);

        setProfile({
          fullName: data.fullName || data.name || "",
          email: data.email || "",
          mobile: data.mobile || "",
          password: "",
          confirmPassword: ""
        });

      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };

    fetchProfile();
  }, []);

  // 🔵 HANDLE INPUT CHANGE
  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value
    });
  };

  // 🟡 UPDATE PROFILE API
  const handleUpdate = async () => {
    if (profile.password !== profile.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      setLoading(true);

      const token = localStorage.getItem("token");

      const response = await fetch("http://192.168.88.10:8080/api/profile", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({
          fullName: profile.fullName,
          email: profile.email,
          mobile: profile.mobile,
          password: profile.password
        })
      });

      const data = await response.json();

      console.log("UPDATE Response:", data);

      alert("Profile Updated Successfully ✅");

    } catch (error) {
      console.error("Update error:", error);
      alert("Something went wrong ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>

      {/* 🔥 NAVBAR */}
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

<NavLink to="/profile" className={({isActive}) => isActive ? "icon active" : "icon"}>
<FaUser/>
</NavLink>
        </div>

      </nav>

      {/*  MAIN */}
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

          <h2>Profile Information</h2>

          <input
            name="fullName"
            placeholder="Full Name"
            value={profile.fullName}
            onChange={handleChange}
          />

          <div className="row">
            <input
              name="email"
              placeholder="Email"
              value={profile.email}
              onChange={handleChange}
            />

            <input
              name="mobile"
              placeholder="Mobile"
              value={profile.mobile}
              onChange={handleChange}
            />
          </div>

          <div className="row">
            <input
              type="password"
              name="password"
              placeholder="New Password"
              value={profile.password}
              onChange={handleChange}
            />

            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={profile.confirmPassword}
              onChange={handleChange}
            />
          </div>

          <button
            className="update-btn"
            onClick={handleUpdate}
            disabled={loading}
          >
            {loading ? "Updating..." : "Update Profile"}
          </button>

  </div>
     </div>
  {/* ✅ ADD FOOTER HERE */}
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