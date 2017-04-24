import React from 'react';
import CommentList from './../../Components/Comments/CommentList';

class Button extends React.Component {
  state = {
    clicked: false,
    nrOfTimes: 0
  }
  onClick = () => {
    this.setState({ clicked: true, nrOfTimes: this.state.nrOfTimes + 1 });
  }
  render() {
    return <button onClick={this.onClick}>Clicked: {this.state.nrOfTimes}</button>;
  }
}

class Shell extends React.Component {
  render() {
    return (
      <div>
        <h1>Demo1</h1>
        <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
          Button
        </button>
<button className="mdl-button mdl-js-button mdl-button--fab mdl-button--colored">
  <i className="material-icons">add</i>
</button>
        <Button />
        <CommentList/>
      </div>
    );
  }
}

export default Shell;
