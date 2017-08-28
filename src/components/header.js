import React,{Component} from 'react';
import Dashboard from './dashboard.js';
import {Link} from 'react-router';
import {connect} from 'react-redux';
class Header extends Component{
  render(){

    if(Array.isArray(this.props.videos)==false){
      return (
        <h3 className="header">{this.props.name}</h3>
    );
  }
      return (
        <nav style={{backgroundColor:'white',marginTop:'4%'}}className="navbar navbar-default">
            <div className="container-fluid">
                <div className="navbar-header">
                  <Link to={`/dashboard`}>
                    <h3 className="header">{this.props.name}</h3>
                    <p className="active">Visit Account</p>
                  </Link>
                </div>
            </div>
        </nav>
    );
  }
}

function mapStateToProps(state){
  return {email:state.addEmail}
}
export default connect(mapStateToProps)(Header);
