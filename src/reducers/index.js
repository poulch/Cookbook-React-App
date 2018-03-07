import { combineReducers } from 'redux';
import mealReducer from './meals.reducer';
import ingredientReducer from './ingredients.reducer';

const rootReducer = combineReducers({
  meals: mealReducer,
  ingredients: ingredientReducer,
});

export default rootReducer;
