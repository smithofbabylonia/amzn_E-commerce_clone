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
			<div className="cart_products">
				{shop.basket.length===0 ? <h4>Nothing to see here..</h4>:(<div className="cart-item"><h4>Shopping cart</h4><p>Price</p></div>)}
				{shop.basket.map((product)=>{
					return <div className="cart-item" key={product.id}>
						<div className="layer-one">
							<img alt="Product here"/>
							<div>
								<h5>{product.title}</h5>
								<p>In stock</p>
								<span> </span>
								<span>quantity: {product.qnty}</span>
								<span> </span>
								<span>rating: {product.rating}</span>
								<button onClick={(e) => removeItemHandler(e,product.id)} >Remove from cart</button>
							</div>
						</div>
						<span><h6>${product.price}</h6></span>
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