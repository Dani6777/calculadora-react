// Importa las bibliotecas y funciones necesarias
import React, { Component } from 'react';
import operaciones from '../logic/operaciones';
import Display from './Display';
import PanelDeBotones from './PanelDeBotones';

// Define el componente App
class App extends Component {
  state = {
    total: null,
    siguiente: null,
    operador: null
  };

  // Corrige el nombre de la función a handleClick
  handleClick = nombreDeBoton => this.setState(operaciones(this.state, nombreDeBoton));

  render() {
    return (
      <div>
        <Display value={this.state.siguiente || this.state.total || '0'} />
        {/* Corrige el nombre de la prop a handleClick */}
        <PanelDeBotones clickHandle={this.handleClick} />
      </div>
    );
  }
}

export default App;
