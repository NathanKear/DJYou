import React, { Component } from 'react';
import { connect } from 'react-redux';

class VideoView extends Component {
    render() {
        return (
            <div>
                Video View
            </div>
        );
    }
}

export default connect(null, null)(VideoView);