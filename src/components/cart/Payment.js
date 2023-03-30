import { useContext } from "react"
import ShoppingContext from "../../context/shoppingContext";
import {db} from '../../firebase';

function Payment(props){
    const shop = useContext(ShoppingContext);

    function payForCart(){
        //console.log(shop.basketTotal());
        db.collection('user').doc(shop.user?.uid).collection('orders').doc().set({
            basket:shop.basket,
            amount:shop.basketTotal(shop.basket),
        });
    }
    return(
        <form>
            <h5>Pay with card</h5>
            <label>Delivery address</label>
            <input type="text"/>
            <label>name on card</label>
            <input type="text"/>
            <label>card number</label>
            <input type="text"/>
            <button onClick={e =>{payForCart()}} className="inpt">Pay now</button>
        </form>
    )
}

export default Payment;