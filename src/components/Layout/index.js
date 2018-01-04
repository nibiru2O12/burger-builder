import React, { Component } from 'react';

import Aux from '../../hoc/Aux';

class Layout extends Component {
    render() {
        return (
            <Aux>
                <div>Navigation ..</div>
                {this.props.children}
            </Aux>
        );
    }
}

export default Layout;