import React,{Component} from 'react';
import {connect} from 'react-redux';

class Dashboard extends Component{
  render(){
    if(!this.props.videos){
      return (
        <div>
        <h1 style={{textAlign:'center'}}>Dashboard</h1>
        <div className="row">
        <div className="col-md-4">
        <h3 style={{textAlign:'center'}} className="likes">No Likes</h3>
        </div>
        <div className="col-md-4">
        <h3 style={{textAlign:'center'}} className="comments">No Comments</h3>
        </div>
        <div className="col-md-4">
        <h3 style={{textAlign:'center'}} className="savedUrl">No Saved Url</h3>
        </div>
        </div>
        </div>
      );
    }
    const arr = this.props.videos.map((res,i)=>{
          return this.props.videos[i].map((res,i)=>{
            return [{
            likes : res.id.likes,
            comments : res.id.commentView,
            savedUrl : res.id.savedUrl,
            videoTitle: res.snippet.title
          }];
          });
      });
    return (
      <div>
      <h1 style={{textAlign:'center',marginTop:'4%'}}>Dashboard</h1>
      <div className="row" style={{marginTop:'10%'}}>
      <div className="col-md-3">
      <h1>Likes:</h1>
      <h3 style={{textAlign:'center'}} className="likes">{this.likes(arr)}</h3>
      </div>
      <div className="col-md-3">
      <h1>Comments:</h1>
      <h3 style={{textAlign:'center'}} className="comments">{this.comments(arr)}</h3>
      </div>
      <div className="col-md-3">
      <h1>Video:</h1>
      <h3 style={{textAlign:'center'}} className="savedUrl">{this.savedUrl(arr)}</h3>
      </div>
      <div className="col-md-3">
      <h1>Video Title</h1>
      <h3 style={{textAlign:'center',marginTop:'40px'}} className="videoName">{this.videoName(arr)}</h3>
      </div>
      </div>
      </div>
    );
  }
  videoName = (arr)=>{
    return arr.map((res)=>{
      return res.map((value,i)=>{
        return(
          <li style={{marginTop:'20px'}}>{value[0].videoTitle}</li>
      );
      });
    });
  }
  likes = (arr)=>{
    const likes = arr.map((res)=>{
      return res.map((value,i)=>{
        if(value[0].likes == "0")
        return;
        else
        return <h3>{value[0].likes}</h3>;
      });
    });
    return likes;
  }
  comments = (arr)=>{
    return arr.map((res,i)=>{
      return res.map((cm,i)=>{
          return res[i][0].comments.map((value)=>{
            return <h3>{value}</h3>;
          });
      });
    });
  }
  savedUrl = (arr)=>{
        console.log(this.props.url);
        return this.props.url.map(value=>{
          return(<div className="embed-responsive embed-responsive-16by9">
            <iframe id="videoFrame" className = "embed-responsive-item" src={`https://www.youtube.com/embed/${value}`}></iframe>
          </div>);
        });

      }
}

function mapStateToProps(state){
  return {videos:state.videoAdd,url:state.addSavedVideo}
}
export default connect(mapStateToProps)(Dashboard);
