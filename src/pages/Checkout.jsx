import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../CartContext";

export default function Checkout() {
  const { cart, total, clearCart } = useCart();
  const navigate = useNavigate();

  if (cart.length === 0) {
    navigate("/cart");
    return null;
  }

  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    postal: "",
    country: "",
    paymentMethod: "cash", 
    transferRef: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.address) {
      alert("Please fill in required fields");
      return;
    }

    const order = {
      id: Date.now(),
      items: cart,
      total,
      customer: form,
      createdAt: new Date().toISOString(),
    };

    clearCart();
    navigate("/success", { state: { order } });
  };

  return (
    <div className="container section">
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit} className="checkout-form">
        <label>
          Full name *
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Email *
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Address *
          <input
            name="address"
            value={form.address}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          City
          <input name="city" value={form.city} onChange={handleChange} />
        </label>
        <label>
          Postal
          <input name="postal" value={form.postal} onChange={handleChange} />
        </label>

        {/* Payment Method */}
        <div>
          <label>Payment Method</label>
          <select
            name="paymentMethod"
            value={form.paymentMethod}
            onChange={handleChange}
          >
            <option value="cash">Cash</option>
            <option value="transfer">Bank Transfer</option>
          </select>
        </div>

        {/* Show transfer details if chosen */}
        {form.paymentMethod === "transfer" && (
          <div className="transfer-details">
            <p><strong>Bank Name:</strong> MyBank PLC</p>
            <p><strong>Account Name:</strong> My Shop Ltd</p>
            <p><strong>Account Number:</strong> 1234567890</p>
            <p>
              Please complete the transfer and keep your receipt for
              confirmation.
            </p>
            <label>
              Transfer Reference
              <input
                name="transferRef"
                value={form.transferRef}
                onChange={handleChange}
                placeholder="Enter your transfer reference"
              />
            </label>
          </div>
        )}

        
        <div className="checkout-summary">
          <h3>Order Summary</h3>
          {cart.map((item, i) => (
            <p key={i}>
              {item.name} – ₦{item.price.toLocaleString()}
            </p>
          ))}
          <p>
            <strong>
              Order Total: ₦{total.toLocaleString()}
            </strong>
          </p>
        </div>

        <button type="submit" className="btn btn--primary">
          Place Order
        </button>
      </form>
    </div>
  );
}
