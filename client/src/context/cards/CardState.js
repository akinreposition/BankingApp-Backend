import React, { useReducer } from "react";
import axios from 'axios';
// import { v4 as uuidv4 } from "uuid";
import CardContext from "./cardContext";
import { cardReducer } from "./CardReducer";
import {
  GET_CARDS,
  ADD_CARD,
  DELETE_CARD,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CARD,
  FILTER_CARDS,
  CLEAR_FILTER,
  CLEAR_CARDS,
  CARD_ERROR
} from "../types";


const CardState = (props) => {
  const initialState = {
    cards: null,
    current: null,
    filtered: null,
    error: null
  };

  const [state, dispatch] = useReducer(cardReducer, initialState);

  //  Get Cards
  const getCards = async () => {
    try {
      const res = await axios.get('/api/cards',);

      dispatch({ 
        type: GET_CARDS, 
        payload: res.data 
      });
    } catch (error) {
      dispatch({ type: CARD_ERROR,
      payload: error.response.msg
    });
    }
    
  };
  // Add Account
  const addCard = async newCard => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    try {
      const res = await axios.post('/api/cards', newCard, config);

      dispatch({ 
        type: ADD_CARD, 
        payload: res.data 
      });
    } catch (error) {
      dispatch({ type: CARD_ERROR,
      payload: error.response.msg
    });
    }
    
  };
  // Update Card
  const updateCard = async card => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    try {
      const res = await axios.post(`/api/cards/${card._id}`, card, config);

      dispatch({ 
        type: UPDATE_CARD, 
        payload: res.data
      });
    } catch (error) {
      dispatch({ type: CARD_ERROR,
        payload: error.response.msg
      });
    }

  };

  //  Delete Account
  const deleteCard = async id => {
    try {
      await axios.delte(`/api/cards/${id}`);

      dispatch({ 
        type: DELETE_CARD, 
        payload: id 
      });
    } catch (error) {
      dispatch({ type: CARD_ERROR,
      payload: error.response.msg
    });
    }

  };

  //  Clear cards
  const clearCards = () => {
    dispatch({
      type: CLEAR_CARDS
    })
  }
  // Set current Account
  const setCurrent = (newCard) => {
    dispatch({ type: SET_CURRENT, payload: newCard });
  };

  // clear current Account
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
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
        error: state.error,
        getCards,
        addCard,
        deleteCard,
        clearCards,
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
