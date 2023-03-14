import { Route } from "react-router-dom";
import Home from "./components/Home";
import Products from "./components/Products";
import Header from "./components/Header";
import ProductItem from "./components/ProductItem";


function App() {
	return (
		<div className="App">
			<Header/>
			<Route path={'/home'}>
				<Home/>
			</Route>
			<Route path={'/products'}>
				<Products/>
			</Route>
			<Route path={'/product-item/:'}>
				<ProductItem/>
			</Route>
		</div>
	);
}

export default App;
