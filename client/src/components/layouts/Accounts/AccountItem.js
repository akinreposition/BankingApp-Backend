import React from 'react'
import PropTypes from 'prop-types';

const AccountItem = ({ account }) => {
    const { bankName, accountName, accountNumber, phone, email, type } = account;
    return (
        <div className="card bg-light">
            <h3 className="test-primary text-left">
                {accountName}{' '} 
                <span 
                style={{ float: 'right'}}
                className={'badge ' + (type === 'current' ? 
                'badge-success' : 'badge-primary')}>
                    {type.charat(0).toUpperCase() + type.slice(1)}
                    </span>
            </h3>
            <ul className="list">
                {bankName && (
                    <li>
                        <i className='fas fa-bank' /> {bankName}
                    </li>
                )}
                {accountName && (
                    <li>
                        <i className='fas fa-contact' /> {accountName}
                    </li>
                )}
                {accountNumber && (
                    <li>
                        <i className='fas fa-number' /> {accountNumber}
                    </li>
                )}
                {email && (
                    <li>
                        <i className='fas fa-envelope-open' /> {email}
                    </li>
                )}
                {phone && (
                    <li>
                        <i className='fas fa-phone' /> {phone}
                    </li>
                )}
            </ul>
            <button className="btn btn-dark btn-sm">Edit</button>
            <button className="btn btn-danger btn-sm">Delete</button>  
        </div>
    )
}
AccountItem.propTypes ={
    account: PropTypes.object.isRequired
}

export default AccountItem;
