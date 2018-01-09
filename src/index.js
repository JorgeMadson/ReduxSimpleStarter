import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyAts4pWYG1bclhUogeWp5X1VM1hAL-cAqA';


// Criando um novo componente, esse componente deve produzir algum HTML
class App extends Component {
  constructor(props){
  super(props);

  this.state = {
    videos: [],
    selectedVideo: null
  };

  this.videoSearch('utopia');
}

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
        this.setState({
          videos: videos,
          selectedVideo: videos[0]
        });
      });
  }

  render() {
    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);

    return (
      <div>
        <img className="center-block" src="http://datapunk.net/opus23blog/wp-content/uploads/2016/10/utopia_logo.png" />
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
          videos={this.state.videos} />
      </div>
    );
  }
}

//Pegue o html gerado por esse componente e ponha na página (no DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
