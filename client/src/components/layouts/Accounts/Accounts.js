import React, { Fragment, useContext } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import AccountItem from './AccountItem';
import AccountContext from '../../../context/Account/accountContext';

const Accounts = () => {
    const accountContext = useContext(AccountContext);

    const { accounts, filtered } = accountContext;

    if (accounts.length === 0) {
        return <h4>Please add an Account</h4>;
    }

    return (
        <Fragment>
            <TransitionGroup>
            {filtered !== null ? filtered.map(account => (
                <CSSTransition key={account.id} timeout={500} classNames="item">
                    <AccountItem  account={account}/>
                </CSSTransition>
            ))
        : accounts.map(account => (
            <CSSTransition key={account.id} timeout={500} classNames="item">
                    <AccountItem account={account}/>
                </CSSTransition>
            ))}
            </TransitionGroup>
        </Fragment>
    )
}

export default Accounts;
