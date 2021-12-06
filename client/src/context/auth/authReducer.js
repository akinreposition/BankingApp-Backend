import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    CLEAR_ERRORS
  } from "../types";
  
  export const authReducer = (state, action) => {
    switch (action.type) {
      case REGISTER_SUCCESS:
        return {
          ...state,
          accounts: [...state.accounts, action.payload],
        };
      case REGISTER_FAIL:
            return{
                ...state,
                accounts: state.accounts.filter(account => account.id !== action.payload)
            };
      case USER_LOADED:
          return {
              ...state,
              current: action.payload
          }
      case AUTH_ERROR:
          return {
              ...state,
              current: null
          }
      case LOGIN_FAIL:
          return {
              ...state,
              accounts: state.accounts.map(account => 
                  account.id === action.payload.id ? action.payload : account )
          }
      case LOGIN_SUCCESS:
          return {
            ...state,
            filtered: state.accounts.filter(account => {
              const regex = new RegExp(`${action.payload}`, 'gi');
              return account.accountName.match(regex) || account.accountNumber.match(regex);
            })
          }
      case LOGOUT:
            return {
                ...state,
                filtered: null
            }
     case CLEAR_ERRORS:
                return {
                    ...state,
                    current: null
                }
      default:
        return state;
    }
  };
  