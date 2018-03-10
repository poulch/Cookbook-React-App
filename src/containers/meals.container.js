import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import MealsList from '../components/meals-list.component';

class Meals extends Component {
  test = 12;
  render() {
    return (
      <React.Fragment>
        <Button as={Link} to="/meals/form" primary>
          Dodaj potrawę
        </Button>
        <MealsList meals={this.props.meals} />
      </React.Fragment>
    );
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
