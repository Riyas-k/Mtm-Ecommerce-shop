import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./Header.css";
import "../../styles/Common.css";
import "../../styles/responsive.css";

import { BsListUl, BsPersonBoundingBox } from "react-icons/bs";
const Header = () => {
  return (
    <header className="header">
      <Link to="/home">
        <h1 className="text-black font-semibold text-3xl">
          Mtm Metales <span className="text-orange-500">&</span> Gift House
        </h1>
      </Link>

      <nav className="main-nav">
        <ul className="main-nav-list">
          <li>
            <Link className="main-nav-link" to="/home">
              Home
            </Link>
          </li>
          <li>
            <Link className="main-nav-link" to="/foods">
              Shop
            </Link>
          </li>
          <li>
            <Link className="main-nav-link" to="/Contact">
              Contact Us
            </Link>
          </li>

          <li>
            <Link className="main-nav-link" to="/cart">
              10
              <AiOutlineShoppingCart className="cursor-pointer" size={30} />
            </Link>
          </li>

          <div className="bg-white w-24 cursor-pointer  h-11 rounded-full border-gray-600 border shadow-lg ">
            <div className="flex justify-between p-2">
              <BsListUl size={15} />
              <BsPersonBoundingBox size={15} />
            </div>
          </div>

          <li>
            <Link className="main-nav-link nav-cta" to="/login">
              Join Now
            </Link>
          </li>
        </ul>
      </nav>

      <button className="btn-mobile-nav">
        <ion-icon class="icon-mobile-nav" name="menu-outline"></ion-icon>
        <ion-icon class="icon-mobile-nav" name="close-outline"></ion-icon>
      </button>
    </header>
  );
};

export default Header;
