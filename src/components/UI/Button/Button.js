import React from 'react';
import './Button.css';

const button = (props) => {
    const assignedClasses = ['Button'];
    assignedClasses.push(props.btnType);

    return (<button className={assignedClasses.join(' ')} disabled={props.disabled} onClick={props.clicked}>{props.children}</button>);
};

export default button