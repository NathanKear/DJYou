import React, { Component } from 'react';
import { connect } from 'react-redux';

class VideoAdd extends Component {
    render() {
        return (
            <div>
                Video Add
            </div>
        );
    }
}

export default connect(null, null)(VideoAdd);