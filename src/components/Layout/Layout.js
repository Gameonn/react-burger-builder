import React from 'react';
import Aux from '../../hoc/Auxiliary';
import Toolbar from '../Navigation/Toolbar/Toolbar';

const layout = (props) => {
    return (
        <Aux>
            <div>
                <Toolbar />
                Toolbar, Sidebar, Backdrop
            </div>
            <main>
                {props.children}
            </main>
        </Aux>
    );
}

export default layout;