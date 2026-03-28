// import "./Oils.css";
// import {
// FaShoppingCart,
// FaHeart,
// FaBell,
// FaUser
// } from "react-icons/fa";
// import { NavLink, Link } from "react-router-dom";
// import { useState } from "react";
// import oil from "../images/oil.png";

// export default function Oils(){

// const [favorites,setFavorites] = useState([]);
// const [cart,setCart] = useState([]);

// /* ✅ FILTER STATE */
// const [filter, setFilter] = useState("all");

// const toggleFavorite = (index) => {
// if(favorites.includes(index)){
// setFavorites(favorites.filter(id => id !== index));
// }else{
// setFavorites([...favorites,index]);
// }
// };

// const toggleCart = (index) => {
// if(cart.includes(index)){
// setCart(cart.filter(id => id !== index));
// }else{
// setCart([...cart,index]);
// }
// };

// /* ✅ PRODUCTS WITH CATEGORY */
// const products=[
// {
// id:1,
// name:"Groundnut Oil",
// price:"₹349",
// desc:"Rich in healthy fats...",
// category:"cooking"
// },
// {
// id:2,
// name:"Black Mustard Oil",
// price:"₹299",
// desc:"Pungent and flavorful...",
// category:"cooking"
// },
// {
// id:3,
// name:"Sunflower Oil",
// price:"₹279",
// desc:"Light and versatile...",
// category:"multi"
// },
// {
// id:4,
// name:"Virgin Coconut Oil",
// price:"₹399",
// desc:"Healthy oil...",
// category:"multi"
// },
// {
// id:5,
// name:"Black Sesame Oil",
// price:"₹299",
// desc:"Flavorful oil...",
// category:"cooking"
// },
// {
// id:6,
// name:"Yellow Mustard Oil",
// price:"₹279",
// desc:"Mild flavor...",
// category:"cooking"
// }
// ];

// /*  FILTER LOGIC */
// const filteredProducts =
// filter === "all"
// ? products
// : products.filter(item => item.category === filter);

// return(

// <div>

// {/* NAVBAR */}
// <nav className="navbar">

// <h2 className="logo">Aurova Oils</h2>

// <ul className="nav-links">
// <li><NavLink to="/home" className={({isActive}) => isActive ? "active" : ""}>Home</NavLink></li>
// <li><NavLink to="/about" className={({isActive}) => isActive ? "active" : ""}>About Us</NavLink></li>
// <li><NavLink to="/oils" className={({isActive}) => isActive ? "active" : ""}>Oils</NavLink></li>
// <li><NavLink to="/benefits" className={({isActive}) => isActive ? "active" : ""}>Health Benefits</NavLink></li>
// <li><NavLink to="/contact" className={({isActive}) => isActive ? "active" : ""}>Contact Us</NavLink></li>
// </ul>

// <div className="nav-icons">
// <NavLink to="/cart" className={({isActive}) => isActive ? "icon active" : "icon"}><FaShoppingCart/></NavLink>
// <NavLink to="/wishlist" className={({isActive}) => isActive ? "icon active" : "icon"}><FaHeart/></NavLink>
// <NavLink to="/notifications" className={({isActive}) => isActive ? "icon active" : "icon"}><FaBell/></NavLink>
// <NavLink to="/profile" className={({isActive}) => isActive ? "icon active" : "icon"}><FaUser/></NavLink>
// </div>

// </nav>

// {/* HEADER */}
// <section className="oil-header">

// <h1>Our <span>Oil Collection</span></h1>
// <p>Browse our range of premium cold-pressed oils.</p>

// <div className="filters">

// <button
// className={filter === "all" ? "active-btn" : ""}
// onClick={() => setFilter("all")}
// >
// All
// </button>

// <button
// className={filter === "cooking" ? "active-btn" : ""}
// onClick={() => setFilter("cooking")}
// >
// Cooking
// </button>

// <button
// className={filter === "multi" ? "active-btn" : ""}
// onClick={() => setFilter("multi")}
// >
// Multi-use
// </button>

// </div>

// </section>

// {/* PRODUCTS */}
// <section className="oil-grid">

// {filteredProducts.map((item,index)=>(

// <div className="oil-card" key={item.id}>

// {/* WISHLIST */}
// <div
// className={`wishlist ${favorites.includes(index) ? "active" : ""}`}
// onClick={()=>toggleFavorite(index)}
// >
// <FaHeart/>
// </div>

// {/* IMAGE */}
// <img src={oil} alt="oil"/>

// {/* CONTENT */}
// <div className="oil-content">

// <div className="oil-title">
// <h3>{item.name}</h3>
// <span>{item.price}</span>
// </div>

// <p>{item.desc}</p>

// {/* CART */}
// <button
// className={`cart-btn ${cart.includes(index) ? "added" : ""}`}
// onClick={()=>toggleCart(index)}
// >
// <FaShoppingCart/>
// {cart.includes(index) ? " Remove Cart" : " Add to Cart"}
// </button>

// {/* DETAILS */}

//          <NavLink to={`/animations/${item.id}`} className="details">
//   View Details
// </NavLink>

// </div>

// </div>

// ))}

// </section>

// {/* FOOTER */}
// <footer className="footer">

// <div>
// <h3>Aurova Oils</h3>
// <p>  We produce natural oils using traditional cold-pressed
//             methods that preserve nutrients and flavor while ensuring
//             purity.</p>
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
//   <p>Address: 123 Oil Street</p>
//           <p>Mumbai, India</p>
//           <p>Phone: +91 98765 43210</p>
//           <p>Email: oils@gmail.com</p>
// </div>

// </footer>

// <div className="copyright">
// © 2026 Aurova Oils. All rights reserved. Made with ❤️ for healthy living.
// </div>

// </div>

// )
// }

// import "./Oils.css";
// import {
//   FaShoppingCart,
//   FaHeart,
//   FaBell,
//   FaUser
// } from "react-icons/fa";
// import { NavLink, Link } from "react-router-dom";
// import { useState, useEffect } from "react";
// import axios from "axios";
// import oil from "../images/oil.png";

// export default function Oils() {

//   const [favorites, setFavorites] = useState([]);
//   const [cart, setCart] = useState([]);

//   const [products, setProducts] = useState([]);
//   const [allProducts, setAllProducts] = useState([]);
//   const [filter, setFilter] = useState("all");

//   // ✅ LOAD ALL PRODUCTS INITIALLY
//   useEffect(() => {
//     axios.get("http://18.61.100.138:8080/api/products")
//       .then(res => {
//         setProducts(res.data);
//         setAllProducts(res.data);
//       })
//       .catch(err => console.log(err));
//   }, []);

//   // ✅ FILTER LOGIC (API + FALLBACK)
//   useEffect(() => {
//     if (filter === "all") {
//       setProducts(allProducts);
//     } else {
//       axios.get(`http://18.61.100.138:8080/api/products/category/${filter}`)
//         .then(res => {
//           if (res.data.length > 0) {
//             setProducts(res.data);
//           } else {
//             // fallback
//             const filtered = allProducts.filter(
//               item =>
//                 item.category &&
//                 item.category.toLowerCase() === filter.toLowerCase()
//             );
//             setProducts(filtered);
//           }
//         })
//         .catch(() => {
//           const filtered = allProducts.filter(
//             item =>
//               item.category &&
//               item.category.toLowerCase() === filter.toLowerCase()
//           );
//           setProducts(filtered);
//         });
//     }
//   }, [filter, allProducts]);

//   // ❤️ FAVORITES
//   const toggleFavorite = (id) => {
//     if (favorites.includes(id)) {
//       setFavorites(favorites.filter(item => item !== id));
//     } else {
//       setFavorites([...favorites, id]);
//     }
//   };

//   // 🛒 CART
//   const toggleCart = (id) => {
//     if (cart.includes(id)) {
//       setCart(cart.filter(item => item !== id));
//     } else {
//       setCart([...cart, id]);
//     }
//   };

//   return (
//     <div>

//       {/* NAVBAR */}
//       <nav className="navbar">

//         <h2 className="logo">Aurova Oils</h2>

//         <ul className="nav-links">
//           <li><NavLink to="/home">Home</NavLink></li>
//           <li><NavLink to="/about">About Us</NavLink></li>
//           <li><NavLink to="/oils">Oils</NavLink></li>
//           <li><NavLink to="/benefits">Health Benefits</NavLink></li>
//           <li><NavLink to="/contact">Contact Us</NavLink></li>
//         </ul>

//         <div className="nav-icons">
//           <NavLink to="/cart"><FaShoppingCart /></NavLink>
//           <NavLink to="/wishlist"><FaHeart /></NavLink>
//           <NavLink to="/notifications"><FaBell /></NavLink>
//           <NavLink to="/profile"><FaUser /></NavLink>
//         </div>

//       </nav>

//       {/* HEADER */}
//       <section className="oil-header">

//         <h1>Our <span>Oil Collection</span></h1>
//         <p>Browse our premium oils.</p>

//         {/* FILTERS */}
//         <div className="filters">

//           <button
//             className={filter === "all" ? "active-btn" : ""}
//             onClick={() => setFilter("all")}
//           >
//             All
//           </button>

//           <button
//             className={filter === "cooking" ? "active-btn" : ""}
//             onClick={() => setFilter("cooking")}
//           >
//             Cooking
//           </button>

//           <button
//             className={filter === "multi" ? "active-btn" : ""}
//             onClick={() => setFilter("multi")}
//           >
//             Multi-use
//           </button>

//         </div>

//       </section>

//       {/* PRODUCTS */}
//       <section className="oil-grid">

//         {products.length === 0 ? (
//           <h2 style={{ textAlign: "center" }}>No Products Found</h2>
//         ) : (
//           products.map((item) => (

//             <div className="oil-card" key={item.productId}>

//               {/* ❤️ WISHLIST */}
//               <div
//                 className={`wishlist ${favorites.includes(item.productId) ? "active" : ""}`}
//                 onClick={() => toggleFavorite(item.productId)}
//               >
//                 <FaHeart />
//               </div>

//               {/* IMAGE */}
//               <img
//                 src={
//                   item.imageUrl
//                     ? `http://18.61.100.138:8080${item.imageUrl}`
//                     : oil
//                 }
//                 alt={item.name}
//               />

//               {/* CONTENT */}
//               <div className="oil-content">

//                 <div className="oil-title">
//                   <h3>{item.name}</h3>
//                   <span>₹{item.price}</span>
//                 </div>

//                 <p>{item.description}</p>

//                 {/* 🛒 CART */}
//                 <button
//                   className={`cart-btn ${cart.includes(item.productId) ? "added" : ""}`}
//                   onClick={() => toggleCart(item.productId)}
//                 >
//                   <FaShoppingCart />
//                   {cart.includes(item.productId)
//                     ? " Remove Cart"
//                     : " Add to Cart"}
//                 </button>

//                 {/* DETAILS */}
//                 <NavLink
//                   to={`/animations/${item.productId}`}
//                   className="details"
//                 >
//                   View Details
//                 </NavLink>

//               </div>

//             </div>
//           ))
//         )}

//       </section>

//       {/* FOOTER */}
//       <footer className="footer">

//         <div>
//           <h3>Aurova Oils</h3>
//           <p>We produce natural cold-pressed oils.</p>
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
//           <h4>Support</h4>
//           <p>Privacy Policy</p>
//           <p>Terms & Conditions</p>
//         </div>

//         <div>
//           <h4>Contact</h4>
//           <p>Mumbai, India</p>
//           <p>+91 98765 43210</p>
//           <p>oils@gmail.com</p>
//         </div>

//       </footer>

//       <div className="copyright">
//         © 2026 Aurova Oils
//       </div>

//     </div>
//   );
// }

import "./Oils.css";
import {
  FaShoppingCart,
  FaHeart,
  FaBell,
  FaUser
} from "react-icons/fa";
import { NavLink, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import oil from "../images/oil.png";

export default function Oils() {

  const [favorites, setFavorites] = useState([]);
  const [cart, setCart] = useState([]);

  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [categories, setCategories] = useState([]); // ✅ NEW
  const [filter, setFilter] = useState("all");

  // ✅ LOAD ALL PRODUCTS
  useEffect(() => {
    axios.get("http://18.61.100.138:8080/api/products")
      .then(res => {
        setProducts(res.data);
        setAllProducts(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  // ✅ LOAD CATEGORIES (DYNAMIC)
  useEffect(() => {
    axios.get("http://18.61.100.138:8080/api/products/categories")
      .then(res => setCategories(res.data))
      .catch(err => console.log(err));
  }, []);

  // ✅ FILTER LOGIC (API + FALLBACK)
  useEffect(() => {
    if (filter === "all") {
      setProducts(allProducts);
    } else {
      axios.get(`http://18.61.100.138:8080/api/products/category/${filter}`)
        .then(res => {
          if (res.data.length > 0) {
            setProducts(res.data); // ✅ API success
          } else {
            // 🔥 fallback
            const filtered = allProducts.filter(
              item =>
                item.category &&
                item.category.toLowerCase() === filter.toLowerCase()
            );
            setProducts(filtered);
          }
        })
        .catch(() => {
          const filtered = allProducts.filter(
            item =>
              item.category &&
              item.category.toLowerCase() === filter.toLowerCase()
          );
          setProducts(filtered);
        });
    }
  }, [filter, allProducts]);

  // ❤️ FAVORITES
  const toggleFavorite = (id) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter(item => item !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  // 🛒 CART
  const toggleCart = (id) => {
    if (cart.includes(id)) {
      setCart(cart.filter(item => item !== id));
    } else {
      setCart([...cart, id]);
    }
  };

  return (
    <div>

      {/* NAVBAR */}
      <nav className="navbar">

        <h2 className="logo">Aurova Oils</h2>

        <ul className="nav-links">
          <li><NavLink to="/home">Home</NavLink></li>
          <li><NavLink to="/about">About Us</NavLink></li>
          <li><NavLink to="/oils">Oils</NavLink></li>
          <li><NavLink to="/benefits">Health Benefits</NavLink></li>
          <li><NavLink to="/contact">Contact Us</NavLink></li>
        </ul>

        <div className="nav-icons">
          <NavLink to="/cart"><FaShoppingCart /></NavLink>
          <NavLink to="/wishlist"><FaHeart /></NavLink>
          <NavLink to="/notifications"><FaBell /></NavLink>
          <NavLink to="/profile"><FaUser /></NavLink>
        </div>

      </nav>

      {/* HEADER */}
      <section className="oil-header">

        <h1>Our <span>Oil Collection</span></h1>
        <p>Browse our premium oils.</p>

        {/* ✅ FILTERS (DYNAMIC) */}
        <div className="filters">

          {/* ALL */}
          <button
            className={filter === "all" ? "active-btn" : ""}
            onClick={() => setFilter("all")}
          >
            All
          </button>

          {/* DYNAMIC CATEGORIES */}
          {categories.map((cat, index) => (
            <button
              key={index}
              className={filter === cat ? "active-btn" : ""}
              onClick={() => setFilter(cat)}
            >
              {cat.replace("-", " ").toUpperCase()}
            </button>
          ))}

        </div>

      </section>

      {/* PRODUCTS */}
      <section className="oil-grid">

        {products.length === 0 ? (
          <h2 style={{ textAlign: "center" }}>No Products Found</h2>
        ) : (
          products.map((item) => (

            <div className="oil-card" key={item.productId}>

              {/* ❤️ WISHLIST */}
              <div
                className={`wishlist ${favorites.includes(item.productId) ? "active" : ""}`}
                onClick={() => toggleFavorite(item.productId)}
              >
                <FaHeart />
              </div>

              {/* IMAGE */}
              <img
                src={
                  item.imageUrl
                    ? `http://18.61.100.138:8080${item.imageUrl}`
                    : oil
                }
                alt={item.name}
              />

              {/* CONTENT */}
              <div className="oil-content">

                <div className="oil-title">
                  <h3>{item.name}</h3>
                  <span>₹{item.price}</span>
                </div>

                <p>{item.description}</p>

                {/* 🛒 CART */}
                <button
                  className={`cart-btn ${cart.includes(item.productId) ? "added" : ""}`}
                  onClick={() => toggleCart(item.productId)}
                >
                  <FaShoppingCart />
                  {cart.includes(item.productId)
                    ? " Remove Cart"
                    : " Add to Cart"}
                </button>

                {/* DETAILS */}
                <NavLink
                  to={`/animations/${item.productId}`}
                  className="details"
                >
                  View Details
                </NavLink>

              </div>

            </div>
          ))
        )}

      </section>

      {/* FOOTER */}
      <footer className="footer">

        <div>
          <h3>Aurova Oils</h3>
          <p>We produce natural cold-pressed oils.</p>
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
          <h4>Support</h4>
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
        </div>

        <div>
          <h4>Contact</h4>
          <p>Mumbai, India</p>
          <p>+91 98765 43210</p>
          <p>oils@gmail.com</p>
        </div>

      </footer>

      <div className="copyright">
        © 2026 Aurova Oils
      </div>

    </div>
  );
}