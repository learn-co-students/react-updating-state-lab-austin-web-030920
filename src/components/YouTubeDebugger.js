import React, { Component } from "react";

class YouTubeDebugger extends Component {
  constructor() {
    super();

    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: "1080p",
        },
      },
    };
  }

  handleChangeBitrate = () => {
    this.setState((prev) => ({ settings: { ...prev.settings, bitrate: 12 } }));
  };
  
  handleChangeRes = () => {
    this.setState((prev) => ({ settings: { ...prev.settings, video: {resolution: '720p'}} }));
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <button onClick={this.handleChangeBitrate} className="bitrate">
          Change Bitrate
        </button>
        <button onClick={this.handleChangeRes} className="resolution">Change Res</button>
      </div>
    );
  }
}

export default YouTubeDebugger;
