import React,{Component} from 'react';
import firebase from '../firebase.js'
import {browserHistory} from 'react-router';
import * as actions from '../actions';
import {connect} from 'react-redux';
class Login extends Component{
  constructor(props){
    super(props);
    this.state={
      email:'',
      password:''
    };
  }
  componentWillMount(){
    this.props.authUser(false);
  }
  render(){
    return (
      <div className = "container">
      <h1 style={{marginTop:'5%',textAlign:'center'}}>Redux YouOwn</h1>
      	<div className="wrapper">
      		<form action="" method="post" name="Login_Form" className="form-signin">
      		    <h3 className="form-signin-heading">Welcome Back! Please Sign In</h3>
      			  <hr className="colorgraph"></hr>
              <br></br>
      			  <input type="email" className="form-control" name="Username" placeholder="Email"  onChange={(e)=>this.setState({email:e.target.value})} value={this.state.email} required="" autofocus="" />
      			  <input type="password" className="form-control" name="Password" placeholder="Password" onChange={(e)=>this.setState({password:e.target.value})} value={this.state.password} required=""/>
      			  <button id="signin" type="button" onClick={this.signIn} className="btn btn-lg btn-primary btn-block"  name="Submit" value="Login" type="Submit">Sign in</button>
              <button id="signup" type="button" onClick={this.signUp} className="btn btn-lg btn-primary btn-block"  name="Submit" value="Login" type="Submit">Sign up</button>
      		</form>
      	</div>
      </div>
    )
  }
  signIn = ()=>{
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
      this.props.authUser(false);
      alert('Cannot Authenticate!');
      });
      this.props.addEmail(this.state.email);
      browserHistory.push({pathname: '/home', state: {message:this.state.email}});
      this.props.authUser(true);
      this.setState({email:'',password:''});
  }
  signUp = ()=>{
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).catch(function(error) {
          var errorCode = error.code;
          var errorMessage = error.message;
          this.props.authUser(false);
        alert('Cannot verify credentials!');
        });
          this.props.authUser(this.state.email);
        browserHistory.push({pathname: '/home', state: {message:this.state.email}});
        this.setState({email:'',password:''});
        this.props.authUser(true);
  }
}
function mapStateToProps(state){
  return {email:state.addEmail}
}
export default connect(mapStateToProps,actions)(Login);
