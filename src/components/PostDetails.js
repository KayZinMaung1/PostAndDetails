import React, { Component } from 'react'
import axios from 'axios'

class PostDetails extends Component {
  state = {
    post: null
  }
  componentDidMount(){
    let id = this.props.match.params.post_id;
    axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
      .then(res => {
        this.setState({
          post: res.data
        });
        //console.log(res.data);
      });
  }
  render() {

    const post = this.state.post ? (
     <div className="post content">
           <span className='card_title'>{this.state.post.title} </span>    
            <p>{this.state.post.body}</p>
       </div>
    ) : (
      <div className="center">Loading the details of post...</div>
    );


    return (
      <div>
        <div className="container" id='detail-container'>
          {post}
        </div>
      </div>
    )
  }

  
}

export default PostDetails
