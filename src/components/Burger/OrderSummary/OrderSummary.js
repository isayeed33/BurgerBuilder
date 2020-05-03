import React, { Component } from 'react'
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Button from '../../UI/Button/Button';

export default class OrderSummary extends Component {

    componentDidUpdate(){
        console.log('[OrderSummary.js] DidUpdate');
    }


    render() {
//Object.keys(props.ingredients) - //[salad, bacon, cheese, meat]
//Object.keys(props.ingredients).map(currentValue => ({props.ingredients[i]}It will return the value of the each element's currentValue}))
        const ingredientSummary = Object.keys(this.props.ingredients).map(igKey =>  {
            return (<li key={igKey}>
                    <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {this.props.ingredients[igKey]}
                </li>);
        });

        return (
            <Aux>
                <h3>Your Order</h3>
                <p>A delicious burger with the following ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
                <p>Continue to CheckOut</p>
                <Button btnType="Danger" clicked={this.props.purchaseCancelled}>Cancel</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinued}>Submit</Button>
            </Aux>
        )
    }
}