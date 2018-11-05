import React, { Component } from 'react';
import './App.css';

import Comentario from './componentes/Comentario';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Comentario/>
      </div>
    );
  }
}

export default App;
