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
			<Header/>
			<Switch>
			<Route path={'/'} exact>
					<Redirect to={'/home'}/>
				</Route>
				<Route path={'/home'}>
					<Home/>
				</Route>
				<Route path={'/products'} exact>
					<Products/>
				</Route>
				<Route path={'/products/:id'}>
					<ProductItem/>
				</Route>
				<Route path={'/delivery'}>
					<Deliver/>
				</Route>
				<Route path={'/region'}>
					<Region/>
				</Route>
				<Route path={'/account'}>
					{logged ? <Account/> : <Login/>}
				</Route>
				<Route path={'/orders'}>
					{logged ? <Orders/> :
					<Redirect to={'/account'}/> }
				</Route>
				<Route path={'/cart'}>
					<Cart/>
				</Route>
				<Route path={'/*'}>
					<Notfound/>
				</Route>
			</Switch>
		</>
	);
}

export default App;
