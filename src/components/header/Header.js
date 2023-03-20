import { NavLink } from "react-router-dom";
import NavButton from './NavButton.js';
import './Header.css';

function Header(){

	return(
		<header>
			<nav className="main-navbar">
				<div className="menusplit">
					<NavLink to={'/home'}>
						<img className="navbutton amznlogo" src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="Amazon"/>
					</NavLink>
					<NavButton link='/delivery' subt='Deliver to' name='South Africa'/>
				</div>
				<div className="menusplit search">
					<select name="categoriesdd" title="categoriesdd" className="categoriesdd">
						<option name='All'>All</option>
						<option name='Arts and Crafts'>Arts and Crafts</option>
					</select>
					<input type="search" title="" placeholder="Search Amazon"/>
					<input type="submit"/>
					
				</div>
				<div className="menusplit">
					<NavButton link='/region' name='EN'/>
					<NavLink to={'/account'}>Account</NavLink>
					<NavLink to={'/orders'}>Orders</NavLink>
					<NavLink to={'/cart'}>Cart</NavLink>
				</div>
			</nav>
			<nav className="secondary-navbar menusplit">
				<ul className="menusplit">
					<li className="navbutton"><NavLink to={'/home'}>All</NavLink></li>
					<li className="navbutton"><NavLink to={'/home'}>Today's deals</NavLink></li>
					<li className="navbutton"><NavLink to={'/home'}>Customer service</NavLink></li>
					<li className="navbutton"><NavLink to={'/home'}>Registry</NavLink></li>
					<li className="navbutton"><NavLink to={'/home'}>Gift cards</NavLink></li>
					<li className="navbutton"><NavLink to={'/products'}>Sell</NavLink></li>
				</ul>
				<NavLink className="navbutton" to={'/'}>Shop great deals now</NavLink>
			</nav>
		</header>
	);
}

export default Header;