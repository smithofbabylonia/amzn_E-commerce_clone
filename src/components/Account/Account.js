import { auth } from "../../firebase";


function Account(){
    return(
        <div className="signin">
            <h3>Sign in</h3>
            <button onClick={(e)=>{auth.signOut()}} name={'Logout'}>LogOut</button>
        </div>
    );
}

export default Account;