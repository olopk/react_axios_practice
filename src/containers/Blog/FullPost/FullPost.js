import React, { Component } from 'react';

import './FullPost.css';
import axios from 'axios';

class FullPost extends Component {
    state = {
        LoadedPost: null
    }

    loadData = () => {
        if(this.props.match.params.id){
            if(!this.state.LoadedPost || this.props.match.params.id != this.state.LoadedPost.id)
            axios.get('https://jsonplaceholder.typicode.com/posts/' + this.props.match.params.id).then(response => {
            // setTimeout(()=> this.setState({LoadedPost: response.data}), 3000);
            console.log(this.props);
            this.setState({LoadedPost: response.data});
        }).catch(error => {
            console.log('error mordo o taki' + error)
        })
    }
    }

    componentDidMount(){
        this.loadData();
    }

    componentDidUpdate(){
        this.loadData();
    }

    render () {
        console.log(this.props);
        let post = <p style={{textAlign: 'center'}}>Please select a Post!</p>;
        
        if(this.state.LoadedPost){
            post = (
                <div className="FullPost">
                    <h1>{this.state.LoadedPost.title}</h1>
                    <p>{this.state.LoadedPost.body}</p>
                    <div className="Edit">
                        <button className="Delete">Delete</button>
                    </div>
                </div>
            )};

        return post;
    }
}

export default FullPost;