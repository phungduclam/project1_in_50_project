import React from "react";
import "./Header.css";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import StorefrontIcon from "@material-ui/icons/Storefront";
import SearchIcon from "@material-ui/icons/Search";

import { Outlet, Link } from "react-router-dom";
//phần render header
function Header() {
  return (
    // header chia ra làm 3 phần gồm logo,search,nav(gồm các item :login ,giỏ hàng..)
    <>
      <div className="header">
        <div className="header__logo">
          <StorefrontIcon className="header__logoImage" fontSize="large" />
          <h2 className="header__logoTitle">eShop</h2>
        </div>
        <div className="header__search">
          <input type="text" className="header__searchInput" />
          <SearchIcon className="header__searchIcon" />
        </div>
        <div className="header__nav">
          <div className="nav__item">
            <span className="nav__itemLineOne">Hello Guest</span>
            <span className="nav__itemLineTwo">Sign In</span>
          </div>
          <div className="nav__item">
            <span className="nav__itemLineOne">Hello Guest</span>
            <span className="nav__itemLineTwo">YourShop</span>
          </div>
          <div className="nav__item nav__cart">
            <ShoppingBasketIcon className="itemBasket" />
            <span className="nav__itemLineTwo nav__basketCount">0</span>
          </div>
        </div>
        <li>
          <Link to="/check">aaa</Link>
        </li>
      </div>
      <Outlet />
    </>
  );
}

export default Header;
