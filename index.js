import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p>
          Abre ai mané :), continuo editando o programa e vc vai vendo ai
        </p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
