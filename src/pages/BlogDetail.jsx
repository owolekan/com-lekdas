
import { useParams } from "react-router-dom"
import "../index.css"

export default function BlogDetail() {
  const { id } = useParams()


  const posts = [
    {
      id: 1,
      title: "Top 5 Benefits of Custom Metal Gates",
      content: `
      Discover why investing in a strong and stylish gate improves security and boosts property value.

      1. Enhanced Security
      A custom metal gate provides a strong first line of defense, deterring unwanted visitors and keeping your property safe.
      
      2. Long-Lasting Durability
      Built from high-quality steel or iron, metal gates resist wear, weather, and time far better than wood or plastic alternatives.
      
      3. Personalized Style
      From sleek modern designs to ornate patterns, a custom gate reflects your taste and complements your home’s architecture.
      
      4. Increased Property Value
      A well-designed gate not only protects but also adds curb appeal, making your property more attractive to future buyers.
      
      5. Low Maintenance
      With protective coatings and finishes, custom metal gates require minimal upkeep while retaining their strength and beauty.
      
      A custom metal gate is more than an entryway—it’s a smart investment in security, style, and long-term value.
      `,
      image: "https://images.unsplash.com/photo-1599400044326-44c46cf8f797?w=800",
    },
    {
      id: 2,
      title: "Choosing the Right Food Grinder for Your Business",
      content: `
        Picking the right grinder depends on what you process most:
        pepper, yam, or beans. Industrial grinders save time, reduce
        waste, and ensure consistent quality. Here’s how to choose...
      `,
      image: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c9?w=800",
    },
    {
      id: 3,
      title: "How We Build Durable, Modern Doors",
      content: `
      How We Build Durable, Modern Doors

Behind the scenes: our process for making doors that last for years with minimal maintenance.

Every great door starts with the right foundation. We source high-quality materials designed to resist warping, cracking, and everyday wear. From reinforced cores to advanced weatherproofing, every layer is built with durability in mind.

Our team blends traditional craftsmanship with modern technology. Precision machining ensures a flawless fit, while our finishing process adds lasting protection against the elements. The result is a door that not only looks beautiful but also performs year after year.

Before any door leaves our workshop, it’s tested for strength, smooth operation, and long-term reliability. That’s how we ensure your door isn’t just an entryway—it’s an investment in lasting quality with minimal maintenance.
      `,
      image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=800",
    },
    {
        id: 4,
        title: "5 Tips for Maintaining Your Metal Gates",
        content: `
          Keeping your metal gates in top condition is simple:
          1. Clean regularly to remove dirt and prevent rust buildup.
          2. Oil hinges and locks to keep them moving smoothly.
          3. Touch up paint to protect against weather damage.
          4. Inspect welds and joints for signs of weakness.
          5. Apply protective coatings for extra durability.
          
          Following these steps ensures your gates stay strong and stylish for years.
        `,
        image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=800",
      },
      {
        id: 5,
        title: "Why Wooden Doors Never Go Out of Style",
        content: `
          Wooden doors are timeless. Their warmth, elegance, and strength
          make them a popular choice across centuries. Modern finishing
          techniques ensure durability, while the natural grain of wood
          offers beauty no synthetic material can match.
          
          Whether modern or traditional, wooden doors adapt to every design trend,
          proving that they truly never go out of style.
        `,
        image: "https://images.unsplash.com/photo-1588854337115-1c06e2a97d30?w=800",
      },
      {
        id: 6,
        title: "Grinding Pepper the Modern Way",
        content: `
          Traditional grinding is time-consuming and inconsistent.
          Our modern grinders are designed to save time, improve efficiency,
          and deliver uniform results every single batch.
          
          By using advanced blades and motors, our machines reduce waste,
          increase output, and ensure food safety standards are met.
        `,
        image: "https://images.unsplash.com/photo-1600891965053-d0f9b06f79b6?w=800",
      },
      {
        id: 7,
        title: "Custom Fabrication Projects That Inspire",
        content: `
          Every client has a unique vision, and our job is to bring it to life.
          From ornate metal gates with intricate patterns to bold, modern door
          designs — our custom projects reflect creativity and precision.
          
          These builds not only serve their purpose but also stand as works of art,
          inspiring others to dream bigger with their own spaces.
        `,
        image: "https://images.unsplash.com/photo-1616628182507-6dd6b01c1d4d?w=800",
      },
      {
        id: 8,
        title: "The Future of Food Grinding Technology",
        content: `
          Food processing is evolving fast. The future of grinders is about
          being smarter, faster, and eco-friendly. Expect machines with
          energy-saving motors, digital controls, and self-cleaning systems.
          
          At LEKDAS GLOBAL VENTURES, we’re committed to pushing the boundaries
          of innovation so our clients always stay ahead of the curve.
        `,
        image: "https://images.unsplash.com/photo-1617196039897-26f5f3b3b6d8?w=800",
      },
    
  
  ]

  // Find the blog by ID
  const post = posts.find((p) => p.id === parseInt(id))

  if (!post) {
    return (
      <div className="container">
        <h2>Post not found</h2>
      </div>
    )
  }

  return (
    <div className="container">
      <header className="hero">
        <h1>{post.title}</h1>
      </header>
      <div className="blog-detail">
        <img src={post.image} alt={post.title} className="blog-image" />
        <p>{post.content}</p>
      </div>
    </div>
  )
}
