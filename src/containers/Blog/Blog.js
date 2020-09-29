import React, { Component } from 'react';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
import { NavLink, Route, Switch } from 'react-router-dom';
import './Blog.css';

class Blog extends Component {

    render () {

        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to='/posts' activeClassName="my-active"
                                activeStyle={{color: '#ba4848', textDecoration: 'underline'}}>Posts</NavLink> </li>
                            <li><NavLink to={{
                                pathname: '/new-post', hash:'#submit', search:'?quick-submit=true'
                            }}>New Post</NavLink> </li>
                        </ul>
                    </nav>
                </header>
                {/* <Route path="/" exact render={()=> <h1> Home </h1>}/>
                <Route path="/" render={()=> <h1> Home 2 </h1>}/>*/}
                <Switch>
                    <Route path="/new-post" component={NewPost}/>
                    <Route path="/" component={Posts}/>
                </Switch>

            </div>
        );
    }
}

export default Blog;