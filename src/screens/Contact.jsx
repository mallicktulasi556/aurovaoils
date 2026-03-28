import "./Contact.css";
import { NavLink, Link } from "react-router-dom";
import { FaShoppingCart, FaHeart, FaBell, FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact(){

return(

<div>

{/* NAVBAR */}

<nav className="navbar">

<h2 className="logo">Aurova Oils</h2>

<ul className="nav-links">

<li>
<NavLink to="/home" className={({isActive}) => isActive ? "active" : ""}>
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



{/* CONTACT SECTION */}

<section className="contact-section">

<div className="contact-container">


{/* LEFT FORM */}

<div className="contact-form">

<h2>Send a Message</h2>

<label>Name</label>
<input type="text" placeholder="Enter here....."/>

<label>E-mail ID</label>
<input type="email" placeholder="Enter here....."/>

<label>Mobile Number</label>
<input type="text" placeholder="Enter here....."/>

<label>Message</label>
<textarea placeholder="Enter here....."></textarea>

<button className="send-btn">Send Message</button>

</div>



{/* RIGHT CONTACT DETAILS */}

<div className="contact-right">

<div className="contact-info">

<h3>Stay In Touch</h3>

<div className="info-item">

<div className="icon-box">
<FaEnvelope/>
</div>

<div>
<h4>E-mail Id</h4>
<p>aurovaoils@gmail.com</p>
</div>

</div>


<div className="info-item">

<div className="icon-box">
<FaPhone/>
</div>

<div>
<h4>Mobile Number</h4>
<p>+917856493546</p>
</div>

</div>


<div className="info-item">

<div className="icon-box">
<FaMapMarkerAlt/>
</div>

<div>
<h4>Address</h4>
<p>2-23, Arundelpet, Guntur, Andhra Pradesh</p>
</div>

</div>

</div>


{/* MAP */}

<div className="map">

<img
src="https://maps.gstatic.com/tactile/basepage/pegman_sherlock.png"
alt="map"
/>

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
© 2026 Aurova Oils. All rights reserved. Made with ❤️ for healthy living.
</div>

</div>

)

}