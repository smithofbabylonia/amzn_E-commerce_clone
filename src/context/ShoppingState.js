import { useReducer } from "react";
import ShoppingContext, { shoppingReducer } from "./shoppingContext";

export function ShoppingState(props){

    const initialState = {basket:[], user:null};
    
    const [state, dispatch] = useReducer(shoppingReducer,initialState);

    // Selectors
    function getBasketTotal(basket){
        basket?.reduce((amount,item)=>item.price + amount,0);
    }

    async function addToBasket(item){
        dispatch({type: 'ADD_TO_BASKET', payload: item});
        console.log("Added",state);
    }

    return(
        <ShoppingContext.Provider value={{basket:state.basket, user:state.user, basketTotal:getBasketTotal, addToBasket:addToBasket}}>{props.children}</ShoppingContext.Provider>
    );

}