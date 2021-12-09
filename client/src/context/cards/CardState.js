import React, { useReducer } from "react";
import { v4 as uuidv4 } from "uuid";
import CardContext from "./cardContext";
import { cardReducer } from "./CardReducer";
import {
  ADD_CARD,
  DELETE_CARD,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CARD,
  FILTER_CARDS,
  CLEAR_FILTER,
} from "../types";
import cardContext from "./cardContext";

const CardState = (props) => {
  const initialState = {
    cards: [
      {
        id: 1,
        bankName: "FirstBank Nigeria",
        cardName: "akin odeku",
        cardNumber: "0123-4567-8910-2345",
        ccv: "111",
        expirationDate: "01-01-22",
        type: "Master Card",
      },
      {
        id: 2,
        bankName: "Union Bank Nigeria",
        cardName: "Teju sanya",
        cardNumber: "0123-4567-8910-2345",
        ccv: "222",
        expirationDate: "01-02-22",
        type: "Visa Card",
      },
      {
        id: 3,
        cardName: "Sam Smith",
        cardNumber: "0123-7654-0189-2345",
        ccv: "333",
        expirationDate: "01-03-22",
        type: "Debit Card",
      },
    ],
    current: null,
    filtered: null,
  };

  const [state, dispatch] = useReducer(cardReducer, initialState);

  // Add Account
  const addCard = (newCard) => {
    cardContext.id = uuidv4();
    dispatch({ type: ADD_CARD, payload: newCard });
  };

  //  Delete Account
  const deleteCard = (id) => {
    dispatch({ type: DELETE_CARD, payload: id });
  };

  // Set current Account
  const setCurrent = (newCard) => {
    dispatch({ type: SET_CURRENT, payload: newCard });
  };

  // clear current Account
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };

  // Update Card
  const updateCard = (newCard) => {
    dispatch({ type: UPDATE_CARD, payload: newCard });
  };
  // Filter Card
  const filterCards = (text) => {
    dispatch({ type: FILTER_CARDS, payload: text });
  };

  // Clear Filter
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };

  return (
    <CardContext.Provider
      value={{
        cards: state.cards,
        current: state.current,
        filtered: state.filtered,
        addCard,
        deleteCard,
        setCurrent,
        clearCurrent,
        updateCard,
        filterCards,
        clearFilter,
      }}
    >
      {props.children}
    </CardContext.Provider>
  );
};

export default CardState;
