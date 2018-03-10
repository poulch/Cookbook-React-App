import { ADD_MEAL, REMOVE_MEAL, EDIT_MEAL } from '../actions/meals.action';

const initState = [];

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
