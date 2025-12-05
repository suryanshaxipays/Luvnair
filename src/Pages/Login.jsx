import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../slices/authSlice";
import "../Styles/LoginSignup.css";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authError = useSelector((state) => state.auth.error);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    if (!/\S+@\S+\.\S+/.test(form.email)) return "Invalid email address";
    if (!form.password) return "Password is required";
    return null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const err = validate();
    if (err) return setError(err);

    dispatch(login(form));

    if (!authError) {
      navigate("/profile?id=me");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2 className="auth-title">Welcome Back</h2>

        {error && <p className="auth-error">{error}</p>}
        {authError && <p className="auth-error">{authError}</p>}

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
          placeholder="Password"
          onChange={handleChange}
        />

        <button className="auth-btn" onClick={handleSubmit}>
          Login
        </button>

        <p className="auth-link">
          New here? <Link to="/Signup">Create Account</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
