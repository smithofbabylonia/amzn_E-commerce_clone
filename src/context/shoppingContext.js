import { createContext } from "react";

const ShoppingContext = createContext({
	basket:[],
	user:null,
	basketTotal:(basket)=>{},
	addToBasket:(item)=>{}
});

//Shopping reducer*/

export function shoppingReducer(state, action){ // Not entirely sure what it does but will figure as we move # useState might've been a better option
	switch (action.type) {
		case 'ADD_TO_BASKET':
			return{
				state, basket: [...state.basket,action.payload]
			} 
		default:
			return state;
		}
}


export default ShoppingContext;