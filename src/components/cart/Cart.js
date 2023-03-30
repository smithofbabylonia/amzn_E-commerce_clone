import { useContext, useState } from "react";
import ShoppingContext from "../../context/shoppingContext";
import Payment from "./Payment";
import './Cart.css';
import { useHistory } from "react-router-dom";

function Cart(){//{id: params.id, rating:4.5, title:"product to buy", price:5.99}

	const shop = useContext(ShoppingContext);
	const [canPay, setPayable] = useState(false);
	const history = useHistory();

	function removeItemHandler(e,item){
		console.log('item',item,'was removed from cart!');
		shop.removeFromBasket(item);
	}

	function proceedHandler(){
		if(shop.user!==null){
			console.log("Ready");
			setPayable(true);
		}else{
			history.push('/account')
		}
	}

	return(
		<div className="cart">
			<h2>Check Out</h2>
			<div className="cart_products">
				{shop.basket.length===0 ? <h4>Nothing to see here..</h4>:<h4>Items :</h4>}
				{shop.basket.map((product)=>{
					return <div className="item" key={product.id}>
						<div className="cart_image">
							<img alt="Product here"/>
						</div>
						<div className="descriptor">
							<h5>{product.title}</h5>
							<p>A short description of the product</p>
							<span>price: $ {product.price} ea.</span>
							<span> </span>
							<span>quantity: {product.qnty}</span>
							<span> </span>
							<span>rating: {product.rating}</span>
						</div>
						<div><button onClick={(e) => removeItemHandler(e,product.id)} >Remove from cart</button></div>
					</div>
				}) }
			</div>
			<div className="cart-right">
				<div>
					<div id="cart-totals">
						<span>Subtotal ({shop.basketItems(shop.basket)} Items): </span>
						<span>${shop.basketTotal(shop.basket)}</span>
					</div>
					<button onClick={e=> {proceedHandler()}} className="butn">Proceed to Checkout</button>
				</div>
				{canPay && <Payment/>}
			</div>
		</div>
	);
}

export default Cart;