import React, { useContext } from 'react'
import PropTypes from 'prop-types';
import AccountContext from '../../../context/Account/accountContext';


const AccountItem = ({ account }) => {
    const accountContext = useContext(AccountContext);

    const { deleteAccount, setCurrent, clearCurrent } = accountContext;
    const { id, bankName, accountName, accountNumber, phone, email, type } = account;

    const onDelete = () => {
        deleteAccount(id);
        clearCurrent();
    }
    return (
        <div className="card bg-light">
            <h3 className="test-primary text-left">
                {accountName}{' '} 
                <span 
                style={{ float: 'right'}}
                className={'badge ' + (type === 'current' ? 
                'badge-success' : 'badge-primary')}>
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                    </span>
            </h3>
            <ul className="list">
                {bankName && (
                    <li>
                        <i className='fas fa-bank' /> {bankName}
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
            <button className="btn btn-dark btn-sm" onClick={() => setCurrent(account) }>Edit</button>
            <button className="btn btn-danger btn-sm" onClick={onDelete}>Delete</button>  
        </div>
    )
}
AccountItem.propTypes ={
    account: PropTypes.object.isRequired
}

export default AccountItem;
