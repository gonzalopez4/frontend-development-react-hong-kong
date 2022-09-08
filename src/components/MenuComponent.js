import React, { Component } from  'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap'; // componentes de reactstrap

class Menu extends Component { // estructura de un componente en React
    
    constructor(props) { // todo componente de React debe tener su constructor
        super(props);

        this.state = {
            selectedDish: null
        }
    }

    onDishSelect(dish) { // establecera el plato elegido al clickear
        this.setState( { selectedDish: dish });
    }

    renderDish(dish) { // se construye la card del plato seleccionado cuando se renderiza en pantalla
        if (dish != null) {
            return (
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        }
        else {
            return (
                <div></div>
            );
        }
    }

    render() { // todo componente de React debe implementar render, para ser mostrado en la UI -- (JSX)
               // tag li dice que cada uno de los elementos actuara como un elemento de la lista

        // construye una lista de platos de comida, estructura del componente menu
        const menu = this.props.dishes.map((dish) => {
            return (
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card onClick={() => this.onDishSelect(dish)}>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });

        return ( 
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                <div className="row">
                    {this.renderDish(this.state.selectedDish)}
                </div>
            </div>
        );
    }
}

export default Menu; // exportar el componente