import {
  ADD_ACCOUNT,
  DELETE_ACCOUNT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_ACCOUNT,
  FILTER_ACCOUNT,
  CLEAR_FILTER,
} from "../types";

export const accountReducer = (state, action) => {
  switch (action.type) {
    case ADD_ACCOUNT:
      return {
        ...state,
        accounts: [...state.accounts, action.payload],
      };
      case DELETE_ACCOUNT:
          return{
              ...state,
              accounts: state.accounts.filter(account => account.id !== action.payload)
          }
    default:
      return state;
  }
};
