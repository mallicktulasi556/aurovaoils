// import React, { useState } from "react";
// import "./ProductDescription.css";
// import { NavLink } from "react-router-dom";
// import {
//   FaShoppingCart,
//   FaHeart,
//   FaBell,
//   FaUser,
//   FaStar, FaMinus, FaPlus
// } from "react-icons/fa";

// import oil from "../images/oil-main.png";
// import thumb from "../images/oil-thumb.png";

// import coconut from "../images/groundnut-oil.png";
// import sesame from "../images/groundnut-oil.png";
// import mustard from "../images/groundnut-oil.png";

// export default function ProductDescription() {

// const [qty,setQty] = useState(1)
// const [size,setSize] = useState("250 ML")
// const [favorites, setFavorites] = useState([]);
// const [cart, setCart] = useState([]);
// const increase = () =>{
// setQty(qty+1)
// }

// const decrease = () =>{
// if(qty>1){
// setQty(qty-1)
// }
// }

// const relatedProducts = [
// {
// id:1,
// name:"Virgin Coconut Oil",
// price:"₹399",
// img:coconut,
// desc:"Rich in healthy fats..."
// },
// {
// id:2,
// name:"Black Sesame Oil",
// price:"₹299",
// img:sesame,
// desc:"Pungent and flavorful..."
// },
// {
// id:3,
// name:"Yellow Mustard Oil",
// price:"₹279",
// img:mustard,
// desc:"Light and versatile..."
// }
// ]


// const toggleFavorite = (id) => {

// if(favorites.includes(id)){
// setFavorites(favorites.filter(item => item !== id));
// }else{
// setFavorites([...favorites,id]);
// }

// };

// const toggleCart = (id) => {

// if(cart.includes(id)){
// setCart(cart.filter(item => item !== id));
// }else{
// setCart([...cart,id]);
// }

// };
// return (
//   <div>

//       {/* NAVBAR */}

//       <nav className="navbar">

//         <h2 className="logo">Aurova Oils</h2>

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

//      <div className="nav-icons">

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

//       </nav>
// <div className="product-page">

// {/* PRODUCT SECTION */}

// <div className="product-container">

// {/* LEFT SIDE */}

// <div className="product-images">

// <img src={oil} className="main-image"/>

// <div className="thumbnail-row">
// <img src={thumb}/>
// <img src={thumb}/>
// <img src={thumb}/>
// <img src={thumb}/>
// </div>

// </div>


// {/* RIGHT SIDE */}

// <div className="product-info">

// <h1>Ground Nut Oil</h1>

// <div className="rating">

// <div className="rating-box">
// <FaStar/> 4.6
// </div>

// <span>422 Verified reviews</span>

// </div>

// <h3>Size:</h3>

// <div className="size-options">

// <button
// className={size==="250 ML" ? "active" : ""}
// onClick={()=>setSize("250 ML")}
// >
// 250 ML
// </button>

// <button
// className={size==="500 ML" ? "active" : ""}
// onClick={()=>setSize("500 ML")}
// >
// 500 ML
// </button>

// <button
// className={size==="1 L" ? "active" : ""}
// onClick={()=>setSize("1 L")}
// >
// 1 L
// </button>

// <input
// type="number"
// placeholder="Enter Quantity"
// />

// </div>


// {/* QUANTITY */}

// <div className="cart-row">

// <div className="qty-box">

// <button onClick={decrease}>
// <FaMinus/>
// </button>

// <span>{qty}</span>

// <button onClick={increase}>
// <FaPlus/>
// </button>

// </div>

// <button className="cart-btn">
// <FaShoppingCart/> Add to Cart
// </button>

// </div>


// {/* DESCRIPTION */}

// <div className="description">

// <h2>Groundnut Oil Description</h2>

// <p>
// Groundnut oil is a natural cooking oil extracted from high-quality
// peanuts using a cold-pressed method to retain its nutrients and flavor.
// It has a light golden color, rich aroma, and smooth taste that enhances
// the flavor of food.
// </p>

// <p>
// This oil is rich in healthy fats, vitamin E, and antioxidants, making it
// a good choice for daily cooking. Groundnut oil is commonly used for
// frying, sautéing, and traditional dishes because of its high smoke
// point.
// </p>

// </div>

// </div>

// </div>


// {/* CUSTOMER REVIEWS */}

// <div className="reviews-section">

// <h2>What Our Customers Say</h2>

// <div className="review-grid">

// <div className="review-card">
// <img src="https://randomuser.me/api/portraits/women/1.jpg"/>
// <h4>Vedika</h4>
// <p>
// Best groundnut oil I have ever used. Natural taste and aroma reminds
// me of my grandmother's cooking!
// </p>

// <div className="stars">
// <FaStar/><FaStar/><FaStar/><FaStar/><FaStar/>
// </div>
// </div>


// <div className="review-card">
// <img src="https://randomuser.me/api/portraits/women/2.jpg"/>
// <h4>Vedika</h4>
// <p>
// Best groundnut oil I have ever used. Natural taste and aroma reminds
// me of my grandmother's cooking!
// </p>

// <div className="stars">
// <FaStar/><FaStar/><FaStar/><FaStar/><FaStar/>
// </div>
// </div>


// <div className="review-card">
// <img src="https://randomuser.me/api/portraits/women/3.jpg"/>
// <h4>Vedika</h4>
// <p>
// Best groundnut oil I have ever used. Natural taste and aroma reminds
// me of my grandmother's cooking!
// </p>

// <div className="stars">
// <FaStar/><FaStar/><FaStar/><FaStar/><FaStar/>
// </div>
// </div>

// </div>

// </div>


// {/* PRODUCTS */}

// <section className="products">

// <p className="collection">Our Collection</p>

// <h2 className="product-title">
// Featured <span>Premium Oils</span>
// </h2>

// <p className="product-desc">
// Handpicked selection of cold-pressed oils crafted with traditional methods
// for maximum purity and nutrition.
// </p>


// <div className="product-grid">

// {relatedProducts.map((item)=>(
// <div className="card" key={item.id}>

// <div
// className={`wishlist ${favorites.includes(item.id) ? "active" : ""}`}
// onClick={()=>toggleFavorite(item.id)}
// >
// <FaHeart/>
// </div>

// <div className="card-img">
// <img src={item.img} alt={item.name}/>
// </div>

// <div className="card-info">

// <div className="title-row">
// <h3>{item.name}</h3>
// <span className="price">{item.price}</span>
// </div>

// <p>{item.desc}</p>

// <button
// className={`btn-cart ${cart.includes(item.id) ? "added" : ""}`}
// onClick={()=>toggleCart(item.id)}
// >
// <FaShoppingCart/>
// {cart.includes(item.id) ? " Remove Cart" : " Add to Cart"}
// </button>

// <a className="details">View Details</a>

// </div>

// </div>
// ))}

// </div>
// </section>
//  {/* FOOTER */}

//       <footer className="footer">

//         <div>

//           <h3>Aurova Oils</h3>

//           <p>
//             We produce natural oils using traditional cold-pressed
//             methods that preserve nutrients and flavor while ensuring
//             purity.
//           </p>

//         </div>


//         <div>

//           <h4>Quick Links</h4>

//           <p>Home</p>
//           <p>All Oils</p>
//           <p>Health Benefits</p>
//           <p>About Us</p>
//           <p>Contact</p>

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
      
// </div>
// </div>
// )

// }

import React, { useState, useEffect } from "react";
import "./ProductDescription.css";
import { NavLink, useParams, Link } from "react-router-dom";
import {
FaShoppingCart,
FaHeart,
FaBell,
FaUser,
FaStar,
FaMinus,
FaPlus
} from "react-icons/fa";

import thumb from "../images/oil-thumb.png";

import coconut from "../images/groundnut-oil.png";
import sesame from "../images/groundnut-oil.png";
import mustard from "../images/groundnut-oil.png";

export default function ProductDescription() {

const { id } = useParams();

const BASE_URL = "http://192.168.88.7:8080";

const [product,setProduct] = useState(null);

const [qty,setQty] = useState(1)
const [size,setSize] = useState("250 ML")
const [favorites, setFavorites] = useState([]);
const [cart, setCart] = useState([]);

useEffect(()=>{

fetch(`${BASE_URL}/api/products/${id}`)
.then(res=>res.json())
.then(data=>{
console.log("Product:",data)
setProduct(data)
})
.catch(err=>console.log(err))

},[id])

const increase = () =>{
setQty(qty+1)
}

const decrease = () =>{
if(qty>1){
setQty(qty-1)
}
}

const relatedProducts = [
{
id:1,
name:"Virgin Coconut Oil",
price:"₹399",
img:coconut,
desc:"Rich in healthy fats..."
},
{
id:2,
name:"Black Sesame Oil",
price:"₹299",
img:sesame,
desc:"Pungent and flavorful..."
},
{
id:3,
name:"Yellow Mustard Oil",
price:"₹279",
img:mustard,
desc:"Light and versatile..."
}
]

const toggleFavorite = (id) => {

if(favorites.includes(id)){
setFavorites(favorites.filter(item => item !== id));
}else{
setFavorites([...favorites,id]);
}

};

const toggleCart = (id) => {

if(cart.includes(id)){
setCart(cart.filter(item => item !== id));
}else{
setCart([...cart,id]);
}

};

if(!product){
return <h2 style={{textAlign:"center"}}>Loading...</h2>
}

return (

<div>

{/* NAVBAR */}

<nav className="navbar">

<h2 className="logo">Aurova Oils</h2>

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

<div className="product-page">

{/* PRODUCT SECTION */}

<div className="product-container">

{/* LEFT SIDE */}

<div className="product-images">

<img 
src={`${BASE_URL}${product.imageUrl}`} 
className="main-image"
/>

<div className="thumbnail-row">
<img src={thumb}/>
<img src={thumb}/>
<img src={thumb}/>
<img src={thumb}/>
</div>

</div>

{/* RIGHT SIDE */}

<div className="product-info">

<h1>{product.name}</h1>

<h2>₹{product.price}</h2>

<div className="rating">

<div className="rating-box">
<FaStar/> 4.6
</div>

<span>422 Verified reviews</span>

</div>

<h3>Size:</h3>

<div className="size-options">

<button
className={size==="250 ML" ? "active" : ""}
onClick={()=>setSize("250 ML")}
>
250 ML
</button>

<button
className={size==="500 ML" ? "active" : ""}
onClick={()=>setSize("500 ML")}
>
500 ML
</button>

<button
className={size==="1 L" ? "active" : ""}
onClick={()=>setSize("1 L")}
>
1 L
</button>

<input
type="number"
placeholder="Enter Quantity"
/>

</div>

{/* QUANTITY */}

<div className="cart-row">

<div className="qty-box">

<button onClick={decrease}>
<FaMinus/>
</button>

<span>{qty}</span>

<button onClick={increase}>
<FaPlus/>
</button>

</div>

<button className="cart-btn">
<FaShoppingCart/> Add to Cart
</button>

</div>

{/* DESCRIPTION */}

<div className="description">

<h2>{product.name} Description</h2>

<p>{product.description}</p>

</div>

</div>

</div>

{/* CUSTOMER REVIEWS */}

<div className="reviews-section">

<h2>What Our Customers Say</h2>

<div className="review-grid">

<div className="review-card">
<img src="https://randomuser.me/api/portraits/women/1.jpg"/>
<h4>Vedika</h4>
<p>
Best groundnut oil I have ever used. Natural taste and aroma reminds
me of my grandmother's cooking!
</p>

<div className="stars">
<FaStar/><FaStar/><FaStar/><FaStar/><FaStar/>
</div>
</div>

<div className="review-card">
<img src="https://randomuser.me/api/portraits/women/2.jpg"/>
<h4>Vedika</h4>
<p>
Best groundnut oil I have ever used. Natural taste and aroma reminds
me of my grandmother's cooking!
</p>

<div className="stars">
<FaStar/><FaStar/><FaStar/><FaStar/><FaStar/>
</div>
</div>

<div className="review-card">
<img src="https://randomuser.me/api/portraits/women/3.jpg"/>
<h4>Vedika</h4>
<p>
Best groundnut oil I have ever used. Natural taste and aroma reminds
me of my grandmother's cooking!
</p>

<div className="stars">
<FaStar/><FaStar/><FaStar/><FaStar/><FaStar/>
</div>
</div>

</div>

</div>

{/* RELATED PRODUCTS */}

<section className="products">

<p className="collection">Our Collection</p>

<h2 className="product-title">
Featured <span>Premium Oils</span>
</h2>

<div className="product-grid">

{relatedProducts.map((item)=>(

<div className="card" key={item.id}>

<div
className={`wishlist ${favorites.includes(item.id) ? "active" : ""}`}
onClick={()=>toggleFavorite(item.id)}
>
<FaHeart/>
</div>

<div className="card-img">
<img src={item.img} alt={item.name}/>
</div>

<div className="card-info">

<div className="title-row">
<h3>{item.name}</h3>
<span className="price">{item.price}</span>
</div>

<p>{item.desc}</p>

<button
className={`btn-cart ${cart.includes(item.id) ? "added" : ""}`}
onClick={()=>toggleCart(item.id)}
>
<FaShoppingCart/>
{cart.includes(item.id) ? " Remove Cart" : " Add to Cart"}
</button>

<a className="details">View Details</a>

</div>

</div>

))}

</div>

</section>

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
© 2026 Aurova Oils. All rights reserved.
</div>

</div>

</div>

)

}