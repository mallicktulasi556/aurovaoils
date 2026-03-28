// import "./Notifications.css";
// import { FaShoppingCart, FaHeart, FaBell, FaUser, FaTruck } from "react-icons/fa";
// import { NavLink, Link } from "react-router-dom";
// export default function Notifications(){

// const notifications = [

// {
// icon:"truck",
// text:"Order ID - 8768 has been shipped",
// date:"4 March"
// },

// {
// icon:"offer",
// text:"Holi offer Buy 1 get one free",
// date:"4 March"
// }

// ];

// return(

// <div>

// {/* NAVBAR */}

// <nav className="navbar">

// <h2>Aurova Oils</h2>


// <ul className="nav-links">

// <li>
// <NavLink to="/" className={({isActive}) => isActive ? "active" : ""}>
// Home
// </NavLink>
// </li>

// <li>
// <NavLink to="/about" className={({isActive}) => isActive ? "active" : ""}>
// About Us
// </NavLink>
// </li>

// <li>
// <NavLink to="/oils" className={({isActive}) => isActive ? "active" : ""}>
// Oils
// </NavLink>
// </li>

// <li>
// <NavLink to="/benefits" className={({isActive}) => isActive ? "active" : ""}>
// Health Benefits
// </NavLink>
// </li>

// <li>
// <NavLink to="/contact" className={({isActive}) => isActive ? "active" : ""}>
// Contact Us
// </NavLink>
// </li>

// </ul>
// <div className="nav-icons">

// <NavLink to="/cart" className={({isActive}) => isActive ? "icon active" : "icon"}>
// <FaShoppingCart/>
// </NavLink>

// <NavLink to="/wishlist" className={({isActive}) => isActive ? "icon active" : "icon"}>
// <FaHeart/>
// </NavLink>

// <NavLink to="/notifications" className={({isActive}) => isActive ? "icon active" : "icon"}>
// <FaBell/>
// </NavLink>

// <NavLink to="/profile" className={({isActive}) => isActive ? "icon active" : "icon"}>
// <FaUser/>
// </NavLink>

// </div>

// </nav>



// {/* PAGE */}

// <section className="notification-page">

// <h1>Notifications</h1>
// <p className="sub">You have 2 notifications please check</p>


// {notifications.map((item,index)=>(
// <div className="notification-box" key={index}>

// <div className="notification-left">

// {item.icon === "truck" ?
// <FaTruck className="truck-icon"/>
// :
// <img
// className="offer-img"
// src="https://cdn-icons-png.flaticon.com/512/4471/4471321.png"
// />
// }

// <p>{item.text}</p>

// </div>

// <span className="date">{item.date}</span>

// </div>
// ))}


// </section>



// {/* FOOTER */}

// <footer className="footer">

// <div>

// <h3>Aurova Oils</h3>

// <p>
// We produce natural oils using traditional cold-pressed methods
// that preserve nutrients and flavor while ensuring purity.
// </p>

// </div>

// <div>

// <h4>Quick Links</h4>

// <Link to="/home"><p>Home</p></Link>
// <Link to="/oils"><p>All Oils</p></Link>
// <Link to="/benefits"><p>Health Benefits</p></Link>
// <Link to="/about"><p>About Us</p></Link>
// <Link to="/contact"><p>Contact</p></Link>

// </div>

// <div>

// <h4>Customer Support</h4>

// <p>Privacy Policy</p>
// <p>Terms & Conditions</p>

// </div>

// <div>

// <h4>Contact Us</h4>

// <p>Address: 123 Oil Street</p>
// <p>Mumbai, India</p>
// <p>Phone: +91 98765 43210</p>
// <p>Email: oils@gmail.com</p>

// </div>

// </footer>

// <div className="copyright">
// © 2026 Aurova Oils. All rights reserved. Made with ❤️ for healthy living.
// </div>

// </div>

// )

// }

// import "./Notifications.css";
// import { useEffect, useState } from "react";
// import { FaShoppingCart, FaHeart, FaBell, FaUser, FaTruck } from "react-icons/fa";
// import { NavLink, Link, useNavigate } from "react-router-dom";

// export default function Notifications(){

// const navigate = useNavigate();

// const [notifications, setNotifications] = useState([]);
// const [loading, setLoading] = useState(true);

// // 🔥 FETCH NOTIFICATIONS
// useEffect(() => {

//   const fetchNotifications = async () => {
//     try {
//       const token = localStorage.getItem("token");

//       const response = await fetch("http://192.168.88.10:8080/api/notifications", {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//           "Authorization": `Bearer ${token}`
//         }
//       });

//       const data = await response.json();

//       console.log("Notifications:", data);

//       // 👉 adjust based on API response
//       setNotifications(data);

//     } catch (error) {
//       console.error("Error fetching notifications:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   fetchNotifications();

// }, []);


// // 🔴 LOGOUT (optional)
// const handleLogout = () => {
//   localStorage.clear();
//   navigate("/home");
// };


// return(

// <div>

// {/* NAVBAR */}
// <nav className="navbar">

// <h2>Aurova Oils</h2>

// <ul className="nav-links">

// <li><NavLink to="/home">Home</NavLink></li>
// <li><NavLink to="/about">About Us</NavLink></li>
// <li><NavLink to="/oils">Oils</NavLink></li>
// <li><NavLink to="/benefits">Health Benefits</NavLink></li>
// <li><NavLink to="/contact">Contact Us</NavLink></li>

// </ul>

// <div className="nav-icons">

// <NavLink to="/cart" className={({isActive}) => isActive ? "icon active" : "icon"}>
// <FaShoppingCart/>
// </NavLink>

// <NavLink to="/wishlist" className={({isActive}) => isActive ? "icon active" : "icon"}>
// <FaHeart/>
// </NavLink>

// <NavLink to="/notifications" className={({isActive}) => isActive ? "icon active" : "icon"}>
// <FaBell/>
// </NavLink>

// <NavLink to="/profile" className={({isActive}) => isActive ? "icon active" : "icon"}>
// <FaUser/>
// </NavLink>

// </div>

// </nav>


// {/* PAGE */}
// <section className="notification-page">

// <h1>Notifications</h1>

// {loading ? (
//   <p className="sub">Loading notifications...</p>
// ) : notifications.length === 0 ? (
//   <p className="sub">No notifications available</p>
// ) : (
//   <p className="sub">You have {notifications.length} notifications</p>
// )}


// {/* 🔥 DYNAMIC DATA */}
// {notifications.map((item,index)=>(

// <div className="notification-box" key={index}>

// <div className="notification-left">

// {/* ICON LOGIC */}
// {item.type === "ORDER" ? (
//   <FaTruck className="truck-icon"/>
// ) : (
//   <img
//     className="offer-img"
//     src="https://cdn-icons-png.flaticon.com/512/4471/4471321.png"
//     alt="offer"
//   />
// )}

// <p>{item.message || item.text}</p>

// </div>

// <span className="date">{item.date || item.createdAt}</span>

// </div>

// ))}

// </section>


// {/* FOOTER */}
// <footer className="footer">

// <div>
// <h3>Aurova Oils</h3>
// <p>
// We produce natural oils using traditional cold-pressed methods
// that preserve nutrients and flavor while ensuring purity.
// </p>
// </div>

// <div>
// <h4>Quick Links</h4>
// <Link to="/home"><p>Home</p></Link>
// <Link to="/oils"><p>All Oils</p></Link>
// <Link to="/benefits"><p>Health Benefits</p></Link>
// <Link to="/about"><p>About Us</p></Link>
// <Link to="/contact"><p>Contact</p></Link>
// </div>

// <div>
// <h4>Customer Support</h4>
// <p>Privacy Policy</p>
// <p>Terms & Conditions</p>
// </div>

// <div>
// <h4>Contact Us</h4>
// <p>Address: 123 Oil Street</p>
// <p>Mumbai, India</p>
// <p>Phone: +91 98765 43210</p>
// <p>Email: oils@gmail.com</p>
// </div>

// </footer>

// <div className="copyright">
// © 2026 Aurova Oils. All rights reserved. Made with ❤️ for healthy living.
// </div>

// </div>

// );
// }

import "./Notifications.css";
import { useEffect, useState } from "react";
import { FaShoppingCart, FaHeart, FaBell, FaUser, FaTruck } from "react-icons/fa";
import { NavLink, Link, useNavigate } from "react-router-dom";

const BASE_URL = "http://18.61.100.138:8080";

export default function Notifications() {

  const navigate = useNavigate();

  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);

  // ✅ FETCH NOTIFICATIONS
  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const token = localStorage.getItem("token");

        const response = await fetch(`${BASE_URL}/api/notifications`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await response.json();
        console.log("Notifications:", data);

        setNotifications(Array.isArray(data) ? data : []);

      } catch (error) {
        console.error("Fetch error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNotifications();
  }, []);

  // ✅ MARK AS READ
  const markAsRead = async (id) => {
    try {
      const token = localStorage.getItem("token");

      await fetch(`${BASE_URL}/api/notifications/${id}/read`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // ✅ UPDATE UI
      setNotifications((prev) =>
        prev.map((item) =>
          item.id === id ? { ...item, isRead: true } : item
        )
      );

    } catch (error) {
      console.error("Mark read error:", error);
    }
  };

  // 🔴 LOGOUT
  const handleLogout = () => {
    localStorage.clear();
    navigate("/home");
  };

  // 🔔 UNREAD COUNT
  const unreadCount = notifications.filter(n => !n.isRead).length;

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

          <NavLink to="/cart" className="icon">
            <FaShoppingCart />
          </NavLink>

          <NavLink to="/wishlist" className="icon">
            <FaHeart />
          </NavLink>

          {/* 🔔 NOTIFICATION ICON WITH COUNT */}
          <NavLink to="/notifications" className="icon active">
            <FaBell />
            {unreadCount > 0 && (
              <span className="notification-badge">{unreadCount}</span>
            )}
          </NavLink>

          <NavLink to="/profile" className="icon">
            <FaUser />
          </NavLink>

        </div>

      </nav>

      {/* PAGE */}
      <section className="notification-page">

        <h1>Notifications</h1>

        {loading ? (
          <p className="sub">Loading notifications...</p>
        ) : notifications.length === 0 ? (
          <p className="sub">No notifications available</p>
        ) : (
          <p className="sub">
            You have {notifications.length} notifications
          </p>
        )}

        {/* ✅ NOTIFICATION LIST */}
        {notifications.map((item) => (

          <div
            key={item.id}
            className={`notification-box ${!item.isRead ? "unread" : ""}`}
            onClick={() => markAsRead(item.id)}
          >

            <div className="notification-left">

              {/* ICON */}
              <FaTruck className="truck-icon" />

              <p>{item.message}</p>

            </div>

            <span className="date">
              {new Date(item.createdAt).toLocaleString()}
            </span>

          </div>

        ))}

      </section>

      {/* FOOTER */}
      <footer className="footer">

        <div>
          <h3>Aurova Oils</h3>
          <p>
            We produce natural oils using traditional cold-pressed methods
            that preserve nutrients and flavor while ensuring purity.
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
        © 2026 Aurova Oils. All rights reserved.
      </div>

    </div>
  );
}