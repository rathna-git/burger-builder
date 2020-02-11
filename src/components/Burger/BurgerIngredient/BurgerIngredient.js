import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './BurgerIngredient.css';

class BurgerIngredient extends Component{
  render() {
    let ingredient = null;

    //installed and used npm package called prop-types to this project folder
    //it is used validate the prop types of the react properties can be used in class based and in functional components as well
    switch(this.props.type){
      case('bread-bottom'):
        ingredient = <div className='BreadBottom'></div>;
        break;
      case('bread-top'):
        ingredient = (
          <div className='BreadTop'>
            <div className='Seeds1'></div>;
            <div className='Seeds2'></div>;
          </div>;
        );
        break;
      case('meat'):
        ingredient = <div className = 'Meat'></div>;
       break;
      case('cheese'):
        ingredient = <div className = 'Cheese'></div>;
        break;
      case('salad'):
        ingredient = <div className = 'Salad'></div>;
        break;
      case('bacon'):
        ingredient = <div className = 'Bacon'></div>;
        break;
      default:
        ingredient = null;
    }
    return ingredient;
  }

  //prop type validation makes sure it's a string and is not empty
  BurgerIngredient.propTypes = {
    type: PropTypes.string.isRequired
  }
};

export default BurgerIngredient;
