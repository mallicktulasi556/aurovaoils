import "./Benefits.css";
import { FaShoppingCart, FaHeart, FaBell, FaUser, FaLeaf } from "react-icons/fa";
import { NavLink, Link } from "react-router-dom";

export default function Health() {

const oils = [

{
title:"Groundnut Oil",
points:[
"Rich in Vitamin E and monounsaturated fats",
"High smoke point ideal for frying",
"Promotes heart health",
"Natural source of antioxidants"
]
},

{
title:"Mustard Oil",
points:[
"Strong antibacterial properties",
"Rich in omega-3 fatty acids",
"Improves blood circulation",
"Natural pain reliever for joints"
]
},

{
title:"Coconut Oil",
points:[
"Boosts metabolism and energy",
"Natural antimicrobial properties",
"Excellent for skin and hair care",
"Supports healthy digestion"
]
},

{
title:"Olive Oil",
points:[
"Highest in polyphenols",
"Powerful anti-inflammatory",
"Reduces bad cholesterol",
"Supports brain health"
]
}

]

return(

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


{/* HEADER */}

<section className="health-header">

<h1>
Our Oil <span>Health Benefits</span>
</h1>

<p>
Discover how our cold-pressed oils can transform your health,
cooking, and wellness routine.
</p>

</section>


{/* BENEFITS GRID */}

<section className="benefits-container">

{oils.map((oil,index)=>(
<div className="benefit-box" key={index}>

<h2>{oil.title}</h2>

<ul>

{oil.points.map((point,i)=>(
<li key={i}>
<FaLeaf className="leaf-icon"/>
{point}
</li>
))}

</ul>

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