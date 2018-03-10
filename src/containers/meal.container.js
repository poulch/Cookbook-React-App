import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button, Container, List, Header, Divider } from 'semantic-ui-react';

const Meal = ({ meals, ingredients, match }) => {
  const mealId = match.params.id;
  const selectedMeal = meals.find(meal => meal.id === mealId);
  const selectedIngredients = ingredients.filter(ingredient => selectedMeal.ingredients.includes(ingredient.id));
  console.log(selectedIngredients);

  return (
    <React.Fragment>
      <Button className="main-btn" as={Link} to="/meals" primary>
        Powrót
      </Button>
      <Container text>
        <Header as="h1">{selectedMeal.name}</Header>
        <div>{selectedMeal.text}</div>
        <Divider inverted />
        <List divided verticalAlign="middle">
          <Header as="h2">Składniki</Header>
          {!selectedIngredients.length
            ? 'Brak składników'
            : selectedIngredients.map(ingredient => (
                <List.Item key={ingredient.id}>
                  <List.Content>{ingredient.name}</List.Content>
                </List.Item>
              ))}
        </List>
      </Container>
    </React.Fragment>
  );
};

Meal.propTypes = {
  match: PropTypes.object.isRequired,
  meals: PropTypes.array.isRequired,
  ingredients: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  meals: state.meals,
  ingredients: state.ingredients,
});

export default connect(mapStateToProps)(Meal);
