export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const REMOVE_INGREDIENT = 'REMOVE_INGREDIENT';
export const UPDATE_INGREDIENT = 'UPDATE_INGREDIENT';
export const EDIT_INGREDIENT = 'EDIT_INGREDIENT';

export const addIngredient = ingredient => ({
  type: ADD_INGREDIENT,
  ingredient,
});

export const removeIngredint = igredientId => ({
  type: REMOVE_INGREDIENT,
  igredientId,
});

export const editIngredient = ingredientId => ({
  type: EDIT_INGREDIENT,
  ingredientId,
});

export const updateIgredient = ingredient => ({
  type: UPDATE_INGREDIENT,
  ingredient,
});
