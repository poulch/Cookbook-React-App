import React from 'react';
import PropTypes from 'prop-types';
import { Table, Button, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { formatDate } from '../utils';

const MealsList = props => {
  const { meals, onMealRemove } = props;
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
        {meals.map(meal => {
          index += 1;
          const date = new Date(meal.date);
          return (
            <Table.Row key={meal.id}>
              <Table.Cell>{index}</Table.Cell>
              <Table.Cell>{meal.name}</Table.Cell>
              <Table.Cell>{formatDate(date)}</Table.Cell>
              <Table.Cell>
                <Button icon as={Link} to={`meals/edit/${meal.id}`}>
                  <Icon name="edit" />
                </Button>
                <Button icon as={Link} to={`meals/${meal.id}`}>
                  <Icon name="anchor" />
                </Button>
                {onMealRemove && (
                  <Button icon onClick={() => onMealRemove(meal.id)}>
                    <Icon name="remove" />
                  </Button>
                )}
              </Table.Cell>
            </Table.Row>
          );
        })}
      </Table.Body>
    </Table>
  );
};

MealsList.propTypes = {
  meals: PropTypes.array.isRequired,
  onMealRemove: PropTypes.func,
};

MealsList.defaultProps = {
  onMealRemove: null,
};

export default MealsList;
