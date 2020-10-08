import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddPerson from '../../components/AddPerson/AddPerson';
import * as actionTypes from '../../store/actions';
import Person from '../../components/Person/Person';

class Persons extends Component {

    state = {
        persons: []
    }

    render() {
        return (
            <div>
                <AddPerson personAdded={this.props.onAddedPerson} />
                {this.props.prs.map(person => {
                    return (<Person key={person.id} name={person.name} age={person.age}
                        clicked={() => this.props.onRemovedPerson(person.id)} />)
                })}
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        prs: state.persons
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAddedPerson: () => dispatch({type: actionTypes.ADD_PERSON}),
        onRemovedPerson: (id) => dispatch({type: actionTypes.REMOVE_PERSON, pid: id}),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Persons);