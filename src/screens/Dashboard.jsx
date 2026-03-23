import "./Dashboard.css";
import {   FaBell,
  FaUser,
  FaSignOutAlt,
  FaUsers,
  FaBox,
  FaShoppingCart,
  FaCog,
  FaClipboardList } from "react-icons/fa";
  import { HiOutlineInbox, HiOutlineDocumentText} from "react-icons/hi";
import { NavLink } from "react-router-dom";

export default function Dashboard(){
  return(

    <div className="dashboard-layout">

      {/* SIDEBAR */}
      <div className="dashboard-sidebar">

        <h2 className="dashboard-logo">Admin</h2>

        <NavLink to="/dashboard" className="menu active">
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


        {/* DASHBOARD CONTENT */}
        <div className="dashboard">

          <h1>Dashboard</h1>
          <p className="subtitle">
            Welcome back! Here's your business overview.
          </p>

          {/* CARDS */}
          <div className="cards">

            <div className="card">
              <p>Total Sales</p>
              <h2>₹1,24,580</h2>
              <span className="green">+12.5%</span>
            </div>

            <div className="card">
              <p>Total Orders</p>
              <h2>645</h2>
              <span className="green">+8.2%</span>
            </div>

            <div className="card">
              <p>New Customers</p>
              <h2>129</h2>
              <span className="green">+12.5%</span>
            </div>

            <div className="card">
              <p>Low Stock Alerts</p>
              <h2>2</h2>
              <span className="red">-2</span>
            </div>

          </div>


          {/* TABLE */}
          <div className="orders">

            <h3>Recent Orders</h3>

            <table>
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Customer</th>
                  <th>Price</th>
                  <th>Status</th>
                  <th>Time</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>ORD-2345</td>
                  <td>Radhika</td>
                  <td>₹1250</td>
                  <td><span className="status progress">Inprogress</span></td>
                  <td>10 min ago</td>
                </tr>

                <tr>
                  <td>ORD-2346</td>
                  <td>Sanjay</td>
                  <td>₹800</td>
                  <td><span className="status done">Completed</span></td>
                  <td>5 min ago</td>
                </tr>

                <tr>
                  <td>ORD-2347</td>
                  <td>Priya</td>
                  <td>₹2150</td>
                  <td><span className="status pending">Pending</span></td>
                  <td>20 min ago</td>
                </tr>

                <tr>
                  <td>ORD-2348</td>
                  <td>Amit</td>
                  <td>₹1700</td>
                  <td><span className="status progress">Inprogress</span></td>
                  <td>15 min ago</td>
                </tr>

                <tr>
                  <td>ORD-2349</td>
                  <td>Neha</td>
                  <td>₹950</td>
                  <td><span className="status cancel">Cancelled</span></td>
                  <td>30 min ago</td>
                </tr>
              </tbody>

            </table>

          </div>

        </div>

      </div>

    </div>
  );
}