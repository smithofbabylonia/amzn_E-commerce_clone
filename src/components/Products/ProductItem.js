import { useContext } from "react";
import { useParams } from "react-router-dom";
import ShoppingContext from "../../context/shoppingContext";


function ProductItem(props){
	const params = useParams();//This is the stuff we pull from the url/link
	const variables = {id: params.id, rating:4.5, title:"product to buy", price:5.99};
	const shop = useContext(ShoppingContext);
	return(
		<div>
			<h1>Biiig</h1>
			<p>description...</p>
			<p>{params.id}</p>
			<button type="button" onClick={(e)=>{shop.addToBasket(variables)}} >Add to cart</button>
		</div>
	);
}

export default ProductItem;