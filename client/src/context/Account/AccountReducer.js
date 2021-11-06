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
          };
    case SET_CURRENT:
        return {
            ...state,
            current: action.payload
        }
    case CLEAR_CURRENT:
        return {
            ...state,
            current: null
        }
    case UPDATE_ACCOUNT:
        return {
            ...state,
            accounts: state.accounts.map(account => 
                account.id === action.payload.id ? action.payload : account )
        }
    default:
      return state;
  }
};
