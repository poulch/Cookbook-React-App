import React from 'react';
import PropTypes from 'prop-types';
import { Table, Button, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { formatDate } from '../utils';

const MealsList = ({ meals }) => (
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
      {meals.map(meal => {
        const date = new Date(meal.date);
        return (
          <Table.Row key={meal.id}>
            <Table.Cell>{meal.id}</Table.Cell>
            <Table.Cell>{meal.name}</Table.Cell>
            <Table.Cell>{formatDate(date)}</Table.Cell>
            <Table.Cell>
              <Button icon>
                <Icon name="edit" />
              </Button>
              <Button icon as={Link} to={`meals/${meal.id}`}>
                <Icon name="anchor" />
              </Button>
            </Table.Cell>
          </Table.Row>
        );
      })}
    </Table.Body>
  </Table>
);

MealsList.propTypes = {
  meals: PropTypes.array.isRequired,
};

export default MealsList;
