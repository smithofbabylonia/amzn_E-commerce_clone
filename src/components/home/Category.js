import { NavLink } from "react-router-dom";

function Category(props){
	return(
		<div className="rect categoryblock">
			<NavLink to={'/products'}>
				<h5>{props.name}</h5>
				<img src={"https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2022/February/DashboardCards/GW_CONS_AUS_HPC_HPCEssentials_CatCard_Desktop1x._SY304_CB627424361_.jpg"} alt="typical product"/>
				<h6 className="blor">Shop now</h6>
			</NavLink>
		</div>
	);
}

export default Category;