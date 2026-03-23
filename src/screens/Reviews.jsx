import "./Reviews.css";
import {
  FaBell,
  FaUser,
  FaSignOutAlt,
  FaStar,
  FaClipboardList,
  FaBox,
  FaShoppingCart,
  FaUsers,
  FaCog
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
  import { HiOutlineInbox, HiOutlineDocumentText} from "react-icons/hi";

export default function Reviews() {

  const reviews = [
    { name: "Renuka", product: "Ground nut oil", rating: 5, comment: "Oils are good" },
    { name: "Ajay", product: "Sunflower oil", rating: 5, comment: "Rich in Vitamin E" },
    { name: "Maya", product: "Coconut oil", rating: 5, comment: "Excellent for cooking" },
    { name: "Vikram", product: "Olive oil", rating: 5, comment: "Heart-healthy option" },
    { name: "Sita", product: "Avocado oil", rating: 5, comment: "High smoke point" },
    { name: "Ravi", product: "Sesame oil", rating: 5, comment: "Loaded with antioxidants" },
    { name: "Priya", product: "Peanut oil", rating: 5, comment: "Ideal for frying" },
    { name: "Karan", product: "Grapeseed oil", rating: 5, comment: "Subtle flavor" },
    { name: "Nina", product: "Flaxseed oil", rating: 5, comment: "Omega-3 rich" },
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
          <FaUsers /> Customers
        </NavLink>
<NavLink to="/reviews" className="menu">
  <HiOutlineInbox /> Reviews
</NavLink>

<NavLink to="/content" className="menu">
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
        <div className="reviews-page">

          <div className="header">
            <div>
              <h1>Reviews</h1>
              <p>Here you're able to see the reviews of the customers</p>
            </div>

            <input type="text" placeholder="Enter date" />
          </div>

          {/* TABLE */}
          <table className="reviews-table">

            <thead>
              <tr>
                <th>Customer</th>
                <th>Product</th>
                <th>Rating</th>
                <th>Comments</th>
                <th>Delete</th>
              </tr>
            </thead>

            <tbody>

              {reviews.map((r, i) => (
                <tr key={i}>
                  <td>{r.name}</td>
                  <td>{r.product}</td>

                  <td>
                    {[...Array(r.rating)].map((_, index) => (
                      <FaStar key={index} className="star" />
                    ))}
                  </td>

                  <td>{r.comment}</td>

                  <td className="delete-btn">Delete</td>
                </tr>
              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}