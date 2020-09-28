import React, { Component } from 'react';
import Post from '../../../components/Post/Post';
import axios from '../../../axios';
import './Posts.css';
class Posts extends Component {

    state = {
        posts: [],
        selectedPostId: null,
        error: false
    }



    componentDidMount() {
        console.log(this.props);

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
                    console.log(error);
                });
    }

    postSelectedHandler = (id) => {
        this.setState({selectedPostId: id});
    }

    render() {

        let posts = <div className="Error"> Something went wrong!!</div>;

        if(!this.state.error) {
            posts = this.state.posts.map((post,index) => {
                return (
                    <Post key={index} title={post.title} body={post.body} author={post.author}
                        clicked={() => this.postSelectedHandler(post.id)}/>
                );
            });
        }

        return (
            <section className="Posts">
                {posts}
            </section>
        );
    }
}

export default Posts;