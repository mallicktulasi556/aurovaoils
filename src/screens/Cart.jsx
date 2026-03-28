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

// import "./Cart.css";
// import {
//   FaShoppingCart,
//   FaHeart,
//   FaBell,
//   FaUser,
//   FaMinus,
//   FaPlus,
// } from "react-icons/fa";
// import { NavLink, Link } from "react-router-dom";
// import { useState, useEffect } from "react";
// import pic from "../images/pic.png";

// const BASE_URL = "http://18.61.100.138:8080"; // change if needed

// export default function Cart() {
//   const [cart, setCart] = useState([]);
//   const [qty, setQty] = useState(1);

//   // ✅ FETCH CART DATA
//   useEffect(() => {
//     fetch(`${BASE_URL}/api/cart`)
//       .then((res) => res.json())
//       .then((data) => {
//         setCart(data);
//       })
//       .catch((err) => console.log(err));
//   }, []);

//   const increaseQty = () => {
//     setQty(qty + 1);
//   };

//   const decreaseQty = () => {
//     if (qty > 1) {
//       setQty(qty - 1);
//     }
//   };

//   // ✅ CALCULATIONS
//   const itemPrice = cart[0]?.price || 190;
//   const total = itemPrice * qty;
//   const delivery = 30;
//   const grandTotal = total + delivery;

//   return (
//     <div>
//       {/* NAVBAR */}
//       <nav className="navbar">
//         <h2>Aurova Oils</h2>

//         <ul className="nav-links">
//           <li>
//             <NavLink to="/home" className={({ isActive }) => (isActive ? "active" : "")}>
//               Home
//             </NavLink>
//           </li>
//           <li>
//             <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>
//               About Us
//             </NavLink>
//           </li>
//           <li>
//             <NavLink to="/oils" className={({ isActive }) => (isActive ? "active" : "")}>
//               Oils
//             </NavLink>
//           </li>
//           <li>
//             <NavLink to="/benefits" className={({ isActive }) => (isActive ? "active" : "")}>
//               Health Benefits
//             </NavLink>
//           </li>
//           <li>
//             <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>
//               Contact Us
//             </NavLink>
//           </li>
//         </ul>

//         <div className="nav-icons">
//           <NavLink to="/cart" className={({ isActive }) => (isActive ? "icon active" : "icon")}>
//             <FaShoppingCart />
//           </NavLink>
//           <NavLink to="/wishlist" className={({ isActive }) => (isActive ? "icon active" : "icon")}>
//             <FaHeart />
//           </NavLink>
//           <NavLink
//             to="/notifications"
//             className={({ isActive }) => (isActive ? "icon active" : "icon")}
//           >
//             <FaBell />
//           </NavLink>
//           <NavLink
//             to="/profile"
//             className={({ isActive }) => (isActive ? "icon active" : "icon")}
//           >
//             <FaUser />
//           </NavLink>
//         </div>
//       </nav>

//       {/* CART SECTION */}
//       <section className="cart-container">
//         <h1>Cart</h1>

//         <div className="cart-grid">
//           {/* LEFT */}
//           <div className="cart-left">
//             <div className="offer-box">
//               <h3>Available offers</h3>
//               <div className="coupon">
//                 <input placeholder="Enter Discount" /> <span>Apply</span>
//               </div>
//             </div>

//             <div className="address-box">
//               <div className="address-head">
//                 <h3>Delivery Address</h3> <span>New Address</span>
//               </div>
//               <label>Full Name</label> <input />
//               <label>Phone Number</label> <input />
//               <label>Address</label> <textarea />
//               <button className="submit-btn"> Submit </button>
//             </div>
//           </div>

//           {/* RIGHT */}
//           <div className="cart-right">
//             {cart.length === 0 ? (
//               <p>Loading...</p>
//             ) : (
//               <div className="product">
//                 <img src={cart[0]?.image || pic} alt="oil" />
//                 <div>
//                   <h3>{cart[0]?.name || "Ground Nut Oil"}</h3>
//                   <p>{cart[0]?.size || "500 ML"}</p>
//                   <p>₹{itemPrice}</p>
//                 </div>

//                 <div className="qty">
//                   <button onClick={decreaseQty}>
//                     <FaMinus />
//                   </button>
//                   <span>{qty}</span>
//                   <button onClick={increaseQty}>
//                     <FaPlus />
//                   </button>
//                 </div>
//               </div>
//             )}

//             <hr />

//             <div className="price">
//               <div>
//                 <p>Item Total</p>
//                 <p>₹{total}</p>
//               </div>
//               <div>
//                 <p>Delivery fees</p>
//                 <p>₹{delivery}</p>
//               </div>
//             </div>

//             <hr />

//             <div className="total">
//               <p>Grand Total</p>
//               <p>₹{grandTotal}</p>
//             </div>

//             <Link to="/Payment">
//               <button className="order-btn">Place Order</button>
//             </Link>

//             <p className="note">
//               You can choose partial payment in the next step
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* FOOTER */}
//       <footer className="footer">
//         <div>
//           <h3>Aurova Oils</h3>
//           <p>
//             We produce natural oils using traditional cold-pressed methods that
//             preserve nutrients and flavor while ensuring purity.
//           </p>
//         </div>

//         <div>
//           <h4>Quick Links</h4>
//           <Link to="/home"><p>Home</p></Link>
//           <Link to="/oils"><p>All Oils</p></Link>
//           <Link to="/benefits"><p>Health Benefits</p></Link>
//           <Link to="/about"><p>About Us</p></Link>
//           <Link to="/contact"><p>Contact</p></Link>
//         </div>

//         <div>
//           <h4>Customer Support</h4>
//           <p>Privacy Policy</p>
//           <p>Terms & Conditions</p>
//         </div>

//         <div>
//           <h4>Contact Us</h4>
//           <p>Address: 123 Oil Street</p>
//           <p>Mumbai, India</p>
//           <p>Phone: +91 98765 43210</p>
//           <p>Email: oils@gmail.com</p>
//         </div>
//       </footer>

//       <div className="copyright">
//         © 2026 Aurova Oils. All rights reserved. Made with ❤️ for healthy living.
//       </div>
//     </div>
//   );
// }

// import "./Cart.css";
// import {
//   FaShoppingCart,
//   FaHeart,
//   FaBell,
//   FaUser,
//   FaMinus,
//   FaPlus,
// } from "react-icons/fa";
// import { NavLink, Link } from "react-router-dom";
// import { useState, useEffect } from "react";
// import pic from "../images/pic.png";

// const BASE_URL = "http://18.61.100.138:8080";

// export default function Cart() {
//   const [address, setAddress] = useState("");
//   const [cart, setCart] = useState([]);
//   const [qty, setQty] = useState(1);

//   // ✅ FETCH CART DATA WITH TOKEN
//   useEffect(() => {
//     const fetchCart = async () => {
//       try {
//         const token = localStorage.getItem("token");

//         const res = await fetch(`${BASE_URL}/api/cart`, {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });

//         const data = await res.json();
//         console.log("Cart:", data);

//         setCart(data);

//         // ✅ SET INITIAL QTY FROM API
//         if (data.length > 0) {
//           setQty(data[0].quantity);
//         }
//       } catch (err) {
//         console.log(err);
//       }
//     };

//     fetchCart();
//   }, []);

//   // ✅ UPDATE QTY API
//   const updateCartQty = async (productId, newQty) => {
//     try {
//       const token = localStorage.getItem("token");

//       await fetch(
//         `${BASE_URL}/api/cart/${productId}?quantity=${newQty}`,
//         {
//           method: "PUT",
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       console.log("Qty updated");
//     } catch (error) {
//       console.error("Update error:", error);
//     }
//   };

//   const placeOrder = async () => {
//   try {
//     const token = localStorage.getItem("token");

//     if (!address) {
//       alert("Please enter address ❌");
//       return;
//     }

//     const res = await fetch(`${BASE_URL}/api/orders/place`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`,
//       },
//       body: JSON.stringify({
//         address: address,
//       }),
//     });

//     if (!res.ok) {
//       const err = await res.text();
//       console.log("Order Error:", err);
//       alert("Order failed ❌");
//       return;
//     }

//     const result = await res.json();
//     console.log("Order placed:", result);

//     alert("Order placed successfully ✅");

//     // ✅ OPTIONAL: clear cart UI
//     setCart([]);

//     // ✅ REDIRECT TO NOTIFICATIONS PAGE
//     window.location.href = "/notifications";

//   } catch (error) {
//     console.error("Order error:", error);
//     alert("Something went wrong ❌");
//   }
// };

//   // ✅ INCREASE
//   const increaseQty = () => {
//     const newQty = qty + 1;
//     setQty(newQty);

//     if (cart.length > 0) {
//       updateCartQty(cart[0].productId, newQty);
//     }
//   };

//   // ✅ DECREASE
//   const decreaseQty = () => {
//     if (qty > 1) {
//       const newQty = qty - 1;
//       setQty(newQty);

//       if (cart.length > 0) {
//         updateCartQty(cart[0].productId, newQty);
//       }
//     }
//   };

//   // ✅ CALCULATIONS
//   const itemPrice = cart[0]?.price || 190;
//   const total = itemPrice * qty;
//   const delivery = 30;
//   const grandTotal = total + delivery;

//   return (
//     <div>
//       {/* NAVBAR */}
//       <nav className="navbar">
//         <h2>Aurova Oils</h2>

//         <ul className="nav-links">
//           <li>
//             <NavLink to="/home">Home</NavLink>
//           </li>
//           <li>
//             <NavLink to="/about">About Us</NavLink>
//           </li>
//           <li>
//             <NavLink to="/oils">Oils</NavLink>
//           </li>
//           <li>
//             <NavLink to="/benefits">Health Benefits</NavLink>
//           </li>
//           <li>
//             <NavLink to="/contact">Contact Us</NavLink>
//           </li>
//         </ul>

//         <div className="nav-icons">
//           <NavLink to="/cart" className="icon active">
//             <FaShoppingCart />
//           </NavLink>
//           <NavLink to="/wishlist" className="icon">
//             <FaHeart />
//           </NavLink>
//           <NavLink to="/notifications" className="icon">
//             <FaBell />
//           </NavLink>
//           <NavLink to="/profile" className="icon">
//             <FaUser />
//           </NavLink>
//         </div>
//       </nav>

//       {/* CART */}
//       <section className="cart-container">
//         <h1>Cart</h1>

//         <div className="cart-grid">
//           {/* LEFT */}
//           <div className="cart-left">
//             <div className="offer-box">
//               <h3>Available offers</h3>
//               <div className="coupon">
//                 <input placeholder="Enter Discount" /> <span>Apply</span>
//               </div>
//             </div>

//             <div className="address-box">
//               <div className="address-head">
//                 <h3>Delivery Address</h3> <span>New Address</span>
//               </div>
//               <label>Full Name</label> <input />
//               <label>Phone Number</label> <input />
//               <label>Address</label> <textarea 
//   value={address}
//   onChange={(e) => setAddress(e.target.value)}
// />
//               <button className="submit-btn"> Submit </button>
//             </div>
//           </div>

//           {/* RIGHT */}
//           <div className="cart-right">
//             {cart.length === 0 ? (
//               <p>Loading...</p>
//             ) : (
//               <div className="product">
//                 <img
//                   src={
//                     cart[0]?.imageUrl
//                       ? `${BASE_URL}${cart[0].imageUrl}`
//                       : pic
//                   }
//                   alt="oil"
//                 />

//                 <div>
//                   <h3>{cart[0]?.name || "Ground Nut Oil"}</h3>
//                   <p>{cart[0]?.size || "500 ML"}</p>
//                   <p>₹{itemPrice}</p>
//                 </div>

//                 <div className="qty">
//                   <button onClick={decreaseQty}>
//                     <FaMinus />
//                   </button>
//                   <span>{qty}</span>
//                   <button onClick={increaseQty}>
//                     <FaPlus />
//                   </button>
//                 </div>
//               </div>
//             )}

//             <hr />

//             <div className="price">
//               <div>
//                 <p>Item Total</p>
//                 <p>₹{total}</p>
//               </div>
//               <div>
//                 <p>Delivery fees</p>
//                 <p>₹{delivery}</p>
//               </div>
//             </div>

//             <hr />

//             <div className="total">
//               <p>Grand Total</p>
//               <p>₹{grandTotal}</p>
//             </div>

//             {/* <Link to="/payment">
//               <button className="order-btn">Place Order</button>
//             </Link> */}

//             <button className="order-btn" onClick={placeOrder}>
//   Place Order
// </button>

//             <p className="note">
//               You can choose partial payment in the next step
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* FOOTER */}
//       <footer className="footer">
//         <div>
//           <h3>Aurova Oils</h3>
//           <p>
//             We produce natural oils using traditional cold-pressed methods
//             that preserve nutrients and flavor while ensuring purity.
//           </p>
//         </div>

//         <div>
//           <h4>Quick Links</h4>
//           <Link to="/home"><p>Home</p></Link>
//           <Link to="/oils"><p>All Oils</p></Link>
//           <Link to="/benefits"><p>Health Benefits</p></Link>
//           <Link to="/about"><p>About Us</p></Link>
//           <Link to="/contact"><p>Contact</p></Link>
//         </div>

//         <div>
//           <h4>Customer Support</h4>
//           <p>Privacy Policy</p>
//           <p>Terms & Conditions</p>
//         </div>

//         <div>
//           <h4>Contact Us</h4>
//           <p>Address: 123 Oil Street</p>
//           <p>Mumbai, India</p>
//           <p>Phone: +91 98765 43210</p>
//           <p>Email: oils@gmail.com</p>
//         </div>
//       </footer>

//       <div className="copyright">
//         © 2026 Aurova Oils. All rights reserved.
//       </div>
//     </div>
//   );
// }

// import "./Cart.css";
// import {
//   FaShoppingCart,
//   FaHeart,
//   FaBell,
//   FaUser,
//   FaMinus,
//   FaPlus,
//   FaTrash
// } from "react-icons/fa";
// import { NavLink, Link } from "react-router-dom";
// import { useState, useEffect } from "react";
// import pic from "../images/pic.png";

// const BASE_URL = "http://18.61.100.138:8080";

// export default function Cart() {

//   const [address, setAddress] = useState("");
//   const [cartItems, setCartItems] = useState([]);

//   // ✅ FETCH CART
//   useEffect(() => {
//     fetchCart();
//   }, []);

//   const fetchCart = async () => {
//     try {
//       const token = localStorage.getItem("token");

//       const res = await fetch(`${BASE_URL}/api/cart`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       const data = await res.json();
//       console.log("Cart:", data);

//       setCartItems(data.items || []);

//     } catch (err) {
//       console.log(err);
//     }
//   };

//   // ✅ UPDATE QUANTITY
//   const updateQty = async (item, newQty) => {
//     try {
//       const token = localStorage.getItem("token");

//       await fetch(
//         `${BASE_URL}/api/cart/${item.productId}?quantity=${newQty}`,
//         {
//           method: "PUT",
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       // update UI
//       setCartItems(prev =>
//         prev.map(i =>
//           i.productId === item.productId
//             ? { ...i, quantity: newQty }
//             : i
//         )
//       );

//     } catch (err) {
//       console.log(err);
//     }
//   };

//   // ✅ DELETE ITEM
//   const removeItem = async (item) => {
//     try {
//       const token = localStorage.getItem("token");
//       const cartId = item.id || item.cartId;

//       await fetch(`${BASE_URL}/api/cart/${cartId}`, {
//         method: "DELETE",
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       setCartItems(prev =>
//         prev.filter(i => (i.id || i.cartId) !== cartId)
//       );

//     } catch (err) {
//       console.log(err);
//     }
//   };

//   // ✅ PLACE ORDER
//   const placeOrder = async () => {
//     try {
//       const token = localStorage.getItem("token");

//       if (!address) {
//         alert("Please enter address ❌");
//         return;
//       }

//       const res = await fetch(`${BASE_URL}/api/orders/place`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify({ address }),
//       });

//       if (!res.ok) {
//         alert("Order failed ❌");
//         return;
//       }

//       // CLEAR CART
//       // for (let item of cartItems) {
//       //   const cartId = item.id || item.cartId;

//       //   await fetch(`${BASE_URL}/api/cart/${cartItemId}`, {
//       //     method: "DELETE",
//       //     headers: {
//       //       Authorization: `Bearer ${token}`,
//       //     },
//       //   });
//       // }

//       // setCartItems([]);

// //       for (let item of cartItems) {
// //   const cartItemId = item.cartItemId; // ✅ correct field

// //   await fetch(`${BASE_URL}/api/cart/${cartItemId}`, {
// //     method: "DELETE",
// //     headers: {
// //       Authorization: `Bearer ${token}`,
// //     },
// //   });
// // }

// // setCartItems([]);

// await Promise.all(
//   cartItems.items.map((item) =>
//     fetch(`${BASE_URL}/api/cart/${item.cartItemId}`, {
//       method: "DELETE",
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     })
//   )
// );

// // 🔥 refresh cart after delete
// await fetchCart();

//       alert("Order placed successfully ✅");

//       window.location.href = "/notifications";

//     } catch (error) {
//       console.error(error);
//       alert("Something went wrong ❌");
//     }
//   };

//   // ✅ CALCULATIONS
//   const total = cartItems.reduce(
//     (sum, item) => sum + item.price * item.quantity,
//     0
//   );

//   const delivery = cartItems.length > 0 ? 30 : 0;
//   const grandTotal = total + delivery;

//   return (
//     <div>

//       {/* NAVBAR */}
//       <nav className="navbar">

//         <h2>Aurova Oils</h2>

//         <ul className="nav-links">
//           <li><NavLink to="/home">Home</NavLink></li>
//           <li><NavLink to="/about">About Us</NavLink></li>
//           <li><NavLink to="/oils">Oils</NavLink></li>
//           <li><NavLink to="/benefits">Health Benefits</NavLink></li>
//           <li><NavLink to="/contact">Contact Us</NavLink></li>
//         </ul>

//         <div className="nav-icons">
//           <NavLink to="/cart" className="icon active"><FaShoppingCart /></NavLink>
//           <NavLink to="/wishlist" className="icon"><FaHeart /></NavLink>
//           <NavLink to="/notifications" className="icon"><FaBell /></NavLink>
//           <NavLink to="/profile" className="icon"><FaUser /></NavLink>
//         </div>

//       </nav>

//       {/* CART */}
//       <section className="cart-container">
//         <h1>Cart</h1>

//         <div className="cart-grid">

//           {/* LEFT */}
//           <div className="cart-left">

//             <div className="offer-box">
//               <h3>Available offers</h3>
//               <div className="coupon">
//                 <input placeholder="Enter Discount" /> <span>Apply</span>
//               </div>
//             </div>

//             <div className="address-box">
//               <div className="address-head">
//                 <h3>Delivery Address</h3>
//                 <span>New Address</span>
//               </div>

//               <label>Full Name</label>
//               <input />

//               <label>Phone Number</label>
//               <input />

//               <label>Address</label>
//               <textarea
//                 value={address}
//                 onChange={(e) => setAddress(e.target.value)}
//               />

//               <button className="submit-btn">Submit</button>
//             </div>

//           </div>

//           {/* RIGHT */}
//           <div className="cart-right">

//   {!cartItems?.items || cartItems.items.length === 0 ? (
//     <p>Your cart is empty 🛒</p>
//   ) : (
//     cartItems.items.map(item => (

//       <div className="product" key={item.cartItemId}>

//         {/* IMAGE */}
//         <img
//           src={
//             item.imageUrl
//               ? `${BASE_URL}${item.imageUrl}`
//               : pic
//           }
//           alt="product"
//         />

//         {/* INFO */}
//         <div>
//           <h3>{item.productName}</h3>
//           <p>₹{item.price}</p>
//         </div>

//         {/* QTY */}
//         <div className="qty">
//           <button
//             onClick={() =>
//               item.quantity > 1 &&
//               updateQty(item.cartItemId, item.quantity - 1)
//             }
//           >
//             <FaMinus />
//           </button>

//           <span>{item.quantity}</span>

//           <button
//             onClick={() =>
//               updateQty(item.cartItemId, item.quantity + 1)
//             }
//           >
//             <FaPlus />
//           </button>
//         </div>

//         {/* DELETE */}
//         <button
//           className="delete-btn"
//           onClick={() => removeItem(item.cartItemId)}
//         >
//           <FaTrash />
//         </button>

//       </div>

//     ))
//   )}

//   <hr />

//   <div className="price">
//     <div>
//       <p>Item Total</p>
//       <p>₹{total}</p>
//     </div>

//     <div>
//       <p>Delivery fees</p>
//       <p>₹{delivery}</p>
//     </div>
//   </div>

//   <hr />

//   <div className="total">
//     <p>Grand Total</p>
//     <p>₹{grandTotal}</p>
//   </div>

//   <button className="order-btn" onClick={placeOrder}>
//     Place Order
//   </button>

//   <p className="note">
//     You can choose partial payment in the next step
//   </p>

// </div>

//         </div>
//       </section>

//       {/* FOOTER */}
//       <footer className="footer">

//         <div>
//           <h3>Aurova Oils</h3>
//           <p>
//             We produce natural oils using traditional cold-pressed methods
//             that preserve nutrients and flavor while ensuring purity.
//           </p>
//         </div>

//         <div>
//           <h4>Quick Links</h4>
//           <Link to="/home"><p>Home</p></Link>
//           <Link to="/oils"><p>All Oils</p></Link>
//           <Link to="/benefits"><p>Health Benefits</p></Link>
//           <Link to="/about"><p>About Us</p></Link>
//           <Link to="/contact"><p>Contact</p></Link>
//         </div>

//         <div>
//           <h4>Customer Support</h4>
//           <p>Privacy Policy</p>
//           <p>Terms & Conditions</p>
//         </div>

//         <div>
//           <h4>Contact Us</h4>
//           <p>Address: 123 Oil Street</p>
//           <p>Mumbai, India</p>
//           <p>Phone: +91 98765 43210</p>
//           <p>Email: oils@gmail.com</p>
//         </div>

//       </footer>

//       <div className="copyright">
//         © 2026 Aurova Oils. All rights reserved.
//       </div>

//     </div>
//   );
// }

import "./Cart.css";
import {
  FaShoppingCart,
  FaHeart,
  FaBell,
  FaUser,
  FaMinus,
  FaPlus,
  FaTrash
} from "react-icons/fa";
import { NavLink, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import pic from "../images/pic.png";

const BASE_URL = "http://18.61.100.138:8080";

export default function Cart() {

  const [address, setAddress] = useState("");
  const [cartItems, setCartItems] = useState([]);

  // ✅ FETCH CART
  useEffect(() => {
    fetchCart();
  }, []);

  const fetchCart = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await fetch(`${BASE_URL}/api/cart`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();
      console.log("Cart:", data);

      // ✅ store only items array
      setCartItems(data.items || []);

    } catch (err) {
      console.log(err);
    }
  };

  // ✅ UPDATE QUANTITY (FIXED)
  const updateQty = async (cartItemId, newQty) => {
    try {
      const token = localStorage.getItem("token");

      await fetch(
        `${BASE_URL}/api/cart/${cartItemId}?quantity=${newQty}`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // ✅ update UI
      setCartItems(prev =>
        prev.map(i =>
          i.cartItemId === cartItemId
            ? { ...i, quantity: newQty }
            : i
        )
      );

    } catch (err) {
      console.log(err);
    }
  };

  // ✅ DELETE ITEM (FIXED)
  const removeItem = async (cartItemId) => {
    try {
      const token = localStorage.getItem("token");

      await fetch(`${BASE_URL}/api/cart/${cartItemId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // ✅ remove from UI
      setCartItems(prev =>
        prev.filter(i => i.cartItemId !== cartItemId)
      );

    } catch (err) {
      console.log(err);
    }
  };

  // ✅ PLACE ORDER (FIXED)
  const placeOrder = async () => {
    try {
      const token = localStorage.getItem("token");

      if (!address) {
        alert("Please enter address ❌");
        return;
      }

      const res = await fetch(`${BASE_URL}/api/orders/place`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ address }),
      });

      if (!res.ok) {
        alert("Order failed ❌");
        return;
      }

      // ✅ DELETE ALL ITEMS (CORRECT WAY)
      await Promise.all(
        cartItems.map(item =>
          fetch(`${BASE_URL}/api/cart/${item.cartItemId}`, {
            method: "DELETE",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
        )
      );

      setCartItems([]);

      alert("Order placed successfully ✅");

      window.location.href = "/notifications";

    } catch (error) {
      console.error(error);
      alert("Something went wrong ❌");
    }
  };

  // ✅ CALCULATIONS
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const delivery = cartItems.length > 0 ? 30 : 0;
  const grandTotal = total + delivery;

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
          <NavLink to="/cart" className="icon active"><FaShoppingCart /></NavLink>
          <NavLink to="/wishlist" className="icon"><FaHeart /></NavLink>
          <NavLink to="/notifications" className="icon"><FaBell /></NavLink>
          <NavLink to="/profile" className="icon"><FaUser /></NavLink>
        </div>

      </nav>

      {/* CART */}
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
                <h3>Delivery Address</h3>
                <span>New Address</span>
              </div>

              <label>Full Name</label>
              <input />

              <label>Phone Number</label>
              <input />

              <label>Address</label>
              <textarea
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />

              <button className="submit-btn">Submit</button>
            </div>

          </div>

          {/* RIGHT */}
          <div className="cart-right">

            {cartItems.length === 0 ? (
              <p>Your cart is empty 🛒</p>
            ) : (
              cartItems.map(item => (

                <div className="product" key={item.cartItemId}>

                  {/* IMAGE */}
                  <img
                    src={
                      item.imageUrl
                        ? `${BASE_URL}${item.imageUrl}`
                        : pic
                    }
                    alt="product"
                  />

                  {/* INFO */}
                  <div>
                    <h3>{item.productName}</h3>
                    <p>₹{item.price}</p>
                  </div>

                  {/* QTY */}
                  <div className="qty">
                    <button
                      onClick={() =>
                        item.quantity > 1 &&
                        updateQty(item.cartItemId, item.quantity - 1)
                      }
                    >
                      <FaMinus />
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      onClick={() =>
                        updateQty(item.cartItemId, item.quantity + 1)
                      }
                    >
                      <FaPlus />
                    </button>
                  </div>

                  {/* DELETE */}
                  <button
                    className="delete-btn"
                    onClick={() => removeItem(item.cartItemId)}
                  >
                    <FaTrash />
                  </button>

                </div>

              ))
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

            <button className="order-btn" onClick={placeOrder}>
              Place Order
            </button>

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