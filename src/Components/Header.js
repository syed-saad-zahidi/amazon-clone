/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "../Header.css";

function Header() {
  return (
    <div className="header">
      <img
        className="header_logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
      />
      <div className="header_search">
        <input className="header_searchInput" type="text" />
        {/* logo */}
      </div>
      <div className="header_nav">
        <div className="header_option">
          <span className="hello_optionLineOne">Hello Guest</span>
          <span className="hello_optionLineTwo">Sign In</span>
        </div>
        <div className="header_option">
          <span className="hello_optionLineOne">Returns</span>
          <span className="hello_optionLineTwo">& Orders</span>
        </div>
        <div className="header_option">
          <span className="hello_optionLineOne">Your</span>
          <span className="hello_optionLineTwo">Prime</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
