// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className='py-32'>
    <div className="grid grid-cols-2 md:grid-cols-5 gap-8 container mx-auto">
      <div className="col-span-2 md:col-span-1">
        <Link to="/home" className="block mb-8">
          <h1 className='font-semibold text-2xl text-orange-500'>M<span className='text-orange-500'>tm</span> Metales</h1>
        </Link>
        <ul className="flex gap-8">
          <li><Link to="#" className="text-2xl text-gray-600 hover:text-gray-500"><ion-icon name="logo-instagram"></ion-icon></Link></li>
          <li><Link to="#" className="text-2xl text-gray-600 hover:text-gray-500"><ion-icon name="logo-facebook"></ion-icon></Link></li>
          <li><Link to="#" className="text-2xl text-gray-600 hover:text-gray-500"><ion-icon name="logo-twitter"></ion-icon></Link></li>
        </ul>
        <p className="text-gray-600 mt-auto">&copy; <span className="text-orange-500">2027</span> by Mtm, Inc. All rights reserved.</p>
      </div>

      <div className="md:col-span-1">
        <p className="text-xl font-semibold mb-8">Contact us</p>
        <address className="text-gray-600">
          <p className="mb-4">623 Harrison St., 2nd Floor, San Francisco, CA 94107</p>
          <p><Link to="tel:415-201-6370" className="text-gray-600 hover:text-gray-500">415-201-6370</Link><br />
            <Link to="mailto:hello@omnifood.com" className="text-gray-600 hover:text-gray-500">hello@omnifood.com</Link>
          </p>
        </address>
      </div>

      <div className="md:col-span-1">
        <p className="text-xl font-semibold mb-8">Account</p>
        <ul className="flex flex-col gap-8">
          <li><Link to="/signup" className="text-gray-600 hover:text-gray-500">Create account</Link></li>
          <li><Link to="/login" className="text-gray-600 hover:text-gray-500">Sign in</Link></li>
          <li><Link to="/home" className="text-gray-600 hover:text-gray-500">iOS app</Link></li>
          <li><Link to="/home" className="text-gray-600 hover:text-gray-500">Android app</Link></li>
        </ul>
      </div>

      <div className="md:col-span-1">
        <p className="text-xl font-semibold mb-8">Company</p>
        <ul className="flex flex-col gap-8">
          <li><Link to='/About' className="text-gray-600 hover:text-gray-500">About Mtm</Link></li>
          <li><Link to='/Dashboard' className="text-gray-600 hover:text-gray-500">For Business</Link></li>
          <li><Link to="/CookingPartners" className="text-gray-600 hover:text-gray-500">Cooking partners</Link></li>
          <li><Link to="/Carers" className="text-gray-600 hover:text-gray-500">Careers</Link></li>
        </ul>
      </div>

      <div className="md:col-span-1">
        <p className="text-xl font-semibold mb-8">Resources</p>
        <ul className="flex flex-col gap-8">
          <li><Link to="/Term" className="text-gray-600 hover:text-gray-500">Recipe directory</Link></li>
          <li><Link to="/Help" className="text-gray-600 hover:text-gray-500">Help center</Link></li>
          <li><Link to="/Term" className="text-gray-600 hover:text-gray-500">Privacy & terms</Link></li>
        </ul>
      </div>
    </div>
  </footer>
  );
}

export default Footer;
