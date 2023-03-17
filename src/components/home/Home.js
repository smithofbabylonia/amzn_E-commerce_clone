import Category from "./Category";
import './Home.css';


function Home(){

	return(
		<main className="home">
			<div className="carousel">
				<i className="left scroll"><span>Prev</span></i>
				<i className="right scroll"><span>Next</span></i>
			</div>
			<div className="categories">
				<Category name="Gaming accessories"/>
				<Category name="Beauty picks"/>
				<Category name="Health & Personal Care"/>
				<div className="rect"><h1>advert</h1></div>
				<Category name="Electronics"/>
				<Category name="Get fit at home"/>
				<Category name="Shop by Category"/>
				<Category name="Easy returns"/>
				<Category name="New arrivals in Toys"/>
				<Category name="Shop Pet supplies"/>
				<Category name="Create with strip lights"/>
				<Category name="Shop Laptops & Tablets"/>
			</div>
		</main>
	);

}

export default Home;