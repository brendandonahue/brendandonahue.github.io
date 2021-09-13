import React, { Component } from 'react';
import WaveSurfer from 'wavesurfer.js';

class Waveform extends Component {  
  state = {
    playing: false,
  };

  componentDidMount() {
    this.waveform = WaveSurfer.create({
      container: '#waveform',
      scrollParent: true,
      progressColor: '#1E3A8A',
      responsive: true,
      waveColor: '#3B82F6',
      cursorColor: '#DC2626'
    });

    this.waveform.load('https://www.mfiles.co.uk/mp3-downloads/gs-cd-track2.mp3');
  };
  
  handlePlay = () => {
    this.setState({ playing: !this.state.playing });
    this.waveform.playPause();
  };
  
  render() {
    return (    
      <div className="w-full">        
        <div id="waveform" />
        <button onClick={this.handlePlay} className="bg-blue-900 px-12 py-8 rounded-full text-white hover:bg-blue-500">
          {!this.state.playing ? 'Play' : 'Pause'}
        </button>
      </div>
    );
  }
};

export default Waveform;