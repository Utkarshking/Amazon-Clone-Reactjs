import React from "react"
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from "react-router-dom";
function Header() {
    return (
        <div className="header">
            <Link to="/">
                {/* adding logo */}
                <img className="header__logo" src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                 alt="amazon logo"/>
                 {/* adding a search header ie. textbox for searching items */}
            </Link>
            
        <div className="header__search">
            <input className="header__search_Input" type="text"></input>
            {/* search logo */}
           <SearchIcon className="header__search_Icon" /> 
        </div>
        {/* for all other options */}
        {/* we have taken a different containers */}
        <div className="header__nav">
            <div className="Header__option">
                <span className="header__optionLine1">Hello Guest</span>
                <span className="header__optionLine2">Sign In</span>
            </div>
            <div className="Header__option">
                <span className="header__optionLine1">Returns</span>
                <span className="header__optionLine2">&Orders</span>
            </div>
            <div className="Header__option">
                <span className="header__optionLine1">Your</span>
                <span className="header__optionLine2">Prime</span>
            </div>
            <Link to="/Checkout">
                 <div className="Header__optionBasket">
                    <ShoppingBasketIcon/>
                    <span className="header_option_Basketcount">0</span>
                 </div>
            </Link>
            </div>
        </div>
    );
}

export default Header
