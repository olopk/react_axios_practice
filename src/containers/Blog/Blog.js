import React, { Component } from 'react';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';
import axios from 'axios';

class Blog extends Component {
    state = {
        posts: [],
        clicked: null
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
            this.setState({posts: upData})
        })
    }
    
    clickedHandler(id) {
        this.setState({clicked: id})
    }


    render () {

        const posts = this.state.posts.map(post => (
            <Post key={post.id} title={post.title} author={post.author} clicked={() => this.clickedHandler(post.id)}/>
        ));

        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost check={this.state.clicked}/>
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;