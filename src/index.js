import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ContentEditable from 'react-contenteditable';
import { Table, Button } from 'semantic-ui-react';
import './index.css';

class App extends Component {
  initialState = {
    store: [
      { id: 1, item: 'silver', price: 15.41 },
      { id: 2, item: 'gold', price: 1284.3 },
      { id: 3, item: 'platinum', price: 834.9 },
    ],
    row: {
      item: '',
      price: '',
    },
  }

  state = this.initialState

  

  render() {
    const {
      store,
      row: { item, price },
    } = this.state

    return (
      <div className="App">
        <h1>React Content-Editable</h1>

    {/* Table here */}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
