import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import uuid from 'uuid/v1';
import { Button, Container, Divider, Header, List, Label, Input, Message } from 'semantic-ui-react';
import Dropdown from '../components/dropdown.component';
import { addMeal, editMeal } from '../actions/meals.action';

class MealForm extends Component {
  state = {
    id: '',
    name: '',
    text: '',
    selectedIngredients: [],
    isError: false,
    edit: false,
  };

  componentDidMount() {
    const mealId = this.props.match.params.id;
    if (mealId) {
      const editedMeal = this.props.meals.find(meal => meal.id === mealId);
      this.setState({
        id: editedMeal.id,
        name: editedMeal.name,
        text: editedMeal.text,
        selectedIngredients: editedMeal.ingredients,
        edit: true,
      });
    }
  }

  handleInputChange = (e, name) => {
    this.setState({
      [name]: e.target.value,
    });
  };

  handleFormSubmit = () => {
    const { name, text, selectedIngredients: ingredients } = this.state;

    if (name.length && text.length && ingredients.length) {
      if (this.state.edit) {
        this.props.editMeal({
          id: this.state.id,
          name,
          text,
          date: new Date().getTime(),
          ingredients,
        });
      } else {
        this.props.addMeal({
          id: uuid(),
          name,
          text,
          date: new Date().getTime(),
          ingredients,
        });
      }

      this.props.history.push('/meals');
    } else {
      this.setState({
        isError: true,
      });
    }
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
    let selectedIngredients = [];
    let dropdownIngredients = [];

    if (this.state.selectedIngredients) {
      selectedIngredients = this.props.ingredients.filter(ingredient =>
        this.state.selectedIngredients.includes(ingredient.id)
      );

      dropdownIngredients = this.props.ingredients.filter(
        ingredient => !this.state.selectedIngredients.includes(ingredient.id)
      );
    }

    return (
      <React.Fragment>
        <Button className="main-btn" as={Link} to="/meals" primary>
          Powrót
        </Button>
        <Container text>
          {this.state.isError && (
            <Message error header="Nie udało się dodać nowej potrawy" content="Uzupełnij poprawnie poniszy formularz" />
          )}
          <div className="form-group">
            <Label>Nazwa potrawy</Label>
            <Input className="fluid" value={this.state.name} onChange={e => this.handleInputChange(e, 'name')} />
          </div>

          <div className="form-group">
            <Label>Przepis</Label>
            <Input
              type="textarea"
              className="fluid"
              value={this.state.text}
              onChange={e => this.handleInputChange(e, 'text')}
            />
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
          <Button secondary onClick={this.handleFormSubmit}>
            {this.state.edit ? 'Zapisz' : 'Dodaj potrawę'}
          </Button>
        </Container>
      </React.Fragment>
    );
  }
}

MealForm.propTypes = {
  ingredients: PropTypes.array.isRequired,
  meals: PropTypes.array.isRequired,
  addMeal: PropTypes.func.isRequired,
  editMeal: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  ingredients: state.ingredients,
  meals: state.meals,
});

const mapDispatchToProps = dispatch => ({
  addMeal: meal => dispatch(addMeal(meal)),
  editMeal: meal => dispatch(editMeal(meal)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MealForm));
