import React, { Component } from 'react';
import Engagement from './Engagement';

class App extends Component {
  state = {
  }

  render() {

    return (
      <div className='App'>
        <div className='ui text container'>
          <Engagement />
        </div>
      </div>
    );
  }
}

export default App;
