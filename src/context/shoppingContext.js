import { createContext } from "react";

const ShoppingContext = createContext({
	basket:[],
	user:null,
	addToBasket:(item)=>{}, 
	basketTotal:(basket)=>{},
	removeFromBasket:(item)=>{},
	setUser:(userObject)=>{}, 
});

//Shopping reducer*/

export function shoppingReducer(state, action){ // I think I understand what it does but I'm still unsure of the how
	switch (action.type) {
		case 'ADD_TO_BASKET':
			return{
				...state, basket: [...state.basket,action.payload]
			};
		case 'LOGIN_USER':
			return{
				...state, user: action.payload,
			};
		case 'REMOVE_FROM_BASKET':
			return{
				...state, basket: state.basket.filter(item => item.id !==action.payload)
			};
		default:
			return state;
		}
}


export default ShoppingContext;