import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

//always label global constants in capitals
const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
};

class BurgerBuilder extends Component {
  constructor(props){
    super(props);
    this.state = {
      ingredients: {
        meat: 0,
        cheese: 0,
        salad: 0,
        bacon: 0

      },
      totalPrice: 4
    }
  }

  addIngredientHandler = (type) => {
    const oldCount =  this.state.ingredients[type];
    const updatedCount  = oldCount + 1;
    const updatedIngredients  = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;
  }

  removeIngredientHandler = (type) => {
    const oldCount =  this.state.ingredients[type];
    const updatedCount  = oldCount - 1;
    const updatedIngredients  = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;
  }


  render(){
    return(
      <>
       <Burger ingredients={this.state.ingredients}/>
       <BuildControls />
      </>
    );
  }
}

export default BurgerBuilder;
