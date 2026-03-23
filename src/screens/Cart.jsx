// import "./Cart.css";
// import { FaShoppingCart, FaHeart, FaBell, FaUser, FaMinus, FaPlus } from "react-icons/fa";
// import { NavLink } from "react-router-dom";
// import "./Cart.css";
// import { useState } from "react";
// import { Link } from "react-router-dom";
// import pic from "../images/pic.png";
// export default function Cart(){
// const [qty, setQty] = useState(1);

// const increaseQty = () => {
// setQty(qty + 1);
// };

// const decreaseQty = () => {
// if(qty > 1){
// setQty(qty - 1);
// }
// };
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


// {/* CART SECTION */}

// <section className="cart-container">

// <h1>Cart</h1>

// <div className="cart-grid">


// {/* LEFT */}

// <div className="cart-left">

// <div className="offer-box">

// <h3>Available offers</h3>

// <div className="coupon">

// <input placeholder="Enter Discount"/>
// <span>Apply</span>

// </div>

// </div>


// <div className="address-box">

// <div className="address-head">

// <h3>Delivery Address</h3>
// <span>New Address</span>

// </div>

// <label>Full Name</label>
// <input/>

// <label>Phone Number</label>
// <input/>

// <label>Address</label>
// <textarea/>

// <button className="submit-btn">
// Submit
// </button>

// </div>

// </div>



// {/* RIGHT */}

// <div className="cart-right">

// <div className="product">

// <img src={pic} alt="oil" />

// <div>

// <h3>Ground Nut Oil</h3>
// <p>500 ML</p>
// <p>₹190</p>

// </div>
// <div className="qty">

// <button onClick={decreaseQty}>
// <FaMinus/>
// </button>

// <span>{qty}</span>

// <button onClick={increaseQty}>
// <FaPlus/>
// </button>

// </div>
// </div>

// <hr/>

// <div className="price">

// <div>
// <p>Item Total</p>
// <p>₹190.00</p>
// </div>

// <div>
// <p>Delivery fees</p>
// <p>₹30</p>
// </div>

// </div>

// <hr/>

// <div className="total">

// <p>Grand Total</p>
// <p>₹220</p>

// </div>
// <Link to= "/Payment">
// <button className="order-btn">
// Place Order
// </button></Link>

// <p className="note">
// You can choose partial payment in the next step
// </p>

// </div>


// </div>

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

// <Link to="/"><p>Home</p></Link>
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

import "./Cart.css";
import {
  FaShoppingCart,
  FaHeart,
  FaBell,
  FaUser,
  FaMinus,
  FaPlus,
} from "react-icons/fa";
import { NavLink, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import pic from "../images/pic.png";

const BASE_URL = "http://192.168.88.10:8080"; // change if needed

export default function Cart() {
  const [cart, setCart] = useState([]);
  const [qty, setQty] = useState(1);

  // ✅ FETCH CART DATA
  useEffect(() => {
    fetch(`${BASE_URL}/api/cart`)
      .then((res) => res.json())
      .then((data) => {
        setCart(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const increaseQty = () => {
    setQty(qty + 1);
  };

  const decreaseQty = () => {
    if (qty > 1) {
      setQty(qty - 1);
    }
  };

  // ✅ CALCULATIONS
  const itemPrice = cart[0]?.price || 190;
  const total = itemPrice * qty;
  const delivery = 30;
  const grandTotal = total + delivery;

  return (
    <div>
      {/* NAVBAR */}
      <nav className="navbar">
        <h2>Aurova Oils</h2>

        <ul className="nav-links">
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/oils" className={({ isActive }) => (isActive ? "active" : "")}>
              Oils
            </NavLink>
          </li>
          <li>
            <NavLink to="/benefits" className={({ isActive }) => (isActive ? "active" : "")}>
              Health Benefits
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>
              Contact Us
            </NavLink>
          </li>
        </ul>

        <div className="nav-icons">
          <NavLink to="/cart" className={({ isActive }) => (isActive ? "icon active" : "icon")}>
            <FaShoppingCart />
          </NavLink>
          <NavLink to="/wishlist" className={({ isActive }) => (isActive ? "icon active" : "icon")}>
            <FaHeart />
          </NavLink>
          <NavLink
            to="/notifications"
            className={({ isActive }) => (isActive ? "icon active" : "icon")}
          >
            <FaBell />
          </NavLink>
          <NavLink
            to="/profile"
            className={({ isActive }) => (isActive ? "icon active" : "icon")}
          >
            <FaUser />
          </NavLink>
        </div>
      </nav>

      {/* CART SECTION */}
      <section className="cart-container">
        <h1>Cart</h1>

        <div className="cart-grid">
          {/* LEFT */}
          <div className="cart-left">
            <div className="offer-box">
              <h3>Available offers</h3>
              <div className="coupon">
                <input placeholder="Enter Discount" /> <span>Apply</span>
              </div>
            </div>

            <div className="address-box">
              <div className="address-head">
                <h3>Delivery Address</h3> <span>New Address</span>
              </div>
              <label>Full Name</label> <input />
              <label>Phone Number</label> <input />
              <label>Address</label> <textarea />
              <button className="submit-btn"> Submit </button>
            </div>
          </div>

          {/* RIGHT */}
          <div className="cart-right">
            {cart.length === 0 ? (
              <p>Loading...</p>
            ) : (
              <div className="product">
                <img src={cart[0]?.image || pic} alt="oil" />
                <div>
                  <h3>{cart[0]?.name || "Ground Nut Oil"}</h3>
                  <p>{cart[0]?.size || "500 ML"}</p>
                  <p>₹{itemPrice}</p>
                </div>

                <div className="qty">
                  <button onClick={decreaseQty}>
                    <FaMinus />
                  </button>
                  <span>{qty}</span>
                  <button onClick={increaseQty}>
                    <FaPlus />
                  </button>
                </div>
              </div>
            )}

            <hr />

            <div className="price">
              <div>
                <p>Item Total</p>
                <p>₹{total}</p>
              </div>
              <div>
                <p>Delivery fees</p>
                <p>₹{delivery}</p>
              </div>
            </div>

            <hr />

            <div className="total">
              <p>Grand Total</p>
              <p>₹{grandTotal}</p>
            </div>

            <Link to="/Payment">
              <button className="order-btn">Place Order</button>
            </Link>

            <p className="note">
              You can choose partial payment in the next step
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div>
          <h3>Aurova Oils</h3>
          <p>
            We produce natural oils using traditional cold-pressed methods that
            preserve nutrients and flavor while ensuring purity.
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