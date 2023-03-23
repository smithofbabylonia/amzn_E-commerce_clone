import { createContext, useEffect, useState } from "react";

const AuthContext = createContext({
    isLoggedIn: false, 
    onLogOut:()=>{}, 
    onLogIn: (email,password)=>{},
});

export function AuthContextProvider(props){
    const [isLoggedIn,setLogState] = useState(false);

    useEffect(()=>{
		let lclLog = localStorage.getItem('loggedState'); //if(null) is false
		if(lclLog) setLogState(true);
	},[]);

    function logOut(){
		localStorage.removeItem('loggedState');
		setLogState(false);
	}

    function logIn(email, password){
        localStorage.setItem('loggedState',1);
        setLogState(true);
    }

    return <AuthContext.Provider value={{isLoggedIn:isLoggedIn, onLogOut:logOut, onLogIn:logIn}}>{props.children}</AuthContext.Provider>;
}

export default AuthContext;