import { Link } from "react-router-dom";

function Products() {
	return(
		<div>
			<h1>Products page</h1>
			<ul>
				<li><Link to={'/products/1'}>product 1</Link></li>
				<li><Link to={'/products/2'}>product 2</Link></li>
				<li><Link to={'/products/3'}>product 3</Link></li>
				<li><Link to={'/products/4'}>product 4</Link></li>
				<li><Link to={'/products/5'}>product 5</Link></li>
				<li><Link to={'/products/6'}>product 6</Link></li>
			</ul>
		</div>
	)
}

export default Products;