import React, { Component } from 'react';

import './FullPost.css';
import axios from 'axios';

class FullPost extends Component {
    state = {
        post: null
    }

    componentDidUpdate(){
        if(this.props.check){
            if(!this.state.post || this.props.check !== this.state.post.id)
            axios.get('https://jsonplaceholder.typicode.com/posts/' + this.props.check).then(response => {
            this.setState({post: response.data})
        }).catch(error => {
            console.log('error mordo o taki' + error)
        })
    }
        }

    render () {
        
        let post = <p style={{textAlign: 'center'}}>Please select a Post!</p>;
        
        if(this.state.post){
            post = (
                <div className="FullPost">
                    <h1>{this.state.post.title}</h1>
                    <p>{this.state.post.body}</p>
                    <div className="Edit">
                        <button className="Delete">Delete</button>
                    </div>
                </div>
            )};

        return post;
    }
}

export default FullPost;