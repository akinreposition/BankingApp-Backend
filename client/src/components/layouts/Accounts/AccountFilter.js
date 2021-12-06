import React, { useContext, useRef, useEffect } from 'react'
import AccountContext from '../../../context/Account/accountContext';

const AccountFilter = () => {
    const accountContext = useContext(AccountContext);
    const text = useRef('');

    const { filterAccounts, clearFilter, filtered } = accountContext;

    useEffect(() => {
        if(filtered === null) {
            text.current.value = '';
        }
    });
     const onChange = e => {
         if( text.current.value !== '') {
            filterAccounts(e.target.value);
         } else {
             clearFilter();
         }
     }

    return (
        <form>
            <input ref={text}
            type="text"
            placeholder="Filter Account"
            onChange={onChange}/>
        </form>
    )
}
export default AccountFilter