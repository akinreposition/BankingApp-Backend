import React, { useContext } from 'react'
import PropTypes from 'prop-types';
import CardContext from '../../../context/cards/cardContext';


const CardItem = ({ card }) => {
    const cardContext = useContext(CardContext);

    const { deleteCard, setCurrent, clearCurrent } = cardContext;
    const { id, bankName, cardName, cardNumber, expirationDate, ccv, type } = card;

    const onDelete = () => {
        deleteCard(id);
        clearCurrent();
    }
    return (
        <div className="card bg-light">
            <h3 className="test-primary text-left">
                {bankName}{' '} 
                <span 
                style={{ float: 'right'}}
                className={'badge ' + (type === 'Master card' ? 
                'badge-success' : 'badge-primary')}>
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                    </span>
            </h3>
            <ul className="list">
                {cardName && (
                    <li>
                        <i className='fas fa-envelope-open' /> {cardName}
                    </li>
                )}
                {cardNumber && (
                    <li>
                        <i className='fas fa-number' /> {cardNumber}
                    </li>
                )}
                {expirationDate && (
                    <li>
                        <i className='fas fa-phone' /> {expirationDate}
                    </li>
                )}
                {ccv && (
                    <li>
                        <i className='fas fa-bank' /> {ccv}
                    </li>
                )}
            </ul>
            <button className="btn btn-dark btn-sm" onClick={() => setCurrent(card) }>Edit</button>
            <button className="btn btn-danger btn-sm" onClick={onDelete}>Delete</button>  
        </div>
    )
}
CardItem.propTypes ={
    card: PropTypes.object.isRequired
}

export default CardItem;
