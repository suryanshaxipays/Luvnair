import { useState } from "react";
import { useDispatch } from "react-redux";
import { signup } from "../slices/authSlice";
import "../Styles/LoginSignup.css";
import { useNavigate, Link } from "react-router-dom";

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    if (!form.name.trim()) return "Name is required";
    if (!/\S+@\S+\.\S+/.test(form.email)) return "Invalid email address";
    if (form.password.length < 6)
      return "Password must be at least 6 characters";
    if (form.password !== form.confirmPassword)
      return "Passwords do not match";

    return null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const err = validate();
    if (err) return setError(err);

    dispatch(signup(form));
    navigate("/profile?id=me");
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2 className="auth-title">Create Account</h2>

        {error && <p className="auth-error">{error}</p>}

        <input
          className="auth-input"
          type="text"
          name="name"
          placeholder="Your Name"
          onChange={handleChange}
        />

        <input
          className="auth-input"
          type="email"
          name="email"
          placeholder="Email Address"
          onChange={handleChange}
        />

        <input
          className="auth-input"
          type="password"
          name="password"
          placeholder="Password (min 6 chars)"
          onChange={handleChange}
        />

        <input
          className="auth-input"
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          onChange={handleChange}
        />

        <button className="auth-btn" onClick={handleSubmit}>
          Sign Up
        </button>

        <p className="auth-link">
          Already have an account? <Link to="/Login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
