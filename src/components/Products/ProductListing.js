import { NavLink } from "react-router-dom";

function ProductListing(props){
	const link = '/products/'+props.id;
	return(
		<div className="listing">
			<NavLink to={link}>
				<div className="prod-picture below">
					<img src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/810ZonthJyL._AC_UL480_FMwebp_QL65_.jpg" alt="A product"/>
				</div>
				<p className="below">Sceptre 24" Professional Thin 75Hz 1080p LED Monitor 2x HDMI VGA Build-in Speakers, Machine Black (E248W-19203R Series)</p>
				<span className="rating">
					<span>4.5</span>
					<span className="small-stars">⭐⭐⭐⭐</span>
				</span>
				<h6 className="below">Liquid · 0.8 Fl Oz (Pack of 1)</h6>
				<div className="price below">
				<h4><sup>$</sup>12<sup>99</sup></h4> ($16.24/Fl Oz)
				</div>
				<span className="delivery below">
					<span>Delivery</span>
					<span> </span>
					<span className="bold"><strong>Tue, April 11</strong></span>
				</span>
			</NavLink>
		</div>
	);
}

export default ProductListing;