import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

function NavButton(props){
    const crld = {'color':'rgb(240, 136, 4)','fontSize':'16px'};
    return(
        <NavLink to={props.link} className='navbutton'>
            <div className="icon">{props.ico!=null ? <FontAwesomeIcon icon={props.ico}/> : null}</div>
            <div className="labeling">
                <p style={props.name==='Cart' ? crld : null}>{props.subt}</p>
                {props.middle}
                <h3>{props.name}</h3>
            </div>
        </NavLink>
    );
}

export default NavButton;