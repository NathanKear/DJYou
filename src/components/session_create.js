import React, { Component } from 'react';
import { connect } from 'react-redux';

class SessionCreate extends Component {
    render() {
        return (
            <div>
                Session Create
            </div>
        );
    }
}

export default connect(null, null)(SessionCreate);