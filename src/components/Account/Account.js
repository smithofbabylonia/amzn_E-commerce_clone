

function Account(props){
    return(
        <div className="signin">
            <h3>Sign in</h3>
            <button onClick={props.logout} name={'Logout'}>LogOut</button>
        </div>
    );
}

export default Account;