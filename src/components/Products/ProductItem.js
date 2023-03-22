import { useParams } from "react-router-dom";


function ProductItem(props){
	const params = useParams();
	return(
		<div>
			<h1>Biiig</h1>
			<p>description...</p>
			<p>{params.id}</p>
			{/*<button type="button" onClick={props.addToCart(params.id)}>Add to cart</button>*/}
		</div>
	);
}

export default ProductItem;