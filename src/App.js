import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      numero:0
    }
  }

  render() {

    return (
      <div>
        <span className="value">{this.state.numero}</span>
        <button id="inc" onClick={this.contador.bind(this)}>Incrementa</button>
      </div>
    );
  }

  contador(){
    let num = this.state.numero;
    let suma = num + 1;
    this.setState({
      numero: suma
    });
  }
}

export default App;
