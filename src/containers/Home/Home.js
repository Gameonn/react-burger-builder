import React, { Component } from 'react';
import { NavLink, Redirect, Route, Switch } from 'react-router-dom';
import Users from '../../components/Users/Users';
import Todos from '../Todos/Todos';
import './Home.css';
class Home extends Component {

    render() {
        return (
            <div className="Home">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to='/users'>Users</NavLink> </li>
                            <li><NavLink to="/todos">Todos</NavLink> </li>
                        </ul>
                    </nav>
                </header>

                <Switch>
                    <Route path="/users" component={Users}/>
                    <Route path="/todos" component={Todos}/>
                    <Redirect from='/all' to='/todos' />
                    <Route render={() => <h1>Not Found</h1>} />
                </Switch>


            </div>
        )
    }

}

export default Home;