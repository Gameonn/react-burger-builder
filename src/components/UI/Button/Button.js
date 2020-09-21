import React from 'react';
import './Button.css';

const button = (props) => (
const customStyle = "Button "+ props.btnType;

    <button className={customStyle} onClick={props.clicked}>{props.children}</button>
);

export default button