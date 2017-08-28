import React,{Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';
import Header from './header.js';
class Display extends Component{
  constructor(props){
    super(props);
    this.state = {commentView:false,comment:'',commentList: [],oldId:'',arr:[]}
  }
  Like = (id)=>{
    this.props.videos.forEach((res,i)=>{
      this.props.videos[i].forEach((res,i)=>{
        if(id == res.id.videoId){
           var a = parseInt(res.id.likes)+1;
            res.id.likes = String(a) + ' for ' + res.snippet.title.slice(0,6) + '...';
            this.props.addVideos(this.props.videos);
        }
    });
  });
  this.forceUpdate();
  }
  Save = (url,id)=>{
    this.props.videos.forEach((res,i)=>{
      this.props.videos[i].forEach((res,i)=>{
        if(url == res.id.videoId){
            res.id.savedUrl = url;
            this.props.addSavedVideo(res.id.savedUrl);
          }
    });
  });
  this.props.addVideos(this.props.videos);
  alert('Video Saved Successfully');
  }
  commentListener = (id)=>{
    if(this.state.oldId!=id){
      this.setState({oldId:id,commentList:[this.state.comment]},()=>{
        this.props.videos.forEach((res,i)=>{
          this.props.videos[i].forEach((res,i)=>{
            if(id == res.id.videoId){
              res.id.commentView = [...this.state.commentList];
            }
        });
        this.props.addVideos(this.props.videos);
         this.forceUpdate();
      });
      });

      this.setState({comment:''});
    }
    else{
    this.setState({commentList:[...this.state.commentList,this.state.comment]},()=>{
      this.props.videos.forEach((res,i)=>{
        this.props.videos[i].forEach((res,i)=>{
          if(id == res.id.videoId){
            res.id.commentView = [...this.state.commentList];
          }
      });
      this.props.addVideos(this.props.videos);
     this.forceUpdate();
    });
    });

    this.setState({comment:''});
}
  }
  displayComments = (commentArray)=>{
    if(!commentArray) return;
    return commentArray.map((res,key)=>{
      return <p style={{marginTop:'21px',backgroundColor:'#e3e3e3',borderRadius:'2px',textAlign:'center',fontSize:'24px'}}key={key}>{res}</p>
    });
  }
  render(){
  if(!this.props.videos.length){
    return
    <span style={{display:'block',margin:'10% auto'}}>
      <i className="fa fa-spinner fa-spin fa-5x" aria-hidden="true"></i>
    <h1>Loading</h1>
    </span>
  }
  <Header/>
    this.props.videos.forEach((res,i)=>{
      this.props.videos[i].forEach((res,i)=>{
        if(!res.id.likes){
            res.id.likes = 0;
        }
        if(!res.id.commentView){
            res.id.commentView = [];
        }
        if(!res.id.savedUrl){
            res.id.savedUrl = '';
        }
        if(!res.id.email){
            res.id.email = '';
        }
    });
  });
  const url = this.props.videos.map((res,i)=>{
    return this.props.videos[i].map((res,i)=>{
    return (
       <div className = "video-detail col-md-12" style={{marginTop:'15px'}}>
         <div className="embed-responsive embed-responsive-16by9">
           <iframe id="videoFrame" className = "embed-responsive-item" src={`https://www.youtube.com/embed/${res.id.videoId}`}></iframe>
         </div>
         <div className = "details">
         <h3 style={{marginTop:'5px',textAlign:'center'}}>Title:</h3>
           <p style={{marginTop:'2px',textAlign:'center'}}>{res.snippet.title}</p>
           <h3 style={{marginTop:'5px',textAlign:'center'}}>Description:</h3>
           <p style={{marginTop:'2px',textAlign:'center'}}>{res.snippet.description}</p>
           <div className="row" style={{marginLeft:'31px'}}>
           <div className="col-md-4">
           <button id="like" className="btn btn-info btn-lg" onClick={()=>this.Like(res.id.videoId)}><i className="fa fa-heart-o fa-2x" aria-hidden="true"></i>Like &nbsp;{res.id.likes}</button>
           </div>
           <div className="col-md-4">
           <button type="button" className="btn btn-info btn-lg" onClick={()=>this.setState({commentView:!this.state.commentView})}><i className="fa fa-comment-o fa-2x" aria-hidden="true"></i>&nbsp;Comment</button>
           {this.state.commentView ? <div><input type="text" className="form-control" value={this.state.comment} onChange={(e)=>this.setState({comment:e.target.value})} style={{marginTop:'6%'}} placeholder="add a comment . . ."/>
           <button type="button" className="btn btn-default" onClick={()=>this.commentListener(res.id.videoId)}><i className="fa fa-envelope-open-o" aria-hidden="true"></i>&nbsp;Submit</button></div> : ''}
           </div>
           <div className="col-md-4">
           <button className="btn btn-info btn-lg" onClick={()=>this.Save(res.id.videoId)}><i className="fa fa-floppy-o fa-2x" aria-hidden="true"></i> &nbsp;Save</button>
           </div>
           </div>
           <div className="row">
           <div className="col-md-12">
           {this.displayComments(res.id.commentView)}
           </div>
           </div>
           </div>
         </div>

    	);
  });
  });

return(<div>
  <Header name={this.props.location.state.message} videos={this.props.videos}/>
  {url}
  </div>)
}
}
function mapStateToProps(state){
  return {videos:state.videoAdd}
}
export default connect(mapStateToProps,actions)(Display);
