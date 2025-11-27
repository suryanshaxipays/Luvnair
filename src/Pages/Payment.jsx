import { useState } from "react";
import "../Styles/Payment.css";
import SideImage from "../Assets/login-side.jpg";
import viewIcon from "../Assets/view.png";
import hideIcon from "../Assets/hide.png";

const Payment = () => {
  const [processing, setProcessing] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showCVV, setShowCVV] = useState(false);
  const [price, setPrice] = useState(19); // default dating subscription price

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  // ===== Input Change Handler =====
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "expiry") {
      let digits = value.replace(/\D/g, "").slice(0, 4);
      if (digits.length >= 3) digits = digits.slice(0, 2) + "/" + digits.slice(2);
      setFormData((prev) => ({ ...prev, expiry: digits }));
      return;
    }

    if (name === "cardNumber") {
      setFormData((prev) => ({ ...prev, cardNumber: value.replace(/\D/g, "").slice(0, 16) }));
      return;
    }

    if (name === "cvv") {
      setFormData((prev) => ({ ...prev, cvv: value.replace(/\D/g, "").slice(0, 4) }));
      return;
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // ===== Basic Validation =====
  const validateForm = () => {
    const { firstName, lastName, email, cardNumber, expiry, cvv } = formData;
    if (!firstName || !lastName) { alert("Please enter your full name."); return false; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { alert("Invalid email."); return false; }
    if (cardNumber.length < 13 || cardNumber.length > 16) { alert("Invalid card number."); return false; }
    if (!/^\d{2}\/\d{2}$/.test(expiry)) { alert("Expiry must be MM/YY."); return false; }
    if (cvv.length < 3) { alert("Invalid CVV."); return false; }
    if (!price || price <= 0) { alert("Invalid amount."); return false; }
    return true;
  };

  // ===== Handle Payment =====
  const handlePayment = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setProcessing(true);

    setTimeout(() => {
      setShowSuccess(true);
      const btn = document.querySelector(".checkout-btn");
      if (btn) btn.textContent = "Successful";

      // Persist dummy subscription info
      localStorage.setItem("datingPremium", "true");

      setTimeout(() => {
        setProcessing(false);
      }, 2000);
    }, 2500);
  };

  return (
    <div className="checkout-wrapper">
      <div className="checkout-image-section">
        <img src={SideImage} alt="Dating Visual" className="checkout-side-image" />
      </div>

      <div className="checkout-content">
        <div className="checkout-card">
          <h2 className="checkout-title">Premium Membership</h2>
          <p className="subtitle">Unlock full access to meet your soulmate!</p>

          <div className="subscription-box">
            <h3>One-Month Subscription</h3>
            <p
              className="subscription-price"
              contentEditable={!processing}
              suppressContentEditableWarning={true}
              onInput={(e) => {
                let val = e.target.innerText.replace(/[^0-9.]/g, "") || "0";
                setPrice(val);
              }}
              onBlur={(e) => e.target.innerText = `$${parseFloat(price).toFixed(2)} USD`}
            >
              ${price}.00 USD
            </p>
            <p className="subscription-note">Billed monthly. Cancel anytime.</p>
          </div>

          <form onSubmit={handlePayment} className="checkout-form">
            <div className="checkout-row">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                disabled={processing}
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                disabled={processing}
              />
            </div>

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              disabled={processing}
            />

            <div className="checkout-row">
              <input
                type="text"
                name="cardNumber"
                placeholder="Card Number"
                value={formData.cardNumber}
                onChange={handleChange}
                disabled={processing}
              />
            </div>

            <div className="checkout-row" style={{ display: "flex", gap: "0.6rem" }}>
              <input
                type="text"
                name="expiry"
                placeholder="MM/YY"
                value={formData.expiry}
                onChange={handleChange}
                disabled={processing}
                style={{ flex: "0 0 40%" }}
              />

              <div style={{ position: "relative", flex: "0 0 57%" }}>
                <input
                  type={showCVV ? "text" : "password"}
                  name="cvv"
                  placeholder="CVV"
                  value={formData.cvv}
                  onChange={handleChange}
                  disabled={processing}
                  style={{ width: "100%", paddingRight: "35px" }}
                />
                <img
                  src={showCVV ? hideIcon : viewIcon}
                  alt="toggle"
                  style={{
                    position: "absolute",
                    right: "10px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    width: "20px",
                    height: "20px",
                    cursor: "pointer",
                  }}
                  onClick={() => setShowCVV(!showCVV)}
                />
              </div>
            </div>

            <button type="submit" className="checkout-btn" disabled={processing}>
              {processing ? "Processing..." : `Pay $${price}.00`}
            </button>
          </form>
        </div>

        {showSuccess && (
          <div className="success-box">
            Payment Successful! Enjoy your Premium Access 💖
          </div>
        )}
      </div>
    </div>
  );
};

export default Payment;
