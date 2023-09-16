// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/Images/logo.jpeg";
import "./Fooer.css"
import "../../styles/Common.css"
import "../../styles/responsive.css"
const Footer = () => {
  return (
    <footer className='footer'>
    <div className="container grid grid--footer">
     <div className="logo-col">
       <Link to="/home" class="footer-logo">
         <img className="logo" alt="Omnifood logo" src={logo} />
       </Link>

       <ul className="social-links">
         <li>
           <a className="footer-link" href="#"
             ><ion-icon class="social-icon" name="logo-instagram"></ion-icon></a>
         </li>
         <li>
           <a className="footer-link" href="#"
             ><ion-icon class="social-icon" name="logo-facebook"></ion-icon></a>
         </li>
         <li>
           <a className="footer-link" href="#"
             ><ion-icon class="social-icon" name="logo-twitter"></ion-icon></a>
         </li>
       </ul>

       <p className="copyright">
         Copyright &copy; <span className="year">2027</span> by Mtm, Inc.
         All rights reserved.
       </p>
     </div>

     <div className="address-col">
       <p className="footer-heading">Contact us</p>
       <address className="contacts">
         <p className="address">
           623 Harrison St., 2nd Floor, San Francisco, CA 94107
         </p>
         <p>
           <a className="footer-link" href="tel:415-201-6370">415-201-6370</a><br />
           <a className="footer-link" href="mailto:hello@omnifood.com">hello@omnifood.com</a>
         </p>
       </address>
     </div>

     <nav className="nav-col">
       <p className="footer-heading">Account</p>
       <ul className="footer-nav">
         <li><Link to="/signup" class="footer-link" >Create account</Link></li>
         <li><Link to="/login" class="footer-link" >Sign in</Link></li>
         <li><Link to="/home" class="footer-link" >iOS app</Link></li>
         <li><Link to="/home" class="footer-link" >Android app</Link></li>
       </ul>
     </nav>

     <nav className="nav-col">
       <p className="footer-heading">Company</p>
       <ul className="footer-nav">
         <li><Link to='/About' class="footer-link">About Mtm</Link></li>
         <li><Link to='/Dashboard' class="footer-link">For Business</Link></li>
         <li><Link to="/CookingPartners" class="footer-link">Cooking partners</Link></li>
         <li><Link to="/Carers" class="footer-link">Careers</Link></li>
       </ul>
     </nav>

     <nav className="nav-col">
       <p className="footer-heading">Resources</p>
       <ul className="footer-nav">
         <li><Link to="/Term" class="footer-link">Recipe directory </Link></li>
         <li><Link to="/Help" class="footer-link" >Help center</Link></li>
         <li><Link to="/Term" class="footer-link" >Privacy & terms</Link></li>
       </ul>
     </nav>
   </div>

 </footer>
  );
}

export default Footer;
