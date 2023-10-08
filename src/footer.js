import "./footer.css";
export default function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="links">
          <h2>Useful Links</h2>
          <ul>
            <li>Delivery Information</li>

            <li>International shipping</li>
            <li>Payment Options</li>
            <li>Track your Order</li>
            <li>Returns</li>
            <li>Find a Store</li>
          </ul>
        </div>
        <div className="information">
          <h2>Information</h2>

          <ul>
            <li>Carrers</li>
            <li>Blog</li>
            <li>Offers & COntest Detaiils</li>
            <li>Help & FAQs</li>
            <li>About Tanishq</li>
          </ul>
        </div>
        <div className="contactus">
          <h2>Contact Us</h2>
          <ul>
            <li>Write to us</li>
            <li>1800-266-0123</li>
            <li>Chat with Us</li>
          </ul>
        </div>
        <div>
          <p>Download the Tanishq App Now</p>
        </div>
      </div>
      <hr/>
    </footer>
  );
}
