import { ADD_MEAL, REMOVE_MEAL, EDIT_MEAL } from '../actions/meals.action';

const initState = [
  {
    id: '2312asdasd123123',
    name: 'Spagetti Bolonese',
    text: 'Spagetti Bolonese jest włoską potrawą składającą się z sosu i makaronu',
    date: 1520451304861,
    ingredients: ['e04ead80-2318-11e8-b725-711261c2c67a', 'dd054ee0-2318-11e8-b725-711261c2c67a'],
  },
  {
    id: '2312asdasd1asd23123',
    name: 'Pizza',
    text: 'Spagetti Bolonese jest włoską potrawą składającą się z sosu i makaronu',
    date: 1520451304861,
    ingredients: ['e04ead80-2318-11e8-b725-711261c2c67a'],
  },
];

export default function(state = initState, action) {
  switch (action.type) {
    case ADD_MEAL:
      return [...state, action.meal];
    case REMOVE_MEAL:
      return state.filter(item => item.id !== action.mealId);
    case EDIT_MEAL:
      return state.map(meal => {
        if (meal.id === action.meal.id) {
          const { name, text, ingredients } = action.meal;
          meal.name = name;
          meal.text = text;
          meal.ingredients = ingredients;
        }

        return meal;
      });
    default:
      return state;
  }
}
