import React from 'react';
import './Button.css';

const button = (props) => {
    const assignedClasses = ['Button'];
    assignedClasses.push(props.btnType);

    return (<button className={assignedClasses.join(' ')} onClick={props.clicked}>{props.children}</button>);
};

export default button