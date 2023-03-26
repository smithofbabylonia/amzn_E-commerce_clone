import { NavLink } from "react-router-dom";
import NavButton from './NavButton.js';
import SearchBar from './SearchBar.js';
import './Header.css';
import { faCartShopping, faFlagUsa, faLocationDot, faBars } from "@fortawesome/free-solid-svg-icons";
import { useContext, useEffect, useState } from "react";
import ShoppingContext from "../../context/shoppingContext.js";

function Header(){

	const shop = useContext(ShoppingContext);
	const [cartItems, updateCart] = useState(0);

	useEffect(()=>{
		updateCart(shop.basketItems(shop.basket));
	},[shop])

	return(
		<header>
			<nav className="main-navbar">
				<div className="menusplit">
					<NavLink to={'/home'}>
						<img className="navbutton amznlogo" src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="Amazon"/>
					</NavLink>
					<NavButton link='/delivery' ico={faLocationDot} subt='Deliver to' name='South Africa'/>
				</div>
				<div className="menusplit search">
					<SearchBar/>
				</div>
				<div className="menusplit">
					<NavButton link='/region' ico={faFlagUsa} name='EN'/>
					<NavButton link={'/account'} subt={shop.user!=null? 'Hello user':'Hello, sign in'} name='Account & Lists'/>
					<NavButton link={'/orders'} subt='Returns' name='& Orders'/>
					<NavButton link={'/cart'} ico={faCartShopping} subt={cartItems} name='Cart'/>
				</div>
			</nav>
			<nav className="secondary-navbar menusplit">
				<div className="menusplit">
					<NavButton link='/home' middle='All' ico={faBars}/>
					<NavButton link='/home' middle="Today's deals"/>
					<NavButton link='/home' middle='Customer service'/>
					<NavButton link='/home' middle='Registry'/>
					<NavButton link='/home' middle='Gift cards'/>
					<NavButton link='/home' middle='Sell'/>
				</div>
				<NavButton link='/home' middle='Shop great deals now'/>
			</nav>
		</header>
	);
}

export default Header;