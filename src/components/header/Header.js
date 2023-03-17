import { NavLink } from "react-router-dom";
import './Header.css';

function Header(){

	return(
		<header>
			<nav className="main-navbar">
				<div className="menusplit">
					<NavLink to={'/home'}>
						<img className="amznlogo" src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="Amazon"/>
					</NavLink>
					<NavLink to={'/delivery'}>Deliver</NavLink>
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
					<NavLink to={'/region'}>Region</NavLink>
					<NavLink to={'/account'}>Account</NavLink>
					<NavLink to={'/orders'}>Orders</NavLink>
					<NavLink to={'/cart'}>Cart</NavLink>
				</div>
			</nav>
			<nav className="secondary-navbar">
				<ul>
					<li><NavLink to={'/home'}>All</NavLink></li>
					<li><NavLink to={'/home'}>Today's deals</NavLink></li>
					<li><NavLink to={'/home'}>Customer service</NavLink></li>
					<li><NavLink to={'/home'}>Registry</NavLink></li>
					<li><NavLink to={'/home'}>Gift cards</NavLink></li>
					<li><NavLink to={'/products'}>Sell</NavLink></li>
				</ul>
				<NavLink to={'/'}>Shop great deals now</NavLink>
			</nav>
		</header>
	);
}

export default Header;