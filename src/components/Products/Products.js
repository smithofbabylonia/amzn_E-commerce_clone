import ProductListing from "./ProductListing";
import './Products.css';

function Products() {
	return(
		<div className="products">
			<div className="filter">
				<label>1-24 of over 60,000 results</label>
				<label>Featured</label>
			</div>
			<div className="sidebar">
				<h3>More-sustainable Products</h3>
			</div>
			<div className="items-list">
				<div className="results">RESULTS</div>
				<ProductListing id='1'/>
				<ProductListing id='2'/>
				<ProductListing id='3'/>
				<ProductListing id='4'/>
				<ProductListing id='5'/>
				<ProductListing id='6'/>
			</div>
		</div>
	)
}

export default Products;