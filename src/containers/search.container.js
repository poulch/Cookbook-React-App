import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import InputBar from '../components/input-bar.component';
import MealList from '../components/meals-list.component';

class Search extends Component {
  state = {
    combineMealsAndIngredients: [],
    searchResults: [],
  };

  componentDidMount() {
    const combineMealsAndIngredients = this.props.meals.map(meal => {
      const fullIngredients = meal.ingredients.map(ingredient =>
        this.props.ingredients.find(ingret => ingret.id === ingredient)
      );
      meal.fullIngredients = fullIngredients;
      return meal;
    });

    this.setState({
      combineMealsAndIngredients,
    });
  }

  handleFormSubmit = term => {
    const lowerTerm = term.toLowerCase();

    const searchResults = this.state.combineMealsAndIngredients.filter(meal => {
      let status = false;
      if (meal.name.toLowerCase().indexOf(lowerTerm) !== -1 || meal.text.toLowerCase().indexOf(lowerTerm) !== -1) {
        status = true;
      }

      meal.fullIngredients.forEach(ingredient => {
        if (ingredient.name.toLowerCase().indexOf(lowerTerm) !== -1) {
          status = true;
        }
      });

      if (status) return true;
      return false;
    });

    this.setState({
      searchResults,
    });
  };

  render() {
    return (
      <React.Fragment>
        <InputBar placeholder="Wyszukaj..." inputClass="fluid" icon="search" onFormSubmit={this.handleFormSubmit} />
        <MealList meals={this.state.searchResults} />
      </React.Fragment>
    );
  }
}

Search.propTypes = {
  meals: PropTypes.array.isRequired,
  ingredients: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  meals: state.meals,
  ingredients: state.ingredients,
});

export default connect(mapStateToProps)(Search);
