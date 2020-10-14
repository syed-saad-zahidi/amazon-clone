/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "../Header.css";
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link  } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "../firebase";

function Header() {
  const [ {basket , user}, dispatch] = useStateValue();
  const handleAuthentication = () => {
     if (user) {
       auth.signOut();
     }
  }
  return (
    <div className="header">
      <Link to="/">
      <img
        className="header_logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
      />  

      
      </Link>
            <div className="header_search">
        <input className="header_searchInput" type="text" />
        <SearchIcon
         className="header_searchIcon"
         />

        {/* logo */}
      </div>
     
     <div className="header_nav">
       <Link to={!user && '/login'}>  {/*if there is no user only then we push to the login page  */}
       <div onClick={handleAuthentication}
        className="header_option">
          <span className="header_optionLineOne">Hell {user?.email}</span>
  <span className="header_optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
        </div>
     </Link>
     
        <div className="header_option">
          <span className="header_optionLineOne">Returns</span>
          <span className="header_optionLineTwo">& Orders</span>
        </div>
        <div className="header_option">
          <span className="header_optionLineOne">Your</span>
          <span className="header_optionLineTwo">Prime</span>
        </div>
       <Link to="/Checkout">
       <div className="header_optionBasket">
          <ShoppingBasketIcon />
  <span className="header_optionLineTwo header_basketCount">{basket?.length}</span>

        </div>
       </Link>
      </div>
    </div>
  );
}

export default Header;
