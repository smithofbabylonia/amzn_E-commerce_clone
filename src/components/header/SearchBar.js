import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";

function SearchBar(props){

    const selectRef = useRef(null);
    const searchRef =useRef(null);
    const [selectedVal, switchVal] = useState("All");

    useEffect(()=>{
        let x = document.getElementById("categoriesdd");
        let y = x.options[x.selectedIndex];
        let z = y.value.length;
        //console.log(selectedRef);
        let calcs = 35+7*z;
        x = document.getElementsByClassName('search');
        y = x[0].offsetWidth;
        z = y-calcs-48;
        selectRef.current.style.width = calcs+'px';
        searchRef.current.style.width = z+'px';

    },[selectedVal]);

    return(
        <>
        <select className="rndlt" title="search in" ref={selectRef} id="categoriesdd" value={selectedVal} onChange={(e)=>{switchVal(e.target.value)}}>
						<option value='All'>All</option>
						<option value='Arts and Crafts'>Arts and Crafts</option>
                        <option value='Deals'>Deals</option>
                        <option value='Hunting & Fishing Product'>Hunting & Fishing Product</option>
                        <option value='Prime Video'>Prime Video</option>
                        <option value='Software'>Software</option>
					</select>
					<input ref={searchRef} className="searchbar" type="search" title="" placeholder="Search Amazon"/>
					<button type="submit" title="click to search" className="next rndrt"><FontAwesomeIcon icon={faMagnifyingGlass}/></button>
        </>
    );
}

export default SearchBar;