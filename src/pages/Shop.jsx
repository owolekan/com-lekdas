import "../index.css"
import { Link } from "react-router-dom"
import { useCart } from "../CartContext"   // ✅ use global cart context

export default function Shop() {
  const { cart, addToCart } = useCart()    // ✅ use context instead of local state

  const products = [
    {
      id: 1,
      name: "Custom Metal Gate",
      price: 350000,
      img: "/images/2gate_copy.jpeg",   // ✅ fix path (public/ not needed)
    },
    {
      id: 2,
      name: "Modern Metal Gate",
      price: 280000,
      img: "/images/4gate_copy.jpeg",
    },
    {
      id: 3,
      name: "Modern Metal Gate",
      price: 30000,
      img: "/images/5gate_copy.jpeg",
    },
    {
      id: 4,
      name: "Modern Metal Gate",
      price: 340000,
      img: "/images/2gate_copy.jpeg",
    },
    {
      id: 5,
      name: "Modern Metal Gate",
      price: 280000,
      img: "/images/2gate_copy.jpeg",
    },
    {
      id: 6,
      name: "Modern Metal Gate",
      price: 400000,
      img: "/images/2gate_copy.jpeg",
    },
    {
      id: 7,
      name: "Modern Metal Gate",
      price: 380000,
      img: "/images/2gate_copy.jpeg",  
    },
    {
      id: 8,
      name: "Modern Metal Gate",
      price: 180,
      img: "/images/8gate_copy.jpeg",
    },
    {
      id: 9,
      name: "Modern Metal Door",
      price: 100000,
      img: "/images/2gate_copy.jpeg",    
    },
    {
      id: 10,
      name: "Modern Metal Door",
      price: 80000,
      img: "/images/2gate_copy.jpeg",
    },
    {
      id: 11,
      name: "Modern Metal Door",
      price: 80000,
      img: "/images/2gate_copy.jpeg",
    },
    {
      id: 12,
      name: "Modern Metal Door",
      price: 180,
      img: "/images/2gate_copy.jpeg",
    },
    {
      id: 13,
      name: "Modern Metal Door",
      price: 65000,
      img: "/images/2gate_copy.jpeg",
    },
    {
      id: 14,
      name: "Modern Metal Door",
      price: 60000,
      img: "/images/2gate_copy.jpeg",
    },
    {
      id: 15,
      name: "Carport",
      price: 200000,
      img: "/images/2gate_copy.jpeg",
    },
    {
      id: 16,
      name: "Pergola",
      price: 1200000,
      img: "/images/2gate_copy.jpeg",
    },
    {
      id: 17,
      name: "Fence Railings",
      price: 70000,
      img: "/images/2gate_copy.jpeg",
    },
    {
      id: 18,
      name: "Stair Railings",
      price: 180000,
      img: "/images/2gate_copy.jpeg",
    },
    {
      id: 19,
      name: "Balcony Railings",
      price: 80000,
      img: "/images/2gate_copy.jpeg",
    },
    {
      id: 20,
      name: "Aluminium Handrail",
      price: 180000,
      img: "/images/2gate_copy.jpeg",
    },
    {
      id: 21,
      name: "Melon Grinder",
      price: 50000,
      img: "/images/2gate_copy.jpeg",
    },
    {
      id: 22,
      name: "Industrial Pepper Grinder",
      price: 90000,
      img: "/images/2gate_copy.jpeg",
    },
    {
      id: 23,
      name: "Heavy Duty Yam Grinder",
      price: 260000,
      img: "/images/2gate_copy.jpeg",
    },
    {
      id: 24,
      name: "Small Duty Yam Grinder",
      price: 120000,
      img: "/images/2gate_copy.jpeg",
    },
    
  ]

  return (
    <div className="container section">
      <h2 className="section-title">Shop Products</h2>
      <div className="grid">
        {products.map((p) => (
          <div className="card shop-card" key={p.id}>
            <img src={p.img} alt={p.name} className="product-img" />
            <h3>{p.name}</h3>
            <p>₦{p.price.toLocaleString()}</p>
            <button onClick={() => addToCart(p)}>Add to Cart</button>
          </div>
        ))}
      </div>

      
      {/* Mini Cart Preview */}
      {cart.length > 0 && (
        <div className="cart-preview">
          <h3>Cart</h3>
          <ul>
            {cart.map((item, i) => (
              <li key={i}>
                {item.name} – ₦{item.price.toLocaleString()}
              </li>
            ))}
          </ul>
          <Link to="/cart" className="btn btn--block">
            Go to Cart
          </Link>
        </div>
      )}
    </div>
  )
}



