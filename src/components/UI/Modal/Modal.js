import React from 'react';
import './Modal.css';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Backdrop from "../Backdrop/Backdrop";

const modal = (props) => {

    console.log('[Modal.js] React memo');
    return (
        <Aux>
            <Backdrop show={props.show} clicked={props.modalClosed} />
            <div className="Modal" style={{
                        transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: props.show ? '1' : '0'
                        }}>
                {props.children}
            </div>
        </Aux>

    );
}

const areEqual = (prevProps, nextProps) => {
    return (prevProps.show === nextProps.show)
};

export default React.memo(modal, areEqual);