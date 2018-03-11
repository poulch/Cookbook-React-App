import React from 'react';
import propTypes from 'prop-types';
import { Table, Button, Icon } from 'semantic-ui-react';
import InputBar from '../components/input-bar.component';
import { formatDate } from '../utils';

const IngredientsList = ({ ingredients, onIngredientRemove, onIngredientEdit, onIngredientUpdate }) => {
  let index = 0;
  return (
    <Table singleLine>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Nr</Table.HeaderCell>
          <Table.HeaderCell>Nazwa</Table.HeaderCell>
          <Table.HeaderCell>Data dodania</Table.HeaderCell>
          <Table.HeaderCell>Akcje</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {ingredients.map(ingredient => {
          const date = new Date(ingredient.date);
          index += 1;
          return ingredient.edited ? (
            <Table.Row key={ingredient.id}>
              <Table.Cell>{index}</Table.Cell>
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
              <Table.Cell>{index}</Table.Cell>
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
};

IngredientsList.propTypes = {
  ingredients: propTypes.array.isRequired,
  onIngredientRemove: propTypes.func.isRequired,
  onIngredientEdit: propTypes.func.isRequired,
  onIngredientUpdate: propTypes.func.isRequired,
};

export default IngredientsList;
