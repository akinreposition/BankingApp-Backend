import React from 'react'
import Accounts from '../layouts/Accounts/Accounts';
import AccountFilter from '../layouts/Accounts/AccountFilter';
import AccountForm from '../layouts/Accounts/AccountForm';

const Home = () => {
    return (
        <div className="grid-2">
            <div>
                <AccountFilter />
                <Accounts />
            </div>
            <div>
                <AccountForm />
            </div>
        </div>
    )
}
export default Home;