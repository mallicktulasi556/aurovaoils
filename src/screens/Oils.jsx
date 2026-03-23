import "./Oils.css";
import {
FaShoppingCart,
FaHeart,
FaBell,
FaUser
} from "react-icons/fa";
import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
import oil from "../images/oil.png";

export default function Oils(){

const [favorites,setFavorites] = useState([]);
const [cart,setCart] = useState([]);

/* ✅ FILTER STATE */
const [filter, setFilter] = useState("all");

const toggleFavorite = (index) => {
if(favorites.includes(index)){
setFavorites(favorites.filter(id => id !== index));
}else{
setFavorites([...favorites,index]);
}
};

const toggleCart = (index) => {
if(cart.includes(index)){
setCart(cart.filter(id => id !== index));
}else{
setCart([...cart,index]);
}
};

/* ✅ PRODUCTS WITH CATEGORY */
const products=[
{
id:1,
name:"Groundnut Oil",
price:"₹349",
desc:"Rich in healthy fats...",
category:"cooking"
},
{
id:2,
name:"Black Mustard Oil",
price:"₹299",
desc:"Pungent and flavorful...",
category:"cooking"
},
{
id:3,
name:"Sunflower Oil",
price:"₹279",
desc:"Light and versatile...",
category:"multi"
},
{
id:4,
name:"Virgin Coconut Oil",
price:"₹399",
desc:"Healthy oil...",
category:"multi"
},
{
id:5,
name:"Black Sesame Oil",
price:"₹299",
desc:"Flavorful oil...",
category:"cooking"
},
{
id:6,
name:"Yellow Mustard Oil",
price:"₹279",
desc:"Mild flavor...",
category:"cooking"
}
];

/*  FILTER LOGIC */
const filteredProducts =
filter === "all"
? products
: products.filter(item => item.category === filter);

return(

<div>

{/* NAVBAR */}
<nav className="navbar">

<h2 className="logo">Aurova Oils</h2>

<ul className="nav-links">
<li><NavLink to="/" className={({isActive}) => isActive ? "active" : ""}>Home</NavLink></li>
<li><NavLink to="/about" className={({isActive}) => isActive ? "active" : ""}>About Us</NavLink></li>
<li><NavLink to="/oils" className={({isActive}) => isActive ? "active" : ""}>Oils</NavLink></li>
<li><NavLink to="/benefits" className={({isActive}) => isActive ? "active" : ""}>Health Benefits</NavLink></li>
<li><NavLink to="/contact" className={({isActive}) => isActive ? "active" : ""}>Contact Us</NavLink></li>
</ul>

<div className="nav-icons">
<NavLink to="/cart" className={({isActive}) => isActive ? "icon active" : "icon"}><FaShoppingCart/></NavLink>
<NavLink to="/wishlist" className={({isActive}) => isActive ? "icon active" : "icon"}><FaHeart/></NavLink>
<NavLink to="/notifications" className={({isActive}) => isActive ? "icon active" : "icon"}><FaBell/></NavLink>
<NavLink to="/profile" className={({isActive}) => isActive ? "icon active" : "icon"}><FaUser/></NavLink>
</div>

</nav>

{/* HEADER */}
<section className="oil-header">

<h1>Our <span>Oil Collection</span></h1>
<p>Browse our range of premium cold-pressed oils.</p>

<div className="filters">

<button
className={filter === "all" ? "active-btn" : ""}
onClick={() => setFilter("all")}
>
All
</button>

<button
className={filter === "cooking" ? "active-btn" : ""}
onClick={() => setFilter("cooking")}
>
Cooking
</button>

<button
className={filter === "multi" ? "active-btn" : ""}
onClick={() => setFilter("multi")}
>
Multi-use
</button>

</div>

</section>

{/* PRODUCTS */}
<section className="oil-grid">

{filteredProducts.map((item,index)=>(

<div className="oil-card" key={item.id}>

{/* WISHLIST */}
<div
className={`wishlist ${favorites.includes(index) ? "active" : ""}`}
onClick={()=>toggleFavorite(index)}
>
<FaHeart/>
</div>

{/* IMAGE */}
<img src={oil} alt="oil"/>

{/* CONTENT */}
<div className="oil-content">

<div className="oil-title">
<h3>{item.name}</h3>
<span>{item.price}</span>
</div>

<p>{item.desc}</p>

{/* CART */}
<button
className={`cart-btn ${cart.includes(index) ? "added" : ""}`}
onClick={()=>toggleCart(index)}
>
<FaShoppingCart/>
{cart.includes(index) ? " Remove Cart" : " Add to Cart"}
</button>

{/* DETAILS */}

         <NavLink to={`/animations/${item.id}`} className="details">
  View Details
</NavLink>

</div>

</div>

))}

</section>

{/* FOOTER */}
<footer className="footer">

<div>
<h3>Aurova Oils</h3>
<p>  We produce natural oils using traditional cold-pressed
            methods that preserve nutrients and flavor while ensuring
            purity.</p>
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