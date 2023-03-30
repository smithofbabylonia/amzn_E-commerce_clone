import { createContext } from "react";

const ShoppingContext = createContext({
	basket:[],
	user:null,
	addToBasket:(item)=>{}, 
	basketTotal:(basket)=>{},
	basketItems:(basket)=>{},
	emptyBasket:()=>{},
	removeFromBasket:(item)=>{},
	setUser:(userObject)=>{}, 
});

//Shopping reducer*/

export function shoppingReducer(state, action){ // I think I understand what it does but I'm still unsure of the how
	switch (action.type) {
		case 'ADD_TO_BASKET':
			var i=state.basket.find(j => j.id===action.payload.id);
			if(i){
				i.qnty+=1;
				return{
					...state, basket: [...state.basket]
				};
			}else{
				return{
					...state, basket: [...state.basket,action.payload]
				};
			}
		case 'LOGIN_USER':
			return{
				...state, user: action.payload,
			};
		case 'EMPTY_BASKET':
			return{
				...state, basket:[]
			}
		case 'REMOVE_FROM_BASKET':
			var k=state.basket.find(j => j.id===action.payload);
			if(k.qnty>1){
				k.qnty-=1;
				return{
					...state, basket: [...state.basket]
				};
			}else{
			return{
				...state, basket: state.basket.filter(item => item.id !==action.payload)
			};}
		default:
			return state;
		}
}


export default ShoppingContext;