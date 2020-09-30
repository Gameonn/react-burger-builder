import React, { Component } from 'react';
import '../../../components/Post/Post.css';

class Todo extends Component {

    state = {
        todoTitle: ''
    }

    componentDidMount() {
        this.parseSearchData();
    }

    componentDidUpdate() {
        this.parseSearchData();
    }

    parseSearchData() {
        console.log(this.props);
        const query = this.props.location.search.split('=');
        if (this.state.todoTitle !== query[1]) {
            this.setState({todoTitle: query[1]});
        }
    }

    render() {

        return (
            <div className="Post">
                <strong>{this.state.todoTitle}</strong>
                <p>You selected the Todo with ID: {this.props.match.params.id}</p>
            </div>
        )
    }
}

export default Todo;