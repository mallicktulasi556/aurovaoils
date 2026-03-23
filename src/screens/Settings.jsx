import "./Settings.css";
import {
  FaBell,
  FaUser,
  FaSignOutAlt,
  FaBox,
  FaShoppingCart,
 FaUsers ,
  FaCog,
  FaClipboardList
} from "react-icons/fa";
import { HiOutlineInbox, HiOutlineDocumentText } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function Settings() {

  const [toggles, setToggles] = useState({
    email: false,
    order: false,
    stock: false,
    roles: false,
    api: false
  });

  const handleToggle = (key) => {
    setToggles({ ...toggles, [key]: !toggles[key] });
  };

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
           <FaUsers />  Customers
        </NavLink>

        <NavLink to="/reviews" className="menu">
          <HiOutlineInbox /> Reviews
        </NavLink>

        <NavLink to="/content" className="menu">
          <HiOutlineDocumentText /> Content management
        </NavLink>

        <NavLink to="/settings" className="menu active">
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
        <div className="settings-page">

          <h1>Content management</h1>
          <p>Here you're able to change the content for the products</p>

          {/* ITEMS */}

          <div className="setting-item">
            <div>
              <h3>Password Update</h3>
              <p>Admin can able to change or update the password</p>
            </div>
          </div>

          <div className="setting-item">
            <div>
              <h3>System E-mail Notification</h3>
              <p>Define e-mail templates for system updates and orders confirmation</p>
            </div>
            <div className={`toggle ${toggles.email ? "active" : ""}`} onClick={() => handleToggle("email")}></div>
          </div>

          <div className="setting-item">
            <div>
              <h3>Automatic order Fulfillment</h3>
              <p>Define rules for automatically processing and fulfilling certain orders.</p>
            </div>
            <div className={`toggle ${toggles.order ? "active" : ""}`} onClick={() => handleToggle("order")}></div>
          </div>

          <div className="setting-item">
            <div>
              <h3>Low Stock Alert Thresholds</h3>
              <p>Set stock levels below which alerts are triggered for each Oil type.</p>
            </div>
            <div className={`toggle ${toggles.stock ? "active" : ""}`} onClick={() => handleToggle("stock")}></div>
          </div>

          <div className="setting-item">
            <div>
              <h3>Admin Access Roles & Permissions</h3>
              <p>Manage access levels for different admin roles and view access logs.</p>
            </div>
            <div className={`toggle ${toggles.roles ? "active" : ""}`} onClick={() => handleToggle("roles")}></div>
          </div>

          <div className="setting-item">
            <div>
              <h3>Third-Party Market API Connectors</h3>
              <p>Connect and manage APIs for various online markets (e.g., local grocers).</p>
            </div>
            <div className={`toggle ${toggles.api ? "active" : ""}`} onClick={() => handleToggle("api")}></div>
          </div>

        </div>

      </div>

    </div>
  );
}