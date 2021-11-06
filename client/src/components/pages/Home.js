import React from 'react'
import Account from '../layouts/Accounts/Account';
import AccountForm from '../layouts/Accounts/AccountForm';

const Home = () => {
    return (
        <div className="grid-2">
            <div>
                <AccountForm />
            </div>
            <div>
                <Account />
            </div>
        </div>
    )
}
export default Home;