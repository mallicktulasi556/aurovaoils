// import "./Wishlist.css";
// import { useState } from "react";
// import { FaShoppingCart, FaHeart, FaBell, FaUser, FaMinus, FaPlus } from "react-icons/fa";
// import { NavLink, Link } from "react-router-dom";

// import pic from "../images/pic.png";

// export default function Wishlist(){
// const [wishlist, setWishlist] = useState([
//   { id: 1, name: "Groundnut Oil", price: 190, qty: 1 },
//   { id: 2, name: "Groundnut Oil", price: 190, qty: 1 }
// ]);

//     const increaseQty = (id) => {
//   setWishlist(wishlist.map(item =>
//     item.id === id ? { ...item, qty: item.qty + 1 } : item
//   ));
// };

// const decreaseQty = (id) => {
//   setWishlist(wishlist.map(item =>
//     item.id === id && item.qty > 1
//       ? { ...item, qty: item.qty - 1 }
//       : item
//   ));
// };

// const removeItem = (id) => {
//   setWishlist(wishlist.filter(item => item.id !== id));
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


// {/* WISHLIST */}
// <section className="wishlist-container">

// <h1>Wishlist</h1>

// {wishlist.map((item) => (

// <div className="wishlist-item" key={item.id}>

// <div className="item-left">

// <img src={pic} alt="oil" />

// <div>
// <h3>{item.name}</h3>
// <p>500ML</p>
// <p>₹{item.price}</p>
// </div>

// </div>

// <div className="item-right">

// <div className="qty">

// <button onClick={() => decreaseQty(item.id)}>
// <FaMinus/>
// </button>

// <span>{item.qty}</span>

// <button onClick={() => increaseQty(item.id)}>
// <FaPlus/>
// </button>

// </div>

// <p 
// className="remove"
// onClick={() => removeItem(item.id)}
// >
// Remove
// </p>

// </div>

// </div>

// ))}

// {/* ✅ BUTTON MUST BE INSIDE SECTION */}
// <div className="move-cart">
// <button>Move to Cart</button>
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


import "./Wishlist.css";
import { useState, useEffect } from "react";
import {
  FaShoppingCart,
  FaHeart,
  FaBell,
  FaUser,
  FaMinus,
  FaPlus,
} from "react-icons/fa";
import { NavLink, Link } from "react-router-dom";
import pic from "../images/pic.png";

const BASE_URL = "http://192.168.88.10:8080"; // change this

export default function Wishlist() {

const [wishlist, setWishlist] = useState([]);


// ✅ FETCH DATA FROM API
useEffect(() => {
  fetch(`${BASE_URL}/api/wishlist`)
    .then((res) => res.json())
    .then((data) => {
      // add qty if not موجود in API
      const updatedData = data.map(item => ({
        ...item,
        qty: item.qty || 1
      }));
      setWishlist(updatedData);
    })
    .catch((err) => console.log(err));
}, []);


// ✅ INCREASE QTY
const increaseQty = (id) => {
  setWishlist(wishlist.map(item =>
    item.id === id ? { ...item, qty: item.qty + 1 } : item
  ));
};


// ✅ DECREASE QTY
const decreaseQty = (id) => {
  setWishlist(wishlist.map(item =>
    item.id === id && item.qty > 1
      ? { ...item, qty: item.qty - 1 }
      : item
  ));
};


// ✅ REMOVE ITEM
const removeItem = (id) => {
  setWishlist(wishlist.filter(item => item.id !== id));
};


return(

<div>

{/* NAVBAR */}

<nav className="navbar">

<h2>Aurova Oils</h2>

<ul className="nav-links">

<li>
<NavLink to="/" className={({isActive}) => isActive ? "active" : ""}>
Home
</NavLink>
</li>

<li>
<NavLink to="/about" className={({isActive}) => isActive ? "active" : ""}>
About Us
</NavLink>
</li>

<li>
<NavLink to="/oils" className={({isActive}) => isActive ? "active" : ""}>
Oils
</NavLink>
</li>

<li>
<NavLink to="/benefits" className={({isActive}) => isActive ? "active" : ""}>
Health Benefits
</NavLink>
</li>

<li>
<NavLink to="/contact" className={({isActive}) => isActive ? "active" : ""}>
Contact Us
</NavLink>
</li>

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


{/* WISHLIST */}
<section className="wishlist-container">

<h1>Wishlist</h1>

{wishlist.length === 0 ? (
  <p>Loading...</p>
) : (

wishlist.map((item) => (

<div className="wishlist-item" key={item.id}>

<div className="item-left">

<img src={item.image || pic} alt="oil" />

<div>
<h3>{item.name}</h3>
<p>{item.size || "500ML"}</p>
<p>₹{item.price}</p>
</div>

</div>

<div className="item-right">

<div className="qty">

<button onClick={() => decreaseQty(item.id)}>
<FaMinus/>
</button>

<span>{item.qty}</span>

<button onClick={() => increaseQty(item.id)}>
<FaPlus/>
</button>

</div>

<p 
className="remove"
onClick={() => removeItem(item.id)}
>
Remove
</p>

</div>

</div>

))

)}

{/* BUTTON */}
<div className="move-cart">
<button>Move to Cart</button>
</div>

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

)

}