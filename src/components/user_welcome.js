import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserWelcome extends Component {
    render() {
        return (
            <div>
                User Welcome
            </div>
        );
    }
}

export default connect(null, null)(UserWelcome);