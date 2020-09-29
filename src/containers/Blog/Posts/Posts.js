import React, { Component } from 'react';
import Post from '../../../components/Post/Post';
import FullPost from '../FullPost/FullPost';
import axios from '../../../axios';
import './Posts.css';
import { Link, Route } from 'react-router-dom';
class Posts extends Component {

    state = {
        posts: [],
        error: false
    }

    componentDidMount() {
        // console.log(this.props);

        axios.get('/posts')
                .then(response => {
                    const posts = response.data.splice(0,4);
                    const updatedPosts = posts.map((post) => {
                        let randomAuthor = Math.random().toString(36).substring(7);
                        return {
                            ...post,
                            author: randomAuthor
                        }
                    })
                    this.setState({posts: updatedPosts});
                    // console.log(response.data);
                })
                .catch((error) => {
                    this.setState({error: true});
                    // console.log(error);
                });
    }

    postSelectedHandler = (id) => {
        console.log(this.props, 'Posts');
        // this.props.history.push({pathname: '/posts/'+id});
        this.props.history.push('/posts/' + id);
    }

    render() {

        let posts = <div className="Error"> Something went wrong!!</div>;

        if(!this.state.error) {
            posts = this.state.posts.map((post,index) => {
                return (
                    // <Link to={'/posts/'+ post.id} key={index}>
                        <Post key={index} title={post.title} body={post.body} author={post.author}
                                clicked={() => this.postSelectedHandler(post.id)}/>
                    // </Link>
                );
            });
        }

        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <Route path={this.props.match.url + "/:id"} component={FullPost} exact/>
            </div>
        );
    }
}

export default Posts;