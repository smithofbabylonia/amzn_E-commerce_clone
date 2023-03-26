import { useContext } from "react";
import ShoppingContext from "../context/shoppingContext";

function Cart(){//{id: params.id, rating:4.5, title:"product to buy", price:5.99}

	const shop = useContext(ShoppingContext);

	function removeItemHandler(e,item){
		console.log('item',item,'was removed from cart!');
		shop.removeFromBasket(item);
	}

	return(
		<div className="cart">
			<h2>Check Out</h2>
			<div className="cart_products">
				{shop.basket.length==0 ? <h4>Nothing to see here..</h4>:<h4>Items :</h4>}
				{shop.basket.map((product)=>{
					return <div className="item" key={product.id}>
						<div className="cart_image">
							<img alt="Product here"/>
						</div>
						<div className="descriptor">
							<h5>{product.title}</h5>
							<p>A short description of the product</p>
							<span>price: ${product.price}</span>
							<span> </span>
							<span>rating:{product.rating}</span>
						</div>
						<div><button onClick={(e) => removeItemHandler(e,product.id)}>Remove from cart</button></div>
					</div>
				}) }
			</div>
			<div className="check-out">
				<h3>Total: ${shop.basketTotal(shop.basket)}</h3>
				<button>Check out</button>
			</div>
		</div>
	);
}

export default Cart;