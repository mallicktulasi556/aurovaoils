import "./Content.css";
import {
  FaBell,
  FaUser,
  FaSignOutAlt,
  FaBox,
  FaShoppingCart,
  FaUsers,
  FaCog,
  FaHeart,
  FaClipboardList
} from "react-icons/fa";
import { HiOutlineInbox, HiOutlineDocumentText } from "react-icons/hi";
import { NavLink } from "react-router-dom";

export default function ContentManagement() {

  const products = [
    {
      name: "Groundnut Oil",
      price: "₹349",
      desc: "Rich in healthy fats, ideal for deep frying and traditional cooking with a naturally nutty aroma.",
      img: "https://i.imgur.com/4YQZ4Zx.png"
    },
    {
      name: "Black Mustard Oil",
      price: "₹299",
      desc: "Pungent and flavorful, perfect for pickles, curries, and authentic regional cuisine.",
      img: "https://i.imgur.com/4YQZ4Zx.png"
    },
    {
      name: "Groundnut Oil",
      price: "₹349",
      desc: "Rich in healthy fats, ideal for deep frying and traditional cooking with a naturally nutty aroma.",
      img: "https://i.imgur.com/4YQZ4Zx.png"
    },
    {
      name: "Black Mustard Oil",
      price: "₹299",
      desc: "Pungent and flavorful, perfect for pickles, curries, and authentic regional cuisine.",
      img: "https://i.imgur.com/4YQZ4Zx.png"
    }
  ];

  return (
    <div className="dashboard-layout">

      {/* SIDEBAR */}
      <div className="dashboard-sidebar">

        <h2 className="dashboard-logo">Admin</h2>

       <NavLink to="/dashboard" className="menu">
                   <FaClipboardList /> Dashboard
                 </NavLink>

        <NavLink to="/products" className="menu">
          <FaBox /> Products
        </NavLink>

        <NavLink to="/dashboardorders" className="menu">
          <FaShoppingCart /> Orders
        </NavLink>

        <NavLink to="/customers" className="menu">
          <FaUsers/> Customers
        </NavLink>

        <NavLink to="/reviews" className="menu">
          <HiOutlineInbox /> Reviews
        </NavLink>

        <NavLink to="/content" className="menu active">
          <HiOutlineDocumentText /> Content management
        </NavLink>

        <NavLink to="/settings" className="menu">
          <FaCog /> Settings
        </NavLink>

      </div>

      {/* RIGHT */}
      <div className="dashboard-right">

        {/* TOPBAR */}
        <div className="topbar">
          <input placeholder="Search here...................." className="search"/>

          <div className="top-icons">
            <FaBell/>
            <FaUser/>
            <FaSignOutAlt/>
          </div>
        </div>

        {/* PAGE */}
        <div className="content-page">

          <h1>Content management</h1>
          <p>Here you're able to change the content for the products</p>

          {/* CARDS */}
          <div className="cards">

            {products.map((p, i) => (
              <div className="card" key={i}>

                <div className="img-box">
                  <img src={p.img} alt="" />
                  <FaHeart className="heart"/>
                </div>

                <div className="card-body">
                  <div className="title-row">
                    <h3>{p.name}</h3>
                    <span>{p.price}</span>
                  </div>

                  <p>{p.desc}</p>
                </div>

              </div>
            ))}

          </div>

        </div>

      </div>

    </div>
  );
}