import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MealsList from '../components/meals-list.component';

class Meals extends Component {
  test = 12;
  render() {
    return <MealsList meals={this.props.meals} />;
  }
}

Meals.propTypes = {
  meals: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  meals: state.meals,
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Meals);
