import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import MealsList from '../components/meals-list.component';
import { removeMeal } from '../actions/meals.action';

class Meals extends Component {
  handleRemoveMeal = mealId => {
    this.props.removeMeal(mealId);
  };

  render() {
    return (
      <React.Fragment>
        <Button as={Link} to="/meals/add" primary>
          Dodaj potrawę
        </Button>
        <MealsList meals={this.props.meals} onMealRemove={this.handleRemoveMeal} />
      </React.Fragment>
    );
  }
}

Meals.propTypes = {
  meals: PropTypes.array.isRequired,
  removeMeal: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  meals: state.meals,
});

const mapDispatchToProps = dispatch => ({
  removeMeal: mealId => dispatch(removeMeal(mealId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Meals);
