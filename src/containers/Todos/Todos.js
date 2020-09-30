import React, { Component } from 'react';
import Todo from './Todo/Todo';
import axios from '../../axios';
import { Link, Route } from 'react-router-dom';
import '../Blog/Posts/Posts.css';

class Todos extends Component {

    state = {
        todos: [],
        error: false
    }

    componentDidMount() {
        axios.get('/todos')
            .then(response => {
                const todos = response.data.splice(0, 4);
                console.log(todos, 'todos');
                const updatedTodos = todos.map((todo, index) => {
                    let assignedTo = Math.random().toString(36).substring(7);
                    return { ...todo, assignedTo: assignedTo }
                });
                console.log(updatedTodos,'updatedTodos');
                this.setState({todos: updatedTodos});
            })
            .catch((error) => {
                this.setState({error: true});
            });
    }

    todoSelectedHandler = (id) => {
        console.log(this.props, 'Todos');
        this.props.history.push('/todos/' + id);

    }

    render() {
        let todos = <h3> Todos Loading... </h3>
        if(!this.state.error) {
            todos = this.state.todos.map((todo, index) => {
                      return (
                            <Link key={index} to={{
                                    pathname: this.props.match.url + '/'+ todo.id,
                                    search: '?title='+todo.title}}>
                                <div className="Post"> {todo.title} </div>
                            </Link>
                        )
                });
        }
        return (
            <div className="Posts">
                {todos}
                <Route path={this.props.match.url + '/:id'} component={Todo} />
            </div>
        )
    }
}

export default Todos;