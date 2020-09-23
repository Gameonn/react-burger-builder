import React, {Component} from 'react';
import Aux from '../../hoc/Auxiliary';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer: true
    }
    sideDrawerClosedHandler = (props) => {
        this.setState({showSideDrawer: false});
    }

    sideDrawerToggleHandler = (props) => {
        this.setState((prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer}
        });
    }

    render() {
        return (
            <Aux>
                <div>
                    <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
                    <SideDrawer closed={this.sideDrawerClosedHandler} open={this.state.showSideDrawer} />
                </div>
                <main>
                    {this.props.children}
                </main>
            </Aux>
        );
    }
}

export default Layout;