import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

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
      totalPrice: 4,
      purchasable: false
    }
  }

  updatePurchaseState = (ingredients)=>{

    const sum = Object.keys(ingredients)
                      .map(igkey => {
                        return ingredients[igkey];
                      })
                      .reduce((sum, el) =>{
                        return sum + el;
                      }, 0);
    this.setState({purchasable: sum > 0});
  }
  addIngredientHandler = (type) => {
    const oldCount =  this.state.ingredients[type];
    const updatedCount  = oldCount + 1;
    const updatedIngredients  = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;
    //updating total price of added ingredients
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
    this.updatePurchaseState(updatedIngredients);
  }

  removeIngredientHandler = (type) => {
    const oldCount =  this.state.ingredients[type];
    if(oldCount <= 0){
      return;
    }
    const updatedCount  = oldCount - 1;
    const updatedIngredients  = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;
    //updating total price of removed ingredients
    const priceDeduction = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceDeduction;
    this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
    this.updatePurchaseState(updatedIngredients);
  }


  render(){

    //sets ingredients key values to true(if less than 0) or false to disable add and remove buttons
    //in the burgerControl component {salad: true, meat: false,....} etc
    const disabledInfo = {
      ...this.state.ingredients
    };
    for(let key in disabledInfo){
      disabledInfo[key] = disabledInfo[key] <= 0
    }
    return(
      <>
      <Modal>
        <OrderSummary ingredients={this.state.ingredients}/>
      </Modal>
       <Burger ingredients={this.state.ingredients}/>
       <BuildControls
          ingredientAdded ={this.addIngredientHandler}
          ingredientRemoved = {this.removeIngredientHandler}
          disabled = {disabledInfo}
          purchasable = {this.state.purchasable}
          price= {this.state.totalPrice}
          />
      </>
    );
  }
}

export default BurgerBuilder;
