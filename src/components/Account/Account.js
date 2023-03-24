import { useContext } from "react";
import AuthContext from "../../context/authContext";


function Account(){
    const ctx = useContext(AuthContext);
    return(
        <div className="signin">
            <h3>Sign in</h3>
            <button onClick={ctx.onLogOut} name={'Logout'}>LogOut</button>
        </div>
    );
}

export default Account;