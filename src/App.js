import React, { Component } from 'react';
import logo from './logo.svg';
import { Navbar, NavbarBrand } from 'reactstrap'; // componente de bootstrap importado de reactstrap
import Menu from './components/MenuComponent'; // importa el componente Menu
import './App.css';
import { DISHES } from './shared/dishes';

class App extends Component { // componente App, contiene los componentes Navbar y Menu

  constructor(props) { // para almacenar el estado, se debe definir el estado en el constructor del componente de clase
    super(props);

    this.state = {
      dishes: DISHES
    };
  }

  render () {
    return (
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes} />
      </div>
    );
  }
}

export default App; // esta aplicacion es una exportacion de este archivo
