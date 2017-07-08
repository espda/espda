import React, { Component, cloneElement } from 'react';

export default class App extends Component {
  render() {
    return (
      <div>
        {cloneElement(this.props.children, this.props)}
      </div>
    );
  }
}
