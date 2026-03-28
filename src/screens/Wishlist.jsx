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


// import "./Wishlist.css";
// import { useState, useEffect } from "react";
// import {
//   FaShoppingCart,
//   FaHeart,
//   FaBell,
//   FaUser,
//   FaMinus,
//   FaPlus,
// } from "react-icons/fa";
// import { NavLink, Link } from "react-router-dom";
// import pic from "../images/pic.png";

// const BASE_URL = "http://192.168.88.10:8080"; // change this

// export default function Wishlist() {

// const [wishlist, setWishlist] = useState([]);


// // ✅ FETCH DATA FROM API
// useEffect(() => {
//   fetch(`${BASE_URL}/api/wishlist`)
//     .then((res) => res.json())
//     .then((data) => {
//       // add qty if not موجود in API
//       const updatedData = data.map(item => ({
//         ...item,
//         qty: item.qty || 1
//       }));
//       setWishlist(updatedData);
//     })
//     .catch((err) => console.log(err));
// }, []);


// // ✅ INCREASE QTY
// const increaseQty = (id) => {
//   setWishlist(wishlist.map(item =>
//     item.id === id ? { ...item, qty: item.qty + 1 } : item
//   ));
// };


// // ✅ DECREASE QTY
// const decreaseQty = (id) => {
//   setWishlist(wishlist.map(item =>
//     item.id === id && item.qty > 1
//       ? { ...item, qty: item.qty - 1 }
//       : item
//   ));
// };


// // ✅ REMOVE ITEM
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
// <NavLink to="/home" className={({isActive}) => isActive ? "active" : ""}>
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

// {wishlist.length === 0 ? (
//   <p>Loading...</p>
// ) : (

// wishlist.map((item) => (

// <div className="wishlist-item" key={item.id}>

// <div className="item-left">

// <img src={item.image || pic} alt="oil" />

// <div>
// <h3>{item.name}</h3>
// <p>{item.size || "500ML"}</p>
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

// ))

// )}

// {/* BUTTON */}
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

// import "./Wishlist.css";
// import { useState, useEffect } from "react";
// import {
//   FaShoppingCart,
//   FaHeart,
//   FaBell,
//   FaUser,
//   FaMinus,
//   FaPlus,
// } from "react-icons/fa";
// import { NavLink, Link } from "react-router-dom";
// import pic from "../images/pic.png";

// const BASE_URL = "http://18.61.100.138:8080";

// export default function Wishlist() {

// const [wishlist, setWishlist] = useState([]);


// // ✅ FETCH DATA WITH TOKEN
// useEffect(() => {
//   const fetchWishlist = async () => {
//     try {
//       const token = localStorage.getItem("token");

//       const res = await fetch(`${BASE_URL}/api/wishlist`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       const data = await res.json();
//       console.log("Wishlist:", data);

//       const updatedData = data.map(item => ({
//         ...item,
//         qty: item.qty || 1
//       }));

//       setWishlist(updatedData);

//     } catch (err) {
//       console.log(err);
//     }
//   };

//   fetchWishlist();
// }, []);


// // ✅ REMOVE ITEM API
// const removeItem = async (productId) => {
//   try {
//     const token = localStorage.getItem("token");

//     await fetch(`${BASE_URL}/api/wishlist/${productId}`, {
//       method: "DELETE",
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });

//     // ✅ Update UI
//     setWishlist(wishlist.filter(item => item.productId !== productId));

//     console.log("Item removed");

//   } catch (error) {
//     console.error("Remove error:", error);
//   }
// };


// // ✅ INCREASE QTY (UI ONLY)
// const increaseQty = (productId) => {
//   setWishlist(wishlist.map(item =>
//     item.productId === productId
//       ? { ...item, qty: item.qty + 1 }
//       : item
//   ));
// };


// // ✅ DECREASE QTY (UI ONLY)
// const decreaseQty = (productId) => {
//   setWishlist(wishlist.map(item =>
//     item.productId === productId && item.qty > 1
//       ? { ...item, qty: item.qty - 1 }
//       : item
//   ));
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
// <NavLink to="/cart" className="icon"><FaShoppingCart/></NavLink>
// <NavLink to="/wishlist" className="icon active"><FaHeart/></NavLink>
// <NavLink to="/notifications" className="icon"><FaBell/></NavLink>
// <NavLink to="/profile" className="icon"><FaUser/></NavLink>
// </div>

// </nav>


// {/* WISHLIST */}
// <section className="wishlist-container">

// <h1>Wishlist</h1>

// {wishlist.length === 0 ? (
//   <p>Loading...</p>
// ) : (

// wishlist.map((item) => (

// <div className="wishlist-item" key={item.productId}>

// <div className="item-left">

// <img 
//   src={item.imageUrl ? `${BASE_URL}${item.imageUrl}` : pic} 
//   alt="oil" 
// />

// <div>
// <h3>{item.name}</h3>
// <p>{item.size || "500ML"}</p>
// <p>₹{item.price}</p>
// </div>

// </div>

// <div className="item-right">

// <div className="qty">

// <button onClick={() => decreaseQty(item.productId)}>
// <FaMinus/>
// </button>

// <span>{item.qty}</span>

// <button onClick={() => increaseQty(item.productId)}>
// <FaPlus/>
// </button>

// </div>

// <p 
// className="remove"
// onClick={() => removeItem(item.productId)}
// >
// Remove
// </p>

// </div>

// </div>

// ))

// )}

// {/* BUTTON */}
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
// © 2026 Aurova Oils. All rights reserved.
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

const BASE_URL = "http://18.61.100.138:8080";

export default function Wishlist() {

  const [wishlist, setWishlist] = useState([]);

  // ✅ FETCH WISHLIST
  useEffect(() => {
    const fetchWishlist = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await fetch(`${BASE_URL}/api/wishlist`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!res.ok) throw new Error("Failed to fetch wishlist");

        const data = await res.json();
        console.log("Wishlist:", data);

        const updatedData = data.products.map(item => ({
          ...item,
          qty: item.qty || 1
        }));

        setWishlist(updatedData);

      } catch (err) {
        console.log(err);
      }
    };

    fetchWishlist();
  }, []);

  // ✅ REMOVE ITEM FROM WISHLIST
  const removeItem = async (itemId) => {
    try {
      const token = localStorage.getItem("token");

      await fetch(`${BASE_URL}/api/wishlist/${itemId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setWishlist(wishlist.filter(item => itemId !== itemId));

      console.log("Item removed");

    } catch (error) {
      console.error("Remove error:", error);
    }
  };

  // ✅ MOVE TO CART (API CONNECTED)
  const moveToCart = async (item) => {
    try {
      const token = localStorage.getItem("token");

      // 👉 ADD TO CART
      await fetch(`${BASE_URL}/api/cart`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          productId: item.productId,
          quantity: item.qty
        }),
      });

      // 👉 REMOVE FROM WISHLIST
      await fetch(`${BASE_URL}/api/wishlist/${item.productId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // 👉 UPDATE UI
      setWishlist(wishlist.filter(i => i.productId !== item.productId));

      alert("Moved to cart ✅");

    } catch (error) {
      console.error("Move to cart error:", error);
      alert("Failed ❌");
    }
  };

  // ✅ INCREASE QTY (UI ONLY)
  const increaseQty = (productId) => {
    setWishlist(wishlist.map(item =>
      item.productId === productId
        ? { ...item, qty: item.qty + 1 }
        : item
    ));
  };

  // ✅ DECREASE QTY (UI ONLY)
  const decreaseQty = (productId) => {
    setWishlist(wishlist.map(item =>
      item.productId === productId && item.qty > 1
        ? { ...item, qty: item.qty - 1 }
        : item
    ));
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
          <NavLink to="/cart" className="icon"><FaShoppingCart/></NavLink>
          <NavLink to="/wishlist" className="icon active"><FaHeart/></NavLink>
          <NavLink to="/notifications" className="icon"><FaBell/></NavLink>
          <NavLink to="/profile" className="icon"><FaUser/></NavLink>
        </div>
      </nav>

      {/* WISHLIST */}
      <section className="wishlist-container">

        <h1>Wishlist</h1>

        {wishlist.length === 0 ? (
          <p>No items in wishlist</p>
        ) : (

          wishlist.map((item) => (

            <div className="wishlist-item" key={item.productId}>

              <div className="item-left">

                <img 
                  src={item.imageUrl ? `${BASE_URL}${item.imageUrl}` : pic} 
                  alt="oil" 
                />

                <div>
                  <h3>{item.name}</h3>
                  <p>{item.size || "500ML"}</p>
                  <p>₹{item.price}</p>
                </div>

              </div>

              <div className="item-right">

                <div className="qty">

                  <button onClick={() => decreaseQty(item.productId)}>
                    <FaMinus/>
                  </button>

                  <span>{item.qty}</span>

                  <button onClick={() => increaseQty(item.productId)}>
                    <FaPlus/>
                  </button>

                </div>

                <p 
                  className="remove"
                  onClick={() => removeItem(item.productId)}
                >
                  Remove
                </p>

                {/* ✅ MOVE TO CART BUTTON */}
                <button 
                  className="move-btn"
                  onClick={() => moveToCart(item)}
                >
                  Move to Cart
                </button>

              </div>

            </div>

          ))

        )}

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