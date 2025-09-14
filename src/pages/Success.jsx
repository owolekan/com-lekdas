import { useLocation, Link } from "react-router-dom";

export default function Success() {
  const location = useLocation();
  const order = location.state?.order;

  return (
    <div className="container section">
      <h2>Thank you — order placed 🎉</h2>
      {order ? (
        <>
          <p>Order ID: {order.id}</p>
          <p>Total: ${order.total}</p>
          <h4>Items:</h4>
          <ul>{order.items.map((it) => <li key={it.id}>{it.name} × {it.quantity}</li>)}</ul>
        </>
      ) : (
        <p>No order details available.</p>
      )}
      <Link to="/">Back to shop</Link>
    </div>
  );
}
