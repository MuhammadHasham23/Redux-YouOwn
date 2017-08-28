import React,{Component} from 'react';
import * as ReactBootstrap from 'react-bootstrap';
import YTSearch from 'youtube-api-search';
import {connect} from 'react-redux';
import * as actions from '../actions';
import {browserHistory} from 'react-router';
import Header from './header.js';
class Home extends Component{
  constructor(props){
    super(props);
    this.state={showModal:'',check:{
    horrorCheck:'checked',
    comedyCheck:'checked',
    kidsCheck:'checked',
    diyCheck:'checked',
    actionAndAdventure:'checked',
    animation:'checked'}}
  }
  close = ()=>{
     this.setState({showModal:false})
   }
   open = ()=>{
     this.setState({showModal:true})
   }
  render(){
    return (<div className="box">
      <ReactBootstrap.Button style={{'display':'block','margin':'15% auto'}}className="video-genre" bsSize="large" bsStyle="primary"  onClick={this.open}>Choose Video Genre</ReactBootstrap.Button>
        <ReactBootstrap.Modal show={this.state.showModal} onHide={this.close}>
          <ReactBootstrap.Modal.Header closeButton>
            <ReactBootstrap.Modal.Title>Choose video genre</ReactBootstrap.Modal.Title>
          </ReactBootstrap.Modal.Header>
          <ReactBootstrap.Modal.Body>
          <div className="row">
          <div className="col-md-6 col-sm-6">
                <div className="checkbox">
                    <label><input checked={this.state.check.horrorCheck} onChange={(e)=>this.setState({check:{...this.state.check,horrorCheck:!this.state.check.horrorCheck}})} type="checkbox" value=""/>Horror</label>
                </div>
                <div className="checkbox">
                    <label><input checked={this.state.check.comedyCheck} onChange={(e)=>this.setState({check:{...this.state.check,comedyCheck:!this.state.check.comedyCheck}})} type="checkbox"/>Comedy</label>
                </div>
                <div className="checkbox">
                    <label><input checked={this.state.check.kidsCheck} onChange={(e)=>this.setState({check:{...this.state.check,kidsCheck:!this.state.check.kidsCheck}})} type="checkbox" />Kids</label>
                </div>
          </div>
          <div className="col-md-6 col-sm-6">
              <div className="checkbox">
                  <label><input checked={this.state.check.diyCheck} onChange={(e)=>this.setState({check:{...this.state.check,diyCheck:!this.state.check.diyCheck}})} type="checkbox" value=""/>DIY</label>
              </div>
              <div className="checkbox">
                  <label><input checked={this.state.check.actionAndAdventure} onChange={(e)=>this.setState({check:{...this.state.check,actionAndAdventure:!this.state.check.actionAndAdventure}})} type="checkbox" value=""/>Action And Adventure</label>
              </div>
              <div className="checkbox">
                  <label><input checked={this.state.check.animation} onChange={(e)=>this.setState({check:{...this.state.check,animation:!this.state.check.animation}})} type="checkbox" value=""/>Animation</label>
              </div>
              </div>
          </div>
          </ReactBootstrap.Modal.Body>
          <ReactBootstrap.Modal.Footer>
            <ReactBootstrap.Button onClick={this.submit}>Submit</ReactBootstrap.Button>
            <ReactBootstrap.Button onClick={this.close}>Close</ReactBootstrap.Button>
          </ReactBootstrap.Modal.Footer>
        </ReactBootstrap.Modal>
      </div>
      );
  }
  submit = ()=>{
    const API_KEY = 'AIzaSyAH9lQc2MAgfCs4bkDOegYk0EK8XiVzEwE';
    let collection = [];
    for (var prop in this.state.check){
      if(this.state.check[prop]){
        YTSearch({key:API_KEY,term:prop}, (videos) =>{
          collection.push(videos);
        });
        setTimeout(()=>{
            this.props.addVideos(collection);
        },1000);
      }
      this.setState({showModal:false});
        browserHistory.push({pathname: '/display', state: {message:this.props.location.state.message}});
    }
  }
}
function mapStateToProps(state){
  return {videos:state.videoAdd}
}
export default connect(mapStateToProps,actions)(Home);
