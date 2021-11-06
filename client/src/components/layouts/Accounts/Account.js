import React, { Fragment, useContext } from 'react'
import AccountItem from './AccountItem';
import AccountContext from '../../../context/Account/accountContext';

const Account = () => {
    const accountContext = useContext(AccountContext);

    const { accounts } = accountContext;

    return (
        <Fragment>
            {accounts.map(account => (
            <AccountItem key={account.id} account={account} />
            ))}
        </Fragment>
    )
}

export default Account;
