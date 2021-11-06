import React, { useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import AccountContext from './accountContext';
import {accountReducer} from './AccountReducer';
import { 
    ADD_ACCOUNT,
    DELETE_ACCOUNT,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_ACCOUNT,
    FILTER_ACCOUNT,
    CLEAR_FILTER
 } from "../types";
import accountContext from './accountContext';

 const AccountState = props => {
     const initialState  = {
         accounts:[
             {
                 id: 1,
                 bankName: 'FirstBank Nigeria',
                 accountName: 'akin odeku',
                 accountNumber: '0123456789',
                 phone: '111-111-1111',
                 email: 'akinodeku@mail.com',
                 type: 'current'
             },
             {
                id: 2,
                bankName: 'Union Bank Nigeria',
                accountName: 'Taju obafemi',
                accountNumber: '1234567890',
                phone: '222-222-2222',
                email: 'tajuobafemi@mail.com',
                type: 'salary'
            },
            {
                id: 3,
                bankName: 'Access Bank Nigeria',
                accountName: 'Adigun Gwen',
                accountNumber: '0123456799',
                phone: '333-333-3333',
                email: 'adigungewn@mail.com',
                type: 'savings'
            }
         ]
     }

     const [state, dispatch] = useReducer(accountReducer, initialState);

     // Add Account
     const addAccount = account => {
         accountContext.id = uuidv4();
         dispatch({ type: ADD_ACCOUNT, payload: account});
     };
    //  Delete Account

    // Set current Account

    // clear current Account

    // Update Account

    // Filter Account

    // Clear Filter

    return (
        <AccountContext.Provider 
         value= {{
             accounts: state.accounts,
             addAccount,
         }}
         >
            {props.children}
        </AccountContext.Provider>
    )
 }

 export default AccountState;