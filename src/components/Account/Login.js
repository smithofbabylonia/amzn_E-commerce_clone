import { useState } from "react";
import { Link } from "react-router-dom";
import './Login.css';

function Login(){
	const [emlVar,setEmailvar] = useState("");//repurposed email address
	const [passVar, changePass] = useState("");//repurposed password
	const [labelVar,editLabel] = useState("Email or mobile phone number");
	const [butnLabel,changeBtn] = useState("Continue");
	const [passDis,showPass] = useState({'display':'none'});
	const [emlDis, showEml] = useState({'display':'block'});

	function nextpage(e){
		e.preventDefault();
		if(emlVar.length>0 && passVar.length===0){//going to check if email exists on system
			console.log("It is werking");
			editLabel("Password");
			showPass({'display':'block'});
			showEml({'display':'none'});
			changeBtn("Login");
		}
		if(passVar.length>0){
			console.log("Still working");
			editLabel("Email or mobile phone number");
			showPass({'display':'none'});
			showEml({'display':'block'});
			changeBtn("Continue");
			setEmailvar("");
			changePass("");
			window.location = "/home";
		}
	}

    return(
        <div className="login flex-cntr">
            <Link to={'/home'}><img className="amznlogo" src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="Amazon"/></Link>
			<form className="login-container wide" onSubmit={nextpage}>
				<h2>Sign in</h2>
				<h4>{labelVar}</h4>
				<input style={emlDis} className="inpt" type={'email'} value={emlVar} onChange={e => setEmailvar(e.target.value)} name="email"/>
				<input style={passDis} className="inpt" type={'password'} value={passVar} onChange={e => changePass(e.target.value)} name="password"/>
				<input type="submit" value={butnLabel} className="next inpt"/>
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