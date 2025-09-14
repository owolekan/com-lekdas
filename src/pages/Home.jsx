import "../index.css"

export default function Home() {
  return (
    <div>
   
      <header className="hero">
        <div className="container">
          <h2>Precision Gates, Doors & Food Grinding Machines</h2>
          <p className="text-muted" style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto" }}>
            Custom gates, sturdy doors, and reliable grinders for pepper, yam,
            and more.
          </p>
        </div>
        <div className="container">
          <h2>Our Mission</h2>
          <p className="text-muted" style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto" }}>
            At <strong>Lekdas Global vetures</strong>, our mission is simple:
            to provide <strong>secure, stylish, and reliable solutions</strong>  
             for homes, businesses, and industries. From custom metal gates 
            and durable doors to high-efficiency food grinding machines, 
            we combine <strong>modern technology with skilled craftsmanship</strong> 
            to deliver products that are built to last.
          </p>
          <p className="text-muted" style={{ textAlign: "center", maxWidth: "800px", margin: "20px auto 0" }}>
            We don’t just create products — we build <strong>trust, security, 
            and value</strong> for every client we serve.
          </p>
        </div>
      </header>

 
      <section id="services" className="section">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <div className="grid">
            <div className="card">
              <div className="card__media">
                <img src="https://via.placeholder.com/300x200" alt="Gate" />
              </div>
              <h3>Gates Fabrication</h3>
              <p>Custom metal gates for homes and businesses.</p>
            </div>

            <div className="card">
              <div className="card__media">
                <img src="https://via.placeholder.com/300x200" alt="Door" />
              </div>
              <h3>Doors Manufacturing</h3>
              <p>Durable doors with custom designs.</p>
            </div>

            <div className="card">
              <div className="card__media">
                <img src="https://via.placeholder.com/300x200" alt="Grinder" />
              </div>
              <h3>Food Grinding Machines</h3>
              <p>Efficient grinders for pepper, yam.</p>
            </div>

            <div className="card">
              <div className="card__media">
                <img src="https://via.placeholder.com/300x200" alt="Repairs" />
              </div>
              <h3>Repairs & Custom Orders</h3>
              <p>Maintenance and bespoke builds.</p>
            </div>
          </div>
        </div>
      </section>

     
      <section id="portfolio" className="section">
        <div className="container">
          <h2 className="section-title">Our Portfolio</h2>
          <div className="portfolio-gallery">
         
            <div
              className="portfolio-item"
              style={{
                backgroundImage:
                  'url("https://images.unsplash.com/photo-1600607688979-a3b4d91a0a5f?w=800&auto=format&fit=crop")',
              }}
            >
              <span className="pf-title">Custom Metal Gate</span>
            </div>

           
            <div
              className="portfolio-item"
              style={{
                backgroundImage:
                  'url("https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=800&auto=format&fit=crop")',
              }}
            >
              <span className="pf-title">Modern Metal Door</span>
            </div>

          
            <div
              className="portfolio-item"
              style={{
                backgroundImage:
                  'url("https://images.unsplash.com/photo-1617196039897-26f5f3b3b6d8?w=800&auto=format&fit=crop")',
              }}
            >
              <span className="pf-title">Industrial Pepper Grinder</span>
            </div>

          
            <div
              className="portfolio-item"
              style={{
                backgroundImage:
                  'url("https://images.unsplash.com/photo-1504148455328-cdc31d4c66f6?w=800&auto=format&fit=crop")',
              }}
            >
              <span className="pf-title">Heavy Duty Yam Grinder</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
