import React, { Component } from 'react';
import Vote from './Vote'; // Capitalized the component name

class App extends Component {
  render() {
    return (
      <div className="App">
        <Vote /> {/* Capitalized the component name when rendering */}
      </div>
    );
  }
}

export default App;
