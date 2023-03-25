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
    }

    function logInUser(user){ // login is a {} containing email and password > might get changed
        dispatch({
            type: 'LOGIN_USER',
             payload:user,
        });
    }

    return(
        <ShoppingContext.Provider value={{basket:state.basket, user:state.user, basketTotal:getBasketTotal, addToBasket:addToBasket, setUser:logInUser}}>{props.children}</ShoppingContext.Provider>
    );

}