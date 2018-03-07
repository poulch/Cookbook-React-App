import React from 'react';
import propTypes from 'prop-types';
import { Table, Button, Icon } from 'semantic-ui-react';
import InputBar from '../components/input-bar.component';
import { formatDate } from '../utils';

const IngredientsList = ({ ingredients, onIngredientRemove, onIngredientEdit, onIngredientUpdate }) => (
  <Table singleLine>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>ID</Table.HeaderCell>
        <Table.HeaderCell>Name</Table.HeaderCell>
        <Table.HeaderCell>Added Date</Table.HeaderCell>
        <Table.HeaderCell>Actions</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      {ingredients.map(ingredient => {
        const date = new Date(ingredient.date);
        return ingredient.edited ? (
          <Table.Row key={ingredient.id}>
            <Table.Cell>{ingredient.id}</Table.Cell>
            <Table.Cell>
              <InputBar
                icon="edit"
                value={ingredient.name}
                id={ingredient.id}
                date={ingredient.date}
                onFormSubmit={onIngredientUpdate}
              />
            </Table.Cell>
            <Table.Cell>{formatDate(date)}</Table.Cell>
            <Table.Cell>
              <Button onClick={() => onIngredientRemove(ingredient.id)} icon>
                <Icon name="remove circle outline" />
              </Button>
              <Button icon>
                <Icon onClick={() => onIngredientEdit(ingredient.id)} name="edit" />
              </Button>
            </Table.Cell>
          </Table.Row>
        ) : (
          <Table.Row key={ingredient.id}>
            <Table.Cell>{ingredient.id}</Table.Cell>
            <Table.Cell>{ingredient.name}</Table.Cell>
            <Table.Cell>{formatDate(date)}</Table.Cell>
            <Table.Cell>
              <Button onClick={() => onIngredientRemove(ingredient.id)} icon>
                <Icon name="remove circle outline" />
              </Button>
              <Button icon>
                <Icon onClick={() => onIngredientEdit(ingredient.id)} name="edit" />
              </Button>
            </Table.Cell>
          </Table.Row>
        );
      })}
    </Table.Body>
  </Table>
);

IngredientsList.propTypes = {
  ingredients: propTypes.array.isRequired,
  onIngredientRemove: propTypes.func.isRequired,
  onIngredientEdit: propTypes.func.isRequired,
  onIngredientUpdate: propTypes.func.isRequired,
};

export default IngredientsList;
