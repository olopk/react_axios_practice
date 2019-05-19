import React, { Component } from 'react';
import axios from 'axios';
import Post from '../../../components/Post/Post';
import './Posts.css';

class Posts extends Component{
    
    state = {
        posts: [],
        clicked: null
    }
    
    clickedHandler(id) {
        this.setState({clicked: id})
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts').then(response => {
            const data = response.data.slice(0,4);
            const upData = data.map(post => {
                return{
                ...post,
                author: 'ololek'
                }
            })
            this.setState({posts: upData});
        }).catch(error => {console.log(error);});
    }
    

    render(){

        const posts = this.state.posts.map(post => (
            <Post key={post.id} title={post.title} author={post.author} clicked={() => this.clickedHandler(post.id)}/>
        ));

        return (
            <section className="Posts">
                {posts}
            </section>
        ); 
    }
}

export default Posts;
