import React, { useState, useContext, useEffect } from "react";
import AccountContext from "../../../context/Account/accountContext";
import { CLEAR_CURRENT } from "../../../context/types";

const AccountForm = () => {
    const accountContext = useContext(AccountContext);

    const { addAccount, current, clearCurrent, updateAccount } = accountContext;

    useEffect(()=> {
      if(current !== null) {
        setAccount(current);
      }else {
        setAccount({
          bankName: " ",
          accountName: " ",
          accountNumber: " ",
          phone: " ",
          email: " ",
          type: "savings",
      });
      }
    }, [accountContext, current]);

    const [account, setAccount] = useState({
      bankName: " ",
      accountName: " ",
      accountNumber: " ",
      phone: " ",
      email: " ",
      type: "savings",
    });

  const { bankName, accountName, accountNumber, phone, email, type } = account;

  const onChange = (e) =>
    setAccount({ ...account, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if(current === null) {
        addAccount(account);
    } else {
      updateAccount(account);
    }
    clearAll();
  };

  const clearAll = () => {
    clearCurrent ();
  };

  return (
    <form onSubmit={onSubmit}>
      <h2 className="text-primary">{current ? 'Edit Account' : 'Add Account'}</h2>
      <label htmlFor='Bank Name'>Bank Name</label>
      <input
        type="text"
        required
        name="bankName"
        value={bankName}
        onChange={onChange}
      />
      <label htmlFor='Account Name'>Account Name</label>
      <input
        type="text"
        required
        name="accountName"
        value={accountName}
        onChange={onChange}
      />
      <label htmlFor=''>Account Number</label>
      <input
        type="text"
        required
        name="accountNumber"
        value={accountNumber}
        onChange={onChange}
      />
      <label htmlFor=''>Phone</label>
      <input
        type="text"
        required
        name="phone"
        value={phone}
        onChange={onChange}
      />
      <label htmlFor='Full Name'>Email</label>
      <input
        type="email"
        name="email"
        value={email}
        onChange={onChange}
      />
      <h5>Account Type</h5>
      <input
        type="radio"
        name="type"
        value="savings"
        checked={type === "savings"}
        onChange={onChange}
      />{" "}
      Savings{" "}
      <input
        type="radio"
        name="type"
        value="current"
        checked={type === "current"}
        onChange={onChange}
      />{" "}
      Current{" "}
      <input
        type="radio"
        name="type"
        value="Domilicary"
        checked={type === "Domilicary"}
        onChange={onChange}
      />{" "}
      Domilicary{" "}
      <div>
        <input
          type="submit"
          value={current ? 'Update Account' : 'Add Account'} 
          className="btn btn-primary btn-block"
        />
      </div>
      {current && <div>
        <button className="btn btn-light btn-block" onClick={clearAll}>
          clear
        </button></div>}
    </form>
  );
};
export default AccountForm;
