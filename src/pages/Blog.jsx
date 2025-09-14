// src/pages/Blog.jsx
import "../index.css"
import { Link } from "react-router-dom"

export default function Blog() {
  const posts = [
    {
      id: 1,
      title: "Top 5 Benefits of Custom Metal Gates",
      excerpt:
        "Discover why investing in a strong and stylish gate improves security and boosts property value...",
      image:
        "https://images.unsplash.com/photo-1599400044326-44c46cf8f797?w=800",
    },
    {
      id: 2,
      title: "Choosing the Right Food Grinder for Your Business",
      excerpt:
        "From pepper to yam, the right grinder makes a difference. Here’s how to choose the best one...",
      image:
        "https://images.unsplash.com/photo-1622560480605-d83c853bc5c9?w=800",
    },
    {
      id: 3,
      title: "How We Build Durable, Modern Doors",
      excerpt:
        "Behind the scenes: our process for making doors that last for years with minimal maintenance...",
      image:
        "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=800",
    },
    {
        id: 4,
        title: "5 Tips for Maintaining Your Metal Gates",
        excerpt: "Simple care and maintenance tips to keep your gates looking strong and new for years...",
        image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=800",
      },
      {
        id: 5,
        title: "Why Metal Doors Never Go Out of Style",
        excerpt: "Metal doors remain timeless and elegant — here’s why they’re still a popular choice...",
        image: "https://images.unsplash.com/photo-1588854337115-1c06e2a97d30?w=800",
      },
      {
        id: 6,
        title: "Grinding Pepper the Modern Way",
        excerpt: "See how our grinders make processing pepper faster, safer, and more efficient than traditional methods...",
        image: "https://images.unsplash.com/photo-1600891965053-d0f9b06f79b6?w=800",
      },
      {
        id: 7,
        title: "Custom Fabrication Projects That Inspire",
        excerpt: "A look at some of our favorite custom gate and door projects from satisfied clients...",
        image: "https://images.unsplash.com/photo-1616628182507-6dd6b01c1d4d?w=800",
      },
      {
        id: 8,
        title: "The Future of Food Grinding Technology",
        excerpt: "What’s next in the world of food grinders? Smarter, faster, and more eco-friendly machines...",
        image: "https://images.unsplash.com/photo-1617196039897-26f5f3b3b6d8?w=800",
      },
    
  
  ]

  return (
    <div>
      {/* Hero Banner */}
      <header className="hero">
        <div className="container">
          <h1>Our Blog</h1>
          <p>
            Insights, guides, and updates from <strong>LEKDAS GLOBAL VENTURES</strong>.
          </p>
        </div>
      </header>

      {/* Blog List */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Latest Posts</h2>
          <div className="grid">
            {posts.map((post) => (
              <div key={post.id} className="card">
                <div className="card__media">
                  <img src={post.image} alt={post.title} />
                </div>
                <div className="card__body">
                  <h3 className="card__title">{post.title}</h3>
                  <p className="text-muted">{post.excerpt}</p>
                  <Link to={`/more/blog/${post.id}`} className="btn btn--sm">
                    Read More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
