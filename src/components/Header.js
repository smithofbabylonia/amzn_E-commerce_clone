import { NavLink } from "react-router-dom";

function Header(){

	return(
		<nav>
			<ul>
				<li><NavLink activeClassName="active" to={'/home'}>Home</NavLink></li>
				<li><NavLink activeClassName="active" to={'/products'}>Products</NavLink></li>
				<li><NavLink activeClassName="active" to={'/about'}>About</NavLink></li>
			</ul>
		</nav>
	);
}

export default Header;