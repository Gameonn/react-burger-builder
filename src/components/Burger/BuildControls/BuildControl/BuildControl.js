import React from 'react';
import './BuildControl.css';

const buildControl = (props) => (
    <div className="BuildControl">
        <div className="Label">{props.label}</div>
        <button className="Less" disabled={props.disabled} onClick={props.removed}> - </button>
        <button className="More" onClick={props.added}> + </button>
    </div>

);

export default buildControl;