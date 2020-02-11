import React from 'react';
import './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
  //transforms the object into an array and then maps the ingredients with the number of each item
  let transformedIngredients = Object.keys(props.ingredients)
                                       .map(igKey => {
                                         return[...Array(props.ingredients[igKey])].map((_, i) => {
                                           return <BurgerIngredient key={igKey + i} type={igKey} />;
                                         });
                                       })
                                       .reduce((arr, el) => {
                                         return arr.concat(el)
                                       }, []);
  if(transformedIngredients.length === 0){
    transformedIngredients = <p>Please start adding Ingredients!</p>
  }
  return(
    <div className='Burger'>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
