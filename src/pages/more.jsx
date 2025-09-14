import "../index.css";

export default function More() {
  return (
    <main>
    

 
      <section className="section">
        <div className="container">
          <h2>Testimonials</h2>
          <div className="testimonials">
            <blockquote>
              “The metal gate they built for me is solid and beautiful. My
              neighbors keep asking where I got it from!”  
              <br />— <strong>Mr. Ade</strong>
            </blockquote>
            <blockquote>
              “I ordered a pepper grinder for my small business. It has boosted
              my production and works like a charm.”  
              <br />— <strong>Mrs. Grace</strong>
            </blockquote>
            <blockquote>
              “Their customer service is amazing, and they delivered right on
              time.”  
              <br />— <strong>Chinedu O.</strong>
            </blockquote>
          </div>
        </div>
      </section>

 
      <section id="Q&A" className="section">
        <div className="container">
          <h2>Frequently Asked Questions</h2>
          <div className="grid">
            <div className="card">
              <h3>Do you offer delivery?</h3>
              <p>Yes, we deliver. Delivery cost depends on location.</p>
            </div>
            <div className="card">
              <h3>Do your grinders come with warranty?</h3>
              <p>All machines come with a 6-month warranty for repairs and servicing.</p>
            </div>
            <div className="card">
              <h3>Can I request a custom gate or door?</h3>
              <p>Absolutely. We design and build gates and doors based on your specifications.</p>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
