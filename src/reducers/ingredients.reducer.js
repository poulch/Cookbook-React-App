import { ADD_INGREDIENT, REMOVE_INGREDIENT, UPDATE_INGREDIENT, EDIT_INGREDIENT } from '../actions/ingredients.action';

const initState = [
  {
    id: 'dd054ee0-2318-11e8-b725-711261c2c67a',
    name: 'Mąka',
    date: 1520545032910,
    edited: false,
  },
  {
    id: 'e04ead80-2318-11e8-b725-711261c2c67a',
    name: 'Cukier',
    date: 1520545032910,
    edited: false,
  },
];

export default function(state = initState, action) {
  switch (action.type) {
    case ADD_INGREDIENT:
      return [...state, action.ingredient];
    case REMOVE_INGREDIENT:
      return [...state.filter(igredient => igredient.id !== action.igredientId)];
    case UPDATE_INGREDIENT:
      const updatedIngedient = state.map(ingredient => {
        if (ingredient.id === action.ingredient.id) {
          return action.ingredient;
        }

        return ingredient;
      });
      return [...updatedIngedient];
    case EDIT_INGREDIENT:
      const editedIngedient = state.map(ingredient => {
        if (ingredient.id === action.ingredientId) {
          return { ...ingredient, edited: true };
        }

        return ingredient;
      });
      return [...editedIngedient];
    default:
      return state;
  }
}
