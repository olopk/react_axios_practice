import React, { Component } from 'react';
import './Blog.css';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom'; 
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';



class Blog extends Component {
    render () {
        return (
            <div>
                <header>
                    <nav>
                        <ul className="List">
                            <li><NavLink to="/posts/">Home</NavLink></li>
                            <li><NavLink to={{
                                pathname: '/new-post',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
               <Switch>
                 <Route path="/new-post" exact component={NewPost}/>   
                 <Route path="/posts" component={Posts}/>
                 <Redirect from="/" to="/posts" />
               </Switch>
            </div>
        );
    }
}

export default Blog;