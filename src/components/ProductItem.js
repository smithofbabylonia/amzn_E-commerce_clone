import { useParams } from "react-router-dom";


function ProductItem(){
	const params = useParams();
	return(
		<div>
			<h1>Biiig</h1>
			<p>description...</p>
			<p>{params.id}</p>
		</div>
	);
}

export default ProductItem;