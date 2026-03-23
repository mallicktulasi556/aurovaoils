import "./Customers.css";
import {
  FaBell,
  FaUser,
  FaSignOutAlt,
  FaUsers,
  FaBox,
  FaShoppingCart,
  FaCog,
  FaClipboardList
} from "react-icons/fa";
  import { HiOutlineInbox, HiOutlineDocumentText} from "react-icons/hi";
import { NavLink } from "react-router-dom";

export default function Customers() {

  const customers = [
    { date: "05-03-2026", name: "Radhika", email: "radhika@gmail.com", mobile: "+919845362745", orders: 12 },
    { date: "06-03-2026", name: "Amit", email: "amit@yahoo.com", mobile: "+919876543210", orders: 8 },
    { date: "07-03-2026", name: "Sneha", email: "sneha@hotmail.com", mobile: "+919834567890", orders: 20 },
    { date: "08-03-2026", name: "Karan", email: "karan@outlook.com", mobile: "+919823456789", orders: 15 },
    { date: "09-03-2026", name: "Priya", email: "priya@gmail.com", mobile: "+919812345678", orders: 10 },
    { date: "10-03-2026", name: "Vikram", email: "vikram@gmail.com", mobile: "+919801234567", orders: 5 },
    { date: "11-03-2026", name: "Anjali", email: "anjali@gmail.com", mobile: "+919890123456", orders: 18 },
  ];

  return (
    <div className="dashboard-layout">

      {/* SIDEBAR */}
      <div className="dashboard-sidebar">

        <h2 className="logo">Admin</h2>

        <NavLink to="/dashboard" className="menu">
          <FaClipboardList /> Dashboard
        </NavLink>

        <NavLink to="/products" className="menu">
          <FaBox /> Products
        </NavLink>

        <NavLink to="/dashboardorders" className="menu">
          <FaShoppingCart /> Orders
        </NavLink>

        <NavLink to="/customers" className="menu active">
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
        <div className="customers-page">

          <div className="header">
            <div>
              <h1>Customers</h1>
              <p>Here you're able to see the Customers details</p>
            </div>

            <input type="text" placeholder="Enter date" />
          </div>

          {/* TABLE */}
          <table className="customers-table">

            <thead>
              <tr>
                <th>Date</th>
                <th>Customer Name</th>
                <th>E-mail ID</th>
                <th>Mobile Number</th>
                <th>Orders</th>
              </tr>
            </thead>

            <tbody>
              {customers.map((c, i) => (
                <tr key={i}>
                  <td>{c.date}</td>
                  <td>{c.name}</td>
                  <td>{c.email}</td>
                  <td>{c.mobile}</td>
                  <td>{c.orders}</td>
                </tr>
              ))}
            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}