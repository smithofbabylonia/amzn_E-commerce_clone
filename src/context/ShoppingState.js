import { useReducer } from "react";
import ShoppingContext, { shoppingReducer } from "./shoppingContext";

export function ShoppingState(props){

    const initialState = {basket:[], user:null};
    
    const [state, dispatch] = useReducer(shoppingReducer,initialState);

    // Selectors
    function getBasketTotal(basket){
        return basket?.reduce((amount,item)=>item.price*item.qnty + amount,0);
    }

    function getBasketItems(basket){
        return basket?.reduce((amount,item)=>item.qnty + amount,0);
    }

    async function addToBasket(item){
        dispatch({type: 'ADD_TO_BASKET', payload: item});
    }
    async function removeFromBasket(item){
        dispatch({type: 'REMOVE_FROM_BASKET', payload: item});
    }

    function logInUser(user){ // login is a {} containing email and password > might get changed
        dispatch({
            type: 'LOGIN_USER',
             payload:user,
        });
    }

    return(
        <ShoppingContext.Provider value={{basket:state.basket, basketItems:getBasketItems, user:state.user, basketTotal:getBasketTotal, addToBasket:addToBasket, setUser:logInUser, removeFromBasket:removeFromBasket}}>{props.children}</ShoppingContext.Provider>
    );

}