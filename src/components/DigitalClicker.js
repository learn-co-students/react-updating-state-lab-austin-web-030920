import React, { Component } from "react";

class DigitalClicker extends Component {
  constructor() {
    super();

    this.state = {
      timesClicked: 0,
    };
  }

  handleClicker = () => {
    this.setState((previousState) => ({
      timesClicked: previousState.timesClicked + 1,
    }));
  };

  render() {
    // console.log(this.state);

    return (
      <div>
        <button onClick={this.handleClicker} name="clicker">
          {this.state.timesClicked}
        </button>
      </div>
    );
  }
}

export default DigitalClicker;
