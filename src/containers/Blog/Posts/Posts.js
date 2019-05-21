import React, { Component } from 'react';
import axios from 'axios';
import Post from '../../../components/Post/Post';
import './Posts.css';
import { Link } from 'react-router-dom';
import {Route} from 'react-router-dom';
import FullPost from '../FullPost/FullPost';

class Posts extends Component{
    
    state = {
        posts: [],
        clicked: null
    }
    
    clickedHandler = (id) => {
        // this.setState({clicked: id})
        this.props.history.push({pathname: '/posts/' + id});
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

        const posts = this.state.posts.map(post => {
           return (
            // <Link key={post.id} to={'/posts' + post.id}>
            //     <Post
            //         title={post.title}
            //         author={post.author}
            //         clicked={() => this.clickedHandler(post.id)}
            //     />
            // </Link>    
            <Post
                title={post.title}
                key={post.id}
                author={post.author}
                clicked={() => this.clickedHandler(post.id)}
            />
        )});

        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <Route path={this.props.match.url + '/:id'} exact component={FullPost}/>
            </div>
        ); 
    }
}

export default Posts;
