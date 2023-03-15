import { NavLink } from "react-router-dom";
/*import './Header.css';*/

function Header(){

	return(
		<header>
			<nav>
				<ul>
					<li><NavLink to={'/home'}>Amazon</NavLink></li>
					<li><NavLink to={'/delivery'}>Deliver</NavLink></li>
					<li><input type="text"/></li>
					<li><NavLink to={'/region'}>Region</NavLink></li>
					<li><NavLink to={'/account'}>Account</NavLink></li>
					<li><NavLink to={'/orders'}>Orders</NavLink></li>
					<li><NavLink to={'/cart'}>Cart</NavLink></li>
				</ul>
			</nav>
			<nav>
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