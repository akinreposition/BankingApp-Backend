import React, { Fragment, useContext, useEffect } from "react";
import { Spinner } from '../Spinner';
import { CSSTransition, TransitionGroup } from "react-transition-group";
import CardItem from "./CardItem";
import CardContext from "../../../context/cards/cardContext";

const Cards = () => {
  const cardContext = useContext(CardContext);

  const { cards, filtered, getCards, loading } = cardContext;

  useEffect(() => {
    getCards();
    // eslint-disable-next-line
  }, []);

  if (cards !== null && cards.length === 0 && !loading) {
    return <h4>Please add a Card</h4>;
  }

  return (
    <Fragment>
      {cards !== null && !loading ? (
      <TransitionGroup>
        {filtered !== null
          ? filtered.map((card) => (
              <CSSTransition key={card._id} timeout={500} classNames="item">
                <CardItem card={card} />
              </CSSTransition>
            ))
          : cards.map((card) => (
              <CSSTransition key={card._id} timeout={500} classNames="item">
                <CardItem card={card} />
              </CSSTransition>
            ))}
      </TransitionGroup>
      ) : <Spinner/>}
      
    </Fragment>
  );
};

export default Cards;
