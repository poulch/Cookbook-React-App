export const ADD_MEAL = 'ADD_MEAL';
export const REMOVE_MEAL = 'REMOVE_MEAL';
export const EDIT_MEAL = 'EDIT_MEAL';

export const addMeal = meal => ({
  type: ADD_MEAL,
  meal,
});

export const removeMeal = mealId => ({
  type: REMOVE_MEAL,
  mealId,
});

export const editMeal = meal => ({
  type: EDIT_MEAL,
  meal,
});
