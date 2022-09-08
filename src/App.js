import logo from './logo.svg';
import { Navbar, NavbarBrand } from 'reactstrap'; // componente de bootstrap importado de reactstrap
import Menu from './components/MenuComponent'; // importa el componente Menu
import './App.css';

function App() { // componente App, contiene los componentes Navbar y Menu
  return (
    <div>
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
        </div>
      </Navbar>
      <Menu />
    </div>
  );
}

export default App; // esta aplicacion es una exportacion de este archivo
