import "./About.css";
import {
  FaShoppingCart,
  FaHeart,
  FaBell,
  FaUser
} from "react-icons/fa";
import { NavLink, Link } from "react-router-dom";
import oilImage from "../images/about-oil.png"; // place image in src/images

export default function About() {
  return (
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


      {/* HERO SECTION */}

      <section className="about-hero">

        <div className="about-text">

          <h1>About Aurova Oils</h1>

          <p>
            “Our journey started with a simple mission to provide pure
            and natural oils for every household. Using traditional
            cold-pressed techniques, we extract oils that retain their
            natural aroma, nutrients, and health benefits. Our oils
            are made from carefully selected seeds and nuts to ensure
            the highest quality.”
          </p>

        </div>


        <div className="about-image">
          <img src={oilImage} alt="oil" />
        </div>

      </section>


      {/* INFO CARDS */}

      <section className="about-info">

        <div className="info-card">

          <h3>Our Story</h3>

          <p>
            We started with a simple belief: every kitchen deserves
            pure, chemical-free oils. Growing up watching our
            grandmothers extract oil using traditional wooden Ghani
            presses, we saw the difference real oil makes. Today,
            we bring that same authentic quality to modern kitchens
            across India.
          </p>

        </div>


        <div className="info-card">

          <h3>Our Mission</h3>

          <ol>
            <li>Sourcing only single-origin cold-pressed oils.</li>
            <li>Transforming everyday cooking into a gourmet ritual.</li>
            <li>Partnering with trusted family-owned farms.</li>
            <li>Providing full soil-to-table visibility.</li>
            <li>Blending traditional extraction with modern quality standards.</li>
          </ol>

        </div>


        <div className="info-card">

          <h3>How Our Oils Are Made</h3>

          <p>
            We use the traditional cold-pressed method where seeds are
            crushed at low temperatures in wooden or stone presses.
            This ensures oils retain their natural flavor, aroma and
            nutrition unlike refined oils that undergo chemical
            processing.
          </p>

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
  );
}