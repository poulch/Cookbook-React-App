import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Button, Container, Divider, Header, List, Label, Input } from 'semantic-ui-react';
import Dropdown from '../components/dropdown.component';

class MealForm extends Component {
  state = {
    selectedIngredients: [],
  };

  handleIngredientAdd = ingredientId => {
    this.setState({
      selectedIngredients: [...this.state.selectedIngredients, ingredientId],
    });
  };

  handleIngredientRemove = ingredientId => {
    const selectedIngredientsFiltered = this.state.selectedIngredients.filter(
      ingredient => ingredient !== ingredientId
    );

    this.setState({
      selectedIngredients: selectedIngredientsFiltered,
    });
  };

  render() {
    const selectedIngredients = this.props.ingredients.filter(ingredient =>
      this.state.selectedIngredients.includes(ingredient.id)
    );

    const dropdownIngredients = this.props.ingredients.filter(
      ingredient => !this.state.selectedIngredients.includes(ingredient.id)
    );

    return (
      <React.Fragment>
        <Button as={Link} to="/meals" primary>
          Powrót
        </Button>
        <Container text>
          <div className="form-group">
            <Label>Nazwa potrawy</Label>
            <Input className="fluid" />
          </div>

          <div className="form-group">
            <Label>Przepis</Label>
            <Input type="textarea" className="fluid" />
          </div>

          <Divider inverted />
          <List divided verticalAlign="middle">
            <Header as="h2">Składniki</Header>
            <Dropdown title="Wybierz składnik..." options={dropdownIngredients} onItemAdd={this.handleIngredientAdd} />
            {selectedIngredients.map(ingredient => (
              <List.Item key={ingredient.id}>
                <List.Content floated="left">{ingredient.name}</List.Content>
                <List.Content floated="right">
                  <Button onClick={() => this.handleIngredientRemove(ingredient.id)}>Usuń</Button>
                </List.Content>
              </List.Item>
            ))}
          </List>
        </Container>
      </React.Fragment>
    );
  }
}

MealForm.propTypes = {
  ingredients: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  ingredients: state.ingredients,
});

export default connect(mapStateToProps)(MealForm);
