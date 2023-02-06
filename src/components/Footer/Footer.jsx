import React from 'react'
import Gallery from '../Gallery'
import "./footer.css"

function Footer() {
  return (
    <footer className="footer">
      <div className="main-part">
        <div className="footer-list-wrapper">
          <h3 className="footer-heading">Royal Hotel</h3>
          <ul className="footer-list">
            <li className="footer-list-item">
              <a href="#" className="footer-list-link"> support@grandhotel.com </a>
            </li>
            <li className="footer-list-item">
              <a href="#" className="footer-list-link">
                New York, Main Street 123
              </a>
            </li>
            <li className="footer-list-item">
              <a href="#" className="footer-list-link"> Tel: +123 456 789 </a>
            </li>
          </ul>
        </div>


        <div className="contact">
          <h3 className="footer-heading">Contact</h3>
          <p>Sign Up for News</p>
          <form className="footer-form">
            <input
              type="text"
              className="footer-input"
              placeholder="Your email..."
            />
            <button className="footer-btn">Sign Up</button>
          </form>
        </div>

        <Gallery />
      </div>

      <div className="creator-part">
        <div className="copyright-text">
          <p>Copyright &copy; 2023. Grand Hotel. All Rights Reserved</p>
        </div>

        <div className="text-right">
          <p>Made With <i className="fas fa-heart"></i> by <span>Laura</span></p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
