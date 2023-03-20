import { useState } from "react";
import { Link } from "react-router-dom";
import './Login.css';

function Login(){
	const [fieldvar,setFieldvar] = useState("");
    return(
        <div className="login flex-cntr">
            <Link to={'/home'}><img className="amznlogo" src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="Amazon"/></Link>
			<form className="login-container wide" >
				<h2>Sign in</h2>
				<h4>Email</h4>
				<input className="inpt" type="email" value={fieldvar} onChange={e => setFieldvar(e.target.value)}/>
				<input type="submit" value={'Continue'} className="next inpt"/>
				<br/>
				<p>By continuing, you agree to not the real Amazon's <a className="blor" href="https://www.amazon.com/gp/help/customer/display.html/ref=ap_signin_notification_condition_of_use?ie=UTF8&nodeId=508088">Conditions of Use</a> and <a className="blor" href="https://www.amazon.com/gp/help/customer/display.html/ref=ap_signin_notification_privacy_notice?ie=UTF8&nodeId=468496">Privacy Notice</a>. </p>
				<h6>Need help?</h6>
			</form>
			<div className="switch flex-cntr">
				<h5>New to Amazon?</h5>
				<button className=" inpt wider">Create your Amazing account</button>
			</div>
        </div>
    );
}

export default Login;