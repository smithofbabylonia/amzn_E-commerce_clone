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


function App() {
	const logged = false;
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
					{logged ? <><Header/><Account/></> : <Login/>}
				</Route>
				<Route path={'/orders'}>
					{logged ? <><Header/><Orders/></> :
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
