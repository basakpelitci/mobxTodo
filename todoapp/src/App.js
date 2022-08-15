import React, { Component } from 'react';
import './App.css';
import { inject, observer } from 'mobx-react';


@inject('MainStore')
@observer

class App extends Component {
  render() {
    const user = this.props.MainStore.user;
    return (
      <div className="App">
        {user.firstName} {user.lastName}
        <button onClick={() => this.props.MainStore.changeName("Basak", "Pelitci")}>Değiştir</button>
      </div>
    );
  }
}

export default App;