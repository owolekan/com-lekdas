import { useCart } from "../CartContext";

export default function CartPage() {
  const { cart, removeFromCart, clearCart, total } = useCart(); // 👈 include clearCart

  if (cart.length === 0) {
    return (
      <div className="container section">
        <h2>Your cart is empty</h2>
        <a href="/shop" className="btn btn--primary">Go Shop</a>
      </div>
    );
  }

  return (
    <div className="container section">
      <h2>Your Cart</h2>
      <ul className="cart-list">
        {cart.map((item, i) => (
          <li key={i} className="cart-item">
            {item.name} - ₦{item.price.toLocaleString()}
            <button onClick={() => removeFromCart(item)} className="btn btn--small">
              Remove
            </button>
          </li>
        ))}
      </ul>
      <p><strong>Total:</strong> {total}</p>
      <div className="cart-actions">
        <button onClick={clearCart} className="btn btn--secondary">Clear Cart</button>
        <a href="/checkout" className="btn btn--primary">Proceed to Checkout</a>
      </div>
    </div>
  );
}
