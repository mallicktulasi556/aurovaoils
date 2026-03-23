import "./Payment.css";
import { FaShoppingCart, FaHeart, FaBell, FaUser, FaMinus, FaPlus } from "react-icons/fa";
import { useState } from "react";
import pic from "../images/pic.png";

import { NavLink, Link } from "react-router-dom";
export default function Payment(){
const [qty, setQty] = useState(1);

const increaseQty = () => {
  setQty(qty + 1);
};

const decreaseQty = () => {
  if(qty > 1){
    setQty(qty - 1);
  }
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


{/* PAYMENT SECTION */}

<section className="payment-container">

<div className="payment-grid">


{/* LEFT PAYMENT METHODS */}

<div className="payment-left">

<h3>Payment Methods</h3>

<div className="payment-option">
<input type="radio" name="payment"/>
<div>
<p>Pay on Delivery</p>
<span>Pay with cash on delivery</span>
</div>
</div>


<div className="payment-option">
<input type="radio" name="payment" defaultChecked/>
<div>
<p>Credit/Debit Cards</p>
<span>Pay with your Credit / Debit Card</span>
</div>
</div>


<div className="card-box">

<input placeholder="Card number"/>

<div className="card-row">
<input placeholder="MM / YY"/>
<input placeholder="CVV"/>
</div>

</div>


<div className="payment-option">
<input type="radio" name="payment"/>
<div>
<p>Direct Bank Transfer</p>
<span>Make payment directly through bank account.</span>
</div>
</div>


<div className="payment-option">
<input type="radio" name="payment"/>
<div>
<p>Other Payment Methods</p>
<span>Gpay, Paypal, Paytm etc</span>
</div>
</div>


<button className="pay-btn">₹120</button>

</div>



{/* RIGHT ORDER SUMMARY */}

<div className="order-summary">

<div className="product">

<img src={pic} alt="oil" />

<div>
<h3>Ground Nut Oil</h3>
<p>500 Ml</p>
<p>₹190</p>
</div>

<div className="qty">

<button onClick={decreaseQty}>
<FaMinus/>
</button>

<span>{qty}</span>

<button onClick={increaseQty}>
<FaPlus/>
</button>

</div>

</div>

<hr/>

<div className="price-row">
<p>Item Total</p>
<span>₹190.00</span>
</div>

<div className="price-row">
<p>Delivery fees</p>
<span>₹30</span>
</div>

<hr/>

<div className="grand-total">
<p>Grand Total</p>
<span>₹220</span>
</div>

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