import _ from 'lodash';
import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import { connect } from 'react-redux';

import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faCoffee from '@fortawesome/fontawesome-free-solid/faCoffee'

import SearchBar from './search_bar';
import VideoList from './video_list';

const API_KEY = 'API_KEY_HERE';

class VideoView extends Component {

    constructor(props) {
        super(props);

        this.state = {
            videos: []
        };
    }

    videoSearch(term) {
        YTSearch({ key: API_KEY, term: term }, (videos) => {
            this.setState({ 
                videos,
                selectedVideo: videos[0]
             });
        });
    }

    render() {

        console.log('props', this.props);
        console.log('state', this.state);

        const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

        return (
            <div>
                Video View
                <SearchBar onSearchTermChange={videoSearch}/>
                <VideoList 
                    onVideoSelect={selectedVideo => this.selectVideo(selectedVideo).bind(this)}
                    videos={this.state.videos} />
            </div>
        );
    }

    selectVideo(selectedVideo) {
        console.log('Selected Video', selectedVideo);
        //this.setState({selectedVideo})
    }
}

function mapStateToProps(state) {
    console.log('state', state);
    return { event: state.event };
}

export default connect(mapStateToProps, null)(VideoView);