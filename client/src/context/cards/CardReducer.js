import {
  ADD_CARD,
  DELETE_CARD,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CARD,
  CLEAR_FILTER,
  FILTER_CARDS,
} from "../types";

export const cardReducer = (state, action) => {
  switch (action.type) {
    case ADD_CARD:
      return {
        ...state,
        cards: [...state.cards, action.payload],
      };
    case DELETE_CARD:
          return{
              ...state,
              cards: state.cards.filter(card => card.id !== action.payload)
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
    case UPDATE_CARD:
        return {
            ...state,
            cards: state.cards.map(card => 
                card.id === action.payload.id ? action.payload : card )
        }
    case FILTER_CARDS:
        return {
          ...state,
          filtered: state.cards.filter(card => {
            const regex = new RegExp(`${action.payload}`, 'gi');
            return card.cardName.match(regex) || card.accountNumber.match(regex);
          })
        }
    case CLEAR_FILTER:
          return {
              ...state,
              filtered: null
          }
    default:
      return state;
  }
};
