import { useEffect, useReducer } from "react";
import { Link, useHistory } from "react-router-dom";
import './Login.css';
import {auth} from "../../firebase";

function Login(props){	
	
	const history = useHistory();

	const initialState = {
		emlVar : "",
		passVar: "",
		butnLabel: "Continue",
		passDis: null,
		emlDis: null,
		isValidEmail: false,
		isValidPwd: false,
	}

	function loginsReducer(state,action){ // loooks longer than useState but i've gained the skill
		switch (action.type) {
			case 'SET_EMAIL':
				return{...state, emlVar: action.payload};
			case 'SET_PASSWRD':
				return{...state, passVar: action.payload};
			case 'TOGGLE_BTN':
				return{...state, butnLabel: action.payload};
			case 'TOGGLE_EML':
				return{...state, emlDis: action.payload};
			case 'TOGGLE_PWD':
				return{...state, passDis: action.payload};
			case 'VALIDATE':
				return{...state, isValidEmail: action.payload};
			default:
				throw new Error(`UNHANDLED ACTION TYPE $(action.type)`);
		}
	}

	const [state, dispatch] = useReducer(loginsReducer, initialState);

	useEffect(()=>{ // When password is checked and verified, show password field else show error
		console.log('use effect is in effect');
		if (state.isValidEmail) {
			dispatch({type:'TOGGLE_PWD', payload:{'display':'block'}});
			dispatch({type:'TOGGLE_EML', payload:{'display':'none'}});
			dispatch({type:'TOGGLE_BTN', payload:'Login'});
		}else{
			dispatch({type:'TOGGLE_PWD', payload:{'display':'none'}});
			dispatch({type:'TOGGLE_EML', payload:{'display':'block'}});
			dispatch({type:'TOGGLE_BTN', payload:'Continue'});
		}
		console.log("the effect is affecting");
	},[state.isValidEmail]);

	function formEventHandler(e){
		e.preventDefault();
		console.log("Deciding what to do w pwd or email");
		if(state.emlVar.includes('@') && state.emlVar.includes('.')){
			dispatch({type:'VALIDATE', payload:true});
		}
		if(state.isValidEmail && state.butnLabel==="Login" && state.passVar.length>6){
			logUserIn();
			dispatch({type:'VALIDATE', payload:false});
		}
	}
	
	function logUserIn(){ //
		auth.signInWithEmailAndPassword(state.emlVar, state.passVar).then(auth =>{
			history.push('/');
	}).catch((error)=> alert(error.message));

	}

	function setUpUser(e){
		e.preventDefault();
		auth.createUserWithEmailAndPassword(state.emlVar, state.passVar).then(auth =>{
			history.push('/');
		});
	}

    return(
        <div className="login flex-cntr">
            <Link to={'/home'}><img className="amznlogo" src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="Amazon"/></Link>
			<form className="login-container wide" onSubmit={formEventHandler}>
				<h2>Sign in</h2>
				<h4 style={state.emlDis}>Email or mobile phone number</h4>
				<input style={state.emlDis} className="inpt" type={'email'} value={state.emlVar} onChange={e => dispatch({type:'SET_EMAIL',payload:e.target.value})} name="email"/>
				<h4 style={state.passDis}>Password</h4>
				<input style={state.passDis} className="inpt" type={'password'} value={state.passVar} onChange={e => dispatch({type:'SET_PASSWRD',payload:e.target.value})} name="password"/>
				<input type="submit" value={state.butnLabel} className="next inpt"/>
				<br/>
				<p>By continuing, you agree to totally not the real Amazon's <a className="blor" href="https://www.amazon.com/gp/help/customer/display.html/ref=ap_signin_notification_condition_of_use?ie=UTF8&nodeId=508088">Conditions of Use</a> and <a className="blor" href="https://www.amazon.com/gp/help/customer/display.html/ref=ap_signin_notification_privacy_notice?ie=UTF8&nodeId=468496">Privacy Notice</a>. </p>
				<h6>Need help?</h6>
			</form>
			<div className="switch flex-cntr">
				<h5>New to Amazon?</h5>
				<button className=" inpt wider" onClick={setUpUser}>Create your Amazing account</button>
			</div>
        </div>
    );
}

export default Login;