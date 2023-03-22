import { Redirect, Route, Switch } from "react-router-dom";
//import { ReactDOM } from "react";
import Home from "./components/home/Home";
import Products from "./components/Products/Products";
import Header from "./components/header/Header";
import ProductItem from "./components/Products/ProductItem";
import Deliver from "./components/Deliver";
import Account from "./components/Account/Account";
import Cart from "./components/Cart";
import Region from "./components/Region";
import Notfound from "./components/Notfound";
import Orders from "./components/Orders";
import Login from "./components/Account/Login";
import { useEffect, useRef, useState } from "react";


function App() {
	const [logged,setLogged] = useState(false);
	const [cartContainer,cartLoader] = useState(['9','12','32','25','35']);
	
	useEffect(()=>{
		let lclLog = localStorage.getItem('loggedState'); //if(null) is false
		console.log("Session",lclLog);
		if(lclLog) setLogged(true);
	},[]);


	function logOut(){
		console.log("Now logging out");
		localStorage.removeItem('loggedState');
		setLogged(false);
	}
	function addToCart(item){
		var x = [...cartContainer,item];
		cartLoader(x);
	}
	return (
		<>
			<Switch>
			<Route path={'/'} exact>
					<Redirect to={'/home'}/>
				</Route>
				<Route path={'/home'}>
					<Header cartSize={cartContainer.length}/>
					<Home/>
				</Route>
				<Route path={'/products'} exact>
					<Header cartSize={cartContainer.length}/>
					<Products/>
				</Route>
				<Route path={'/products/:id'}>
					<Header cartSize={cartContainer.length}/>
					<ProductItem/>
				</Route>
				<Route path={'/delivery'}>
					<Header cartSize={cartContainer.length}/>
					<Deliver/>
				</Route>
				<Route path={'/region'}>
					<Header cartSize={cartContainer.length}/>
					<Region/>
				</Route>
				<Route path={'/account'}>
					{logged ? <><Header cartSize={cartContainer.length}/><Account logout={logOut}/></> : <Login logState={logged} setLogState={setLogged}/>}
				</Route>
				<Route path={'/orders'}>
					{logged ? <><Header cartSize={cartContainer.length}/><Orders/></> :
					<Redirect to={'/account'}/> }
				</Route>
				<Route path={'/cart'}>
					<Header cartSize={cartContainer.length}/>
					<Cart/>
				</Route>
				<Route path={'/*'}>
					<Header cartSize={cartContainer.length}/>
					<Notfound/>
				</Route>
			</Switch>
		</>
	);
}

export default App;
