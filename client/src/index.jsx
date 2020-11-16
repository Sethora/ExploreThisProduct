import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h2>This is my module</h2>
      </div>
    )
  }
}



ReactDOM.render(<App />, document.getElementById('app'));