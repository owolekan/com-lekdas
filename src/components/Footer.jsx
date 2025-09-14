function Footer() {
    return (
      <footer className="footer">
        <div className="footer__grid container">
          <div>
          <h1 className="brand__logo">
        LEKDAS GLOBAL<span>VENTURES</span>
        </h1>
            <h4>About LEKDAS</h4>
            <p>
              We specialize in precision gates, durable doors, and reliable food grinding machines.
            </p>
          </div>
          <div>
            <h4>Quick Links</h4>
            <ul className="list">
              <li><a href="/">Home</a></li>
              <li><a href="/shop">Shop</a></li>
              <li><a href="/more#contact">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 id= "contact">Contact</h4>
            <p>📞 +234 80 284 434</p>
            <p>📧 owolabioluwaseyi16@gmail.com</p>
            <p>📍 Opposite Tiper Garage, Igbogbo Ikorodu, Lagos</p>
          </div>
        </div>
        <div className="footer__bar">
          <p>© {new Date().getFullYear()} LEKDAS GLOBAL VENTURE. All rights reserved.</p>
        </div>
      </footer>
    );
  }
  
  export default Footer;
  