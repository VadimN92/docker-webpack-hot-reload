import React, { Component } from 'react';

export default class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (  
      <div className='app'>
        Hello, {this.props.name}!
      </div>
    );
  }
}