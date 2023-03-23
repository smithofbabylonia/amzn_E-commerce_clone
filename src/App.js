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
import { useContext, useState } from "react";
import AuthContext from "./context/authContext";


function App() {
	const ctx = useContext(AuthContext);
	const [cartContainer,cartLoader] = useState(['9','12','32','25','35']);
	
	// in comemoration of a couple of functions and variables that used to live here.

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
					{ctx.isLoggedIn ? <><Header cartSize={cartContainer.length}/><Account /></> : <Login />}
				</Route>
				<Route path={'/orders'}>
					{ctx.isLoggedIn ? <><Header cartSize={cartContainer.length}/><Orders/></> :
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
