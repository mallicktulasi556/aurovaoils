// import "./Home.css";
// import { useState, useEffect } from "react";
// import { 
// FaShoppingCart,
// FaHeart,
// FaUser,
// FaSeedling,
// FaLeaf,
// FaShieldAlt,
// FaFlask,
// FaBell
// } from "react-icons/fa";
// import { NavLink } from "react-router-dom";
// // import { BASE_URL } from "../config";

// import heroOil from "../images/herooil.png";
// import oil1 from "../images/OIL.png";
// import oil2 from "../images/OIL.png";
// import oil3 from "../images/OIL.png";

// export default function App() {

// const [products,setProducts] = useState([]);
// const [favorites,setFavorites] = useState([]);
// const [cart,setCart] = useState([]);
// const [showAll,setShowAll] = useState(false);

// const BASE_URL = "http://192.168.88.23:8080";

// useEffect(()=>{

// fetch(`${BASE_URL}/api/products`)
// .then((res)=>res.json())
// .then((data)=>{
// console.log("Products:",data)
// setProducts(data)
// })
// .catch((err)=>{
// console.log(err)
// })

// },[])

// const toggleFavorite = (id)=>{
// if(favorites.includes(id)){
// setFavorites(favorites.filter(item=>item!==id))
// }else{
// setFavorites([...favorites,id])
// }
// }

// const toggleCart = (id)=>{
// if(cart.includes(id)){
// setCart(cart.filter(item=>item!==id))
// }else{
// setCart([...cart,id])
// }
// }

// const benefits = [
// {icon:<FaHeart/>,title:"Heart Healthy"},
// {icon:<FaLeaf/>,title:"Rich in Antioxidants"},
// {icon:<FaSeedling/>,title:"Natural & Chemical Free"},
// {icon:<FaShieldAlt/>,title:"Cold Pressed Process"},
// {icon:<FaHeart/>,title:"Improves Digestion"}
// ];

// const promises = [
// "100% Natural",
// "Traditional Cold Pressed",
// "No Preservatives",
// "Farm to Kitchen",
// "Lab Tested Quality"
// ];

// return (
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

// {/* HERO */}

// <section className="hero">

// <div className="hero-text">

// <span className="badge">100% Cold Pressed & Natural</span>

// <h1>
// Pure & Natural <br />
// <span>Cooking Oils</span> for Healthy Living
// </h1>

// <p>
// Cold-pressed chemical-free oils made from the finest seeds.
// </p>

// <div className="hero-buttons">
// <button className="btn-primary">Shop Oils</button>
// <button className="btn-outline">Explore Benefits</button>
// </div>

// <div className="stats">

// <div>
// <h3>50K+</h3>
// <p>Happy Customers</p>
// </div>

// <div>
// <h3>8+</h3>
// <p>Premium Oils</p>
// </div>

// <div>
// <h3>100%</h3>
// <p>Natural</p>
// </div>

// </div>

// </div>

// <div className="hero-right">

// <img src={heroOil} className="hero-img"/>

// <div className="oil-thumbnails">

// <div className="thumb">
// <img src={oil1}/>
// </div>

// <div className="thumb">
// <img src={oil2}/>
// </div>

// <div className="thumb">
// <img src={oil3}/>
// </div>

// </div>

// </div>

// </section>

// {/* PRODUCTS */}

// <section className="products">

// <p className="collection">Our Collection</p>

// <h2 className="product-title">
// Featured <span>Premium Oils</span>
// </h2>

// <div className="product-grid">

// {products.slice(0, showAll ? 6 : 3).map((item)=>(

// <div className="card" key={item.id}>

// <div
// className={`wishlist ${favorites.includes(item.id) ? "active" : ""}`}
// onClick={()=>toggleFavorite(item.id)}
// >
// <FaHeart/>
// </div>

// <div className="card-img">
// <img src={`${BASE_URL}${item.imageUrl}`} alt={item.name}/>
// </div>

// <div className="card-info">

// <div className="title-row">
// <h3>{item.name}</h3>
// <span className="price">₹{item.price}</span>
// </div>

// <p>{item.description}</p>

// <button
// className={`btn-cart ${cart.includes(item.id) ? "added" : ""}`}
// onClick={()=>toggleCart(item.id)}
// >
// <FaShoppingCart/>
// {cart.includes(item.id) ? " Remove Cart" : " Add to Cart"}
// </button>

// {/* PRODUCT DETAILS NAVIGATION */}

// <NavLink to={`/productdescription/${item.id}`} className="details">
// View Details
// </NavLink>

// </div>

// </div>

// ))}

// </div>

// <div className="view-all">

// <button
// className="view-btn"
// onClick={()=>setShowAll(!showAll)}
// >
// {showAll ? "Close Oils" : "View all Oils"}
// </button>

// </div>

// </section>

// {/* HEALTH BENEFITS */}

// <section className="benefits">

// <p className="benefit-small">Why Natural Oils?</p>

// <h2 className="benefit-title">
// Health <span>Benefits</span>
// </h2>

// <div className="benefit-grid">

// {benefits.map((item,index)=>(
// <div className="benefit-card" key={index}>

// <div className="benefit-icon">
// {item.icon}
// </div>

// <h4>{item.title}</h4>

// <p>
// Rich in monounsaturated fats that support cardiovascular health.
// </p>

// </div>
// ))}

// </div>

// </section>

// {/* WHY CHOOSE OUR OILS */}

// <section className="promise">

// <p className="promise-small">Our Promise</p>

// <h2 className="promise-title">
// Why Choose <span>Our Oils</span>
// </h2>

// <div className="promise-grid">

// <div className="promise-card">
// <div className="promise-icon"><FaLeaf/></div>
// <h3>100% Natural</h3>
// <p>Pure oils with no blending or adulteration.</p>
// </div>

// <div className="promise-card">
// <div className="promise-icon"><FaSeedling/></div>
// <h3>Traditional Cold Pressed</h3>
// <p>Wooden Ghani method preserves all nutrients.</p>
// </div>

// <div className="promise-card">
// <div className="promise-icon"><FaShieldAlt/></div>
// <h3>No Preservatives</h3>
// <p>Zero chemicals, zero preservatives, zero compromise.</p>
// </div>

// <div className="promise-card">
// <div className="promise-icon"><FaShoppingCart/></div>
// <h3>Farm to Kitchen</h3>
// <p>Direct sourcing from trusted farmers.</p>
// </div>

// <div className="promise-card">
// <div className="promise-icon"><FaFlask/></div>
// <h3>Lab Tested Quality</h3>
// <p>Every batch tested for purity and safety.</p>
// </div>

// </div>

// </section>

// {/* FOOTER */}

// <footer className="footer">

// <div>
// <h3>Aurova Oils</h3>
// <p>
// Natural cold pressed oils preserving
// nutrients and authentic taste.
// </p>
// </div>

// <div>
// <h4>Quick Links</h4>
// <p>Home</p>
// <p>Oils</p>
// <p>About</p>
// <p>Contact</p>
// </div>

// <div>
// <h4>Customer Support</h4>
// <p>FAQ</p>
// <p>Shipping Policy</p>
// <p>Refund Policy</p>
// <p>Privacy Policy</p>
// <p>Terms & Conditions</p>
// </div>

// <div>
// <h4>Contact Us</h4>
// <p>Mumbai India</p>
// <p>+91 98765 43210</p>
// <p>Email: oils@gmail.com</p>
// </div>

// </footer>

// </div>
// );
// }

import "./Home.css";
import { useState, useEffect } from "react";
import {
    FaShoppingCart,
    FaHeart,
    FaUser,
    FaSeedling,
    FaLeaf,
    FaShieldAlt,
    FaFlask,
    FaBell
} from "react-icons/fa";
import { NavLink, Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import heroOil from "../images/herooil.png";
import oil1 from "../images/OIL.png";
import oil2 from "../images/OIL.png";
import oil3 from "../images/OIL.png";

export default function App() {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const [showAll, setShowAll] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    const BASE_URL = "http://18.61.100.138:8080";

    useEffect(() => {

        fetch(`${BASE_URL}/api/products`)
            .then((res) => res.json())
            .then((data) => {
                console.log("Products:", data)
                setProducts(data)
            })
            .catch((err) => {
                console.log(err)
            })

    }, [])

useEffect(() => {
  const fetchWishlist = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await fetch(`${BASE_URL}/api/wishlist`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();

      console.log("Wishlist API:", data);

      const updatedData = (data.products || []).map(item => ({
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

const fetchCart = async () => {
  try {
    const token = localStorage.getItem("token");

    const res = await fetch(`${BASE_URL}/api/cart`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    const data = await res.json();
    setCartItems(data.items || []);

  } catch (err) {
    console.log(err);
  }
};

useEffect(() => {
  fetchCart();
}, []);

const isInCart = (productId) => {
  return cartItems.some(item => item.productId === productId);
};


const toggleFavorite = async (productId) => {
  try {
    const token = localStorage.getItem("token");

    if (favorites.includes(productId)) {

      // ❌ REMOVE
      await fetch(`${BASE_URL}/api/wishlist/${productId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setFavorites(favorites.filter(id => id !== productId));

    } else {

      // ✅ ADD
      await fetch(`${BASE_URL}/api/wishlist/${productId}`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setFavorites([...favorites, productId]);
    }

  } catch (error) {
    console.error(error);
  }
};


// const addToCartAPI = async (productId) => {
//   try {
//     const token = localStorage.getItem("token");

//     if (!token) {
//       alert("Please login first ❌");
//       return;
//     }

//     const response = await fetch(`${BASE_URL}/api/cart`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`
//       },
//       body: JSON.stringify({
//         productId: productId,
//         quantity: 1
//       })
//     });

//     if (!response.ok) {
//       const err = await response.text();
//       console.log(err);
//       throw new Error("Failed");
//     }

//     alert("Added to cart ✅");

//   } catch (error) {
//     console.error("Cart error:", error);
//     alert("Failed to add cart ❌");
//   }
// };

const addToCartAPI = async (productId) => {
  try {
    const token = localStorage.getItem("token");

    if (!token) {
      alert("Please login first ❌");
      return;
    }

    const response = await fetch(`${BASE_URL}/api/cart`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({
        productId,
        quantity: 1
      })
    });

    if (!response.ok) throw new Error();

    await fetchCart(); // 🔥 IMPORTANT

  } catch (error) {
    console.error(error);
  }
};

    const benefits = [
        { icon: <FaHeart />, title: "Heart Healthy" },
        { icon: <FaLeaf />, title: "Rich in Antioxidants" },
        { icon: <FaSeedling />, title: "Natural & Chemical Free" },
        { icon: <FaShieldAlt />, title: "Cold Pressed Process" },
        { icon: <FaHeart />, title: "Improves Digestion" }
    ];

    return (
        <div>

            {/* NAVBAR */}

            <nav className="navbar">

                <h2>Aurova Oils</h2>

                <ul className="nav-links">

                    <li>
                        <NavLink to="/home" className={({ isActive }) => isActive ? "active" : ""}>
                            Home
                        </NavLink>
                        
                    </li>

                    <li>
                        <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>
                            About Us
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/oils" className={({ isActive }) => isActive ? "active" : ""}>
                            Oils
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/benefits" className={({ isActive }) => isActive ? "active" : ""}>
                            Health Benefits
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>
                            Contact Us
                        </NavLink>
                    </li>

                </ul>

                <div className="nav-icons">

                    <NavLink to="/cart" className={({ isActive }) => isActive ? "icon active" : "icon"}>
                        <FaShoppingCart />
                    </NavLink>

                    <NavLink to="/wishlist" className={({ isActive }) => isActive ? "icon active" : "icon"}>
                        <FaHeart />
                    </NavLink>

                    <NavLink to="/notifications" className={({ isActive }) => isActive ? "icon active" : "icon"}>
                        <FaBell />
                    </NavLink>

                    <NavLink to="/profile" className={({ isActive }) => isActive ? "icon active" : "icon"}>
                        <FaUser />
                    </NavLink>

                </div>

            </nav>

            {/* HERO */}

            <section className="hero">

                <div className="hero-text">

                    <span className="badge">100% Cold Pressed & Natural</span>

                    <h1>
                        Pure & Natural <br />
                        <span>Cooking Oils</span> for Healthy Living
                    </h1>

                    <p>
                        Cold-pressed chemical-free oils made from the finest seeds.
                    </p>

                    <div className="hero-buttons">
               <button 
               className="btn-primary"
               onClick={() => navigate("/oils")}
                >
                Shop Oils
                </button>
            <button 
            className="btn-outline"
            onClick={() => navigate("/benefits")}
            >
            Explore Benefits
            </button>
                    </div>

                    <div className="stats">

                        <div>
                            <h3>50K+</h3>
                            <p>Happy Customers</p>
                        </div>

                        <div>
                            <h3>8+</h3>
                            <p>Premium Oils</p>
                        </div>

                        <div>
                            <h3>100%</h3>
                            <p>Natural</p>
                        </div>

                    </div>

                </div>

                <div className="hero-right">

                    <img src={heroOil} className="hero-img" />

                    <div className="oil-thumbnails">

                        <div className="thumb">
                            <img src={oil1} />
                        </div>

                        <div className="thumb">
                            <img src={oil2} />
                        </div>

                        <div className="thumb">
                            <img src={oil3} />
                        </div>

                    </div>

                </div>

            </section>

            {/* PRODUCTS */}

            <section className="products">

                <p className="collection">Our Collection</p>

                <h2 className="product-title">
                    Featured <span>Premium Oils</span>
                </h2>

                <div className="product-grid">

                    {products.slice(0, showAll ? 6 : 3).map((item) => (

                        <div className="card" key={item.productId}>

                            <div
                                className={`wishlist ${favorites.includes(item.productId) ? "active" : ""}`}
                                onClick={() => toggleFavorite(item.productId)}
                            >
                                <FaHeart />
                            </div>

                            <div className="card-img">
                                <img src={`${BASE_URL}${item.imageUrl}`} alt={item.name} />
                            </div>

                            <div className="card-info">

                                <div className="title-row">
                                    <h3>{item.name}</h3>
                                    <span className="price">₹{item.price}</span>
                                </div>

                                <p>{item.description}</p>

                                {/* <button
                                    className={`btn-cart ${cart.includes(item.productId) ? "added" : ""}`}
                                    onClick={() => { toggleCart(item.productId);   addToCartAPI(item.productId); }}
                                >
                                    <FaShoppingCart />
                                    {cart.includes(item.productId) ? " Remove Cart" : " Add to Cart"}
                                </button> */}
                                <button
  className={`btn-cart ${isInCart(item.productId) ? "added" : ""}`}
  onClick={() => addToCartAPI(item.productId)}
>
  <FaShoppingCart />
  {isInCart(item.productId) ? "Added" : "Add to Cart"}
</button>

                                {/* NAVIGATION TO PRODUCT PAGE */}

         {/* <NavLink to={`/animations`} className="details">
  View Details
</NavLink> */}
<NavLink to={`/products/${item.productId}`} className="details">View Details</NavLink>

        </div>


                        </div>

                    ))}

                </div>

                <div className="view-all">

                    <button
                        className="view-btn"
                        onClick={() => setShowAll(!showAll)}
                    >
                        {showAll ? "Close Oils" : "View all Oils"}
                    </button>

                </div>

            </section>

            {/* HEALTH BENEFITS */}

            <section className="benefits">

                <p className="benefit-small">Why Natural Oils?</p>

                <h2 className="benefit-title">
                    Health <span>Benefits</span>
                </h2>

                <div className="benefit-grid">

                    {benefits.map((item, index) => (
                        <div className="benefit-card" key={index}>

                            <div className="benefit-icon">
                                {item.icon}
                            </div>

                            <h4>{item.title}</h4>

                            <p>
                                Rich in monounsaturated fats that support cardiovascular health.
                            </p>

                        </div>
                    ))}

                </div>

            </section>
            {/* WHY CHOOSE OUR OILS */}

            <section className="promise">

                <p className="promise-small">Our Promise</p>

                <h2 className="promise-title">
                    Why Choose <span>Our Oils</span>
                </h2>

                <div className="promise-grid">

                    <div className="promise-card">
                        <div className="promise-icon"><FaLeaf /></div>
                        <h3>100% Natural</h3>
                        <p>Pure oils with no blending or adulteration.</p>
                    </div>

                    <div className="promise-card">
                        <div className="promise-icon"><FaSeedling /></div>
                        <h3>Traditional Cold Pressed</h3>
                        <p>Wooden Ghani method preserves all nutrients.</p>
                    </div>

                    <div className="promise-card">
                        <div className="promise-icon"><FaShieldAlt /></div>
                        <h3>No Preservatives</h3>
                        <p>Zero chemicals, zero preservatives, zero compromise.</p>
                    </div>

                    <div className="promise-card">
                        <div className="promise-icon"><FaShoppingCart /></div>
                        <h3>Farm to Kitchen</h3>
                        <p>Direct sourcing from trusted farmers.</p>
                    </div>

                    <div className="promise-card">
                        <div className="promise-icon"><FaFlask /></div>
                        <h3>Lab Tested Quality</h3>
                        <p>Every batch tested for purity and safety.</p>
                    </div>

                </div>

            </section>


            {/* TESTIMONIALS */}

            <section className="testimonials">

                <p className="testimonial-small">Testimonials</p>

                <h2 className="testimonial-title">
                    What Our <span>Customers</span> Say
                </h2>

                <div className="testimonial-grid">

                    <div className="testimonial-card">

                        <div className="testimonial-user">
                            <h3>Swetha</h3>
                        </div>

                        <p>
                            "Best groundnut oil I have ever used. Natural taste and aroma
                            that reminds me of my grandmother's cooking!"
                        </p>

                        <div className="stars">
                            ★★★★★
                        </div>

                    </div>


                    <div className="testimonial-card center">

                        <div className="testimonial-user">
                            
                            <h3>Swetha</h3>
                        </div>

                        <p>
                            "Best groundnut oil I have ever used. Natural taste and aroma
                            that reminds me of my grandmother's cooking!"
                        </p>

                        <div className="stars">
                            ★★★★★
                        </div>

                    </div>


                    <div className="testimonial-card">

                        <div className="testimonial-user">
                    
                            <h3>Swetha</h3>
                        </div>

                        <p>
                            "Best groundnut oil I have ever used. Natural taste and aroma
                            that reminds me of my grandmother's cooking!"
                        </p>

                        <div className="stars">
                            ★★★★★
                        </div>

                    </div>

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