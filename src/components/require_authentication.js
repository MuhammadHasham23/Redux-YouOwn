import React,{Component} from 'react';
import {connect} from 'react-redux';
export default function(ComposedComponent){
  class Authentication extends Component{
    static contextTypes = {
      router : React.PropTypes.object
    }
    componentWillMount(){
      if(!this.props.user){
        this.context.router.push('/');
      }
    }
    componentWillUpdate(nextProps){
      if(!nextProps.user){
          this.context.router.push('/');
      }
    }
    render(){
      return(<ComposedComponent {...this.props}/>);
    }
  }
  function mapStateToProps(state){
    console.log(state.userAdd);
    return {user:state.userAdd};
  }
  return connect(mapStateToProps)(Authentication);
}
