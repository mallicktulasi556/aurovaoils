import "./Auth.css";
import oil from "../images/oil-login.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Signup() {

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const BASE_URL = "http://192.168.88.23:8080";

  const handleSignup = async () => {

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {

      const response = await fetch(`${BASE_URL}/api/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          fullName: name,
          mobile: mobile,
          email: email,
          password: password
        })
      });

      const data = await response.json();

      console.log(data);

      if (response.ok) {
        alert("Registration Successful");
        navigate("/login");
      } else {
        alert(data.message || "Signup Failed");
      }

    } catch (error) {
      console.log(error);
      alert("Server Error");
    }

  };

  return (

    <div className="auth-wrapper">

      <div className="auth-container reverse">

        <div className="auth-form">

          <h2>Welcome!</h2>

          <div className="switch-buttons">
            <Link to="/login">
              <button>Log In</button>
            </Link>

            <button className="active">Sign Up</button>
          </div>

          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label>Mobile Number</label>
          <input
            type="text"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />

          <label>Email Id</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <label>Confirm Password</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <button className="auth-btn" onClick={handleSignup}>
            SIGN UP
          </button>

        </div>

        <div className="auth-image">
          <img src={oil} alt="oil" />
        </div>

      </div>

    </div>

  );
}

export default Signup;