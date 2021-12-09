import React, { Fragment, useContext } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import CardItem from './CardItem';
import CardContext from '../../../context/cards/cardContext';

const Cards = () => {
    const cardContext = useContext(CardContext);

    const { cards, filtered } = cardContext;

    if (cards.length === 0) {
        return <h4>Please add a Card</h4>;
    }

    return (
        <Fragment>
            <TransitionGroup>
            {filtered !== null ? filtered.map(card => (
                <CSSTransition key={card.id} timeout={500} classNames="item">
                    <CardItem  card={card}/>
                </CSSTransition>
            ))
        : cards.map(card => (
            <CSSTransition key={card.id} timeout={500} classNames="item">
                    <CardItem card={card}/>
                </CSSTransition>
            ))}
            </TransitionGroup>
        </Fragment>
    )
}

export default Cards;
