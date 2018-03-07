import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import uuid from 'uuid/v1';
import InputBar from '../components/input-bar.component';
import IngredientsList from '../components/ingredients-list.component';
import { addIngredient, removeIngredint, updateIgredient, editIngredient } from '../actions/ingredients.action';

class Ingredients extends Component {
  handleAddIngredient = ingredient => {
    this.props.addIngredient({
      id: uuid(),
      name: ingredient,
      date: new Date().getTime(),
      edited: false,
    });
  };

  handleRemoveIngredient = ingredientId => {
    this.props.removeIngredient(ingredientId);
  };

  handleEditIngredient = ingredientId => {
    this.props.editIngredient(ingredientId);
  };

  handleUpdateIngredient = ingredient => {
    this.props.updateIngredient(ingredient);
  };

  render() {
    return (
      <React.Fragment>
        <InputBar onFormSubmit={this.handleAddIngredient} icon="add circle" placeholder="Add ingredients" />
        <IngredientsList
          ingredients={this.props.ingredients}
          onIngredientRemove={this.handleRemoveIngredient}
          onIngredientEdit={this.handleEditIngredient}
          onIngredientUpdate={this.handleUpdateIngredient}
        />
      </React.Fragment>
    );
  }
}

Ingredients.propTypes = {
  addIngredient: PropTypes.func.isRequired,
  removeIngredient: PropTypes.func.isRequired,
  editIngredient: PropTypes.func.isRequired,
  updateIngredient: PropTypes.func.isRequired,
  ingredients: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  ingredients: state.ingredients,
});

const mapDispatchToProps = dispatch => ({
  addIngredient: ingredient => dispatch(addIngredient(ingredient)),
  removeIngredient: ingredientId => dispatch(removeIngredint(ingredientId)),
  editIngredient: ingredientId => dispatch(editIngredient(ingredientId)),
  updateIngredient: ingredient => dispatch(updateIgredient(ingredient)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Ingredients);
