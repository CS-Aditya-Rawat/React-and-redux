import { ActionTypes } from "../constants/action-typer";

const initialState = {
  products: [],
};

// 1st parameter is the initial state and the second one is the action
// we destructure the type and the payload
export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    // If our action is set product
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload }; // return the state
    default:
      return state;
  }
};

export const selectedProductReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, ...payload };

    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return {};

    default:
      return state;
  }
};
