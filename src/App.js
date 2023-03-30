import { Redirect, Route, Switch } from "react-router-dom";
//import { ReactDOM } from "react";
import Home from "./components/home/Home";
import Products from "./components/Products/Products";
import Header from "./components/header/Header";
import ProductItem from "./components/Products/ProductItem";
import Deliver from "./components/Deliver";
import Account from "./components/Account/Account";
import Cart from "./components/cart/Cart";
import Region from "./components/Region";
import Notfound from "./components/Notfound";
import Orders from "./components/Orders";
import Login from "./components/Account/Login";
import { useContext, useEffect } from "react";
import ShoppingContext from "./context/shoppingContext";
import { auth } from "./firebase";


function App() {
	const shop = useContext(ShoppingContext);
	
	useEffect(()=>{ // So we are setting the user variable and giving it autonomy
		auth.onAuthStateChanged((authUser)=>{
			console.log("User is ->",authUser);
			if(authUser){
				shop.setUser(authUser);
			}else{
				shop.setUser(null);
			}
		});
	},[]); // Compiler complains about this line but following it messes things up

	return (
		<>
			<Switch>
			<Route path={'/'} exact>
					<Redirect to={'/home'}/>
				</Route>
				<Route path={'/home'}>
					<Header/>
					<Home/>
				</Route>
				<Route path={'/products'} exact>
					<Header/>
					<Products/>
				</Route>
				<Route path={'/products/:id'}>
					<Header/>
					<ProductItem/>
				</Route>
				<Route path={'/delivery'}>
					<Header/>
					<Deliver/>
				</Route>
				<Route path={'/region'}>
					<Header/>
					<Region/>
				</Route>
				<Route path={'/account'}>
					{shop.user!=null ? <><Header/><Account /></> : <Login />}
				</Route>
				<Route path={'/orders'}>
					{shop.user!=null ? <><Header/><Orders/></> :
					<Redirect to={'/account'}/> }
				</Route>
				<Route path={'/cart'}>
					<Header/>
					<Cart/>
				</Route>
				<Route path={'/*'}>
					<Header/>
					<Notfound/>
				</Route>
			</Switch>
		</>
	);
}

export default App;
