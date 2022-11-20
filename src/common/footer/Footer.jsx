import React from "react"
import "./style.css"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container grid2'>
          <div className='box'>
            <h1>iShop</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor libero id et, in gravida. Sit diam duis mauris nulla cursus. Erat et lectus vel ut sollicitudin elit at amet.</p>
            <div className='icon d_flex'>
              <div className='img d_flex'>
                <i class='fa-brands fa-google-play'></i>
                <span><a href="#">Google Play</a></span>
              </div>
              <div className='img d_flex'>
                <i class='fa-brands fa-app-store-ios'></i>
                <span><a href="#">App Store</a></span>
              </div>
            </div>
          </div>

          <div className='box'>
            <h2>About Us</h2>
            <ul>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Our Stores</a></li>
              <li><a href="#">Our Cares</a></li>
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>
          <div className='box'>
            <h2>Customer Care</h2>
            <ul>
              <li><a href="#">Help Center </a></li>
              <li><a href="#">How to Buy </a></li>
              <li><a href="#">Track Your Order </a></li>
              <li><a href="#">Corporate & Bulk Purchasing </a></li>
              <li><a href="#">Returns & Refunds </a></li>
            </ul>
          </div>
          <div className='box'>
            <h2>Contact Us</h2>
            <ul>
              <li>Bathinda,Punjab </li>
              <li>Email: iShop@gmail.com</li>
              <li>Phone: +91 9876543210</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer