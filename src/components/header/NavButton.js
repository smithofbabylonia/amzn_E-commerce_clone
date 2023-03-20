import { NavLink } from "react-router-dom";

function NavButton(props){
    return(
        <NavLink to={props.link} className='navbutton'>
            <div className="icon"><i class="fa-solid fa-location-dot"></i></div>
            <div className="labeling">
                <p>{props.subt}</p>
                <h3>{props.name}</h3>
            </div>
        </NavLink>
    );
}

export default NavButton;