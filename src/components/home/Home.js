//import { useRef } from "react";
import Category from "./Category";
import './Home.css';


function Home(){

	const imageLinks = ['https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/61TD5JLGhIL._SX3000_.jpg','https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/71qid7QFWJL._SX3000_.jpg','https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/61jovjd+f9L._SX3000_.jpg','https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/61DUO0NqyyL._SX3000_.jpg','https://m.media-amazon.com/images/I/71tIrZqybrL._SX3000_.jpg'];
	var images = [];
	var imageIndex =0;
	var homeBg = document.getElementById('home');// put useRef instead
	for (let x = 0; x < imageLinks.length; x++) {
		var image = new Image();
		image.src = imageLinks[x];
		images.push(image);	
	}

	setInterval(()=>{
		if(homeBg===null) homeBg = document.getElementById('home');
		homeBg.style.backgroundImage = 'url("'+images[imageIndex].src+'")';
		//console.log(homeRef);
		imageIndex++;
		if(imageIndex===imageLinks.length) imageIndex=0;
	},10000);

	function scrollImages(val){
		imageIndex+=val;
		if(imageIndex===imageLinks.length) imageIndex=0;
		homeBg.style.backgroundImage = 'url("'+images[imageIndex].src+'")';
	}

	return(
		<main id="home">
			<div className="carousel">
				<i className="left scroll"><span>Prev</span></i>
				<i className="right scroll"><span>Next</span></i>
			</div>
			<div className="categories">
				<Category name="Gaming accessories"/>
				<Category name="Beauty picks"/>
				<Category name="Health & Personal Care"/>
				{false ? <div className="rect"><h1>advert</h1></div> : <Category name="Electronics"/>}
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