import { useContext, useRef } from "react";
//import { useEffect } from "react";
import Category from "./Category";
import './Home.css';
import ShoppingContext from "../../context/shoppingContext";


function Home(){

	const imageLinks = ['https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/61TD5JLGhIL._SX3000_.jpg','https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/71qid7QFWJL._SX3000_.jpg','https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/61jovjd+f9L._SX3000_.jpg','https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/61DUO0NqyyL._SX3000_.jpg','https://m.media-amazon.com/images/I/71tIrZqybrL._SX3000_.jpg'];
	var images = [];
	var imageIndex =0;
	const homeRef= useRef(null);
	const shop = useContext(ShoppingContext);

	for (let x = 0; x < imageLinks.length; x++) {
		var image = new Image();
		image.src = imageLinks[x];
		images.push(image);	
	}
	
	setInterval(()=>{
		if(homeRef.current!=null){
			homeRef.current.style.backgroundImage = 'url("'+images[imageIndex].src+'")';
		}
		imageIndex++;
		if(imageIndex===imageLinks.length) imageIndex=0;
	},10000);

	function scrollImages(val){
		imageIndex+=val;
		if(imageIndex===imageLinks.length) imageIndex=0;
		homeRef.current.style.backgroundImage = 'url("'+images[imageIndex].src+'")';
	}

	return(
		<main id="home" ref={homeRef}>
			<div className="carousel">
				<i className="left scroll"><span>Prev</span></i>
				<i className="right scroll"><span>Next</span></i>
			</div>
			<div className="categories">
				<Category name="Gaming accessories"/>
				<Category name="Beauty picks"/>
				<Category name="Health & Personal Care"/>
				{shop.user==null ? <div className="rect"><h1>advert</h1></div> : <Category name="Shop activity trackers and smartwatches"/>}
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