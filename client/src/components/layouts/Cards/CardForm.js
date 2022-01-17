import React, { useState, useContext, useEffect } from "react";
import CardContext from "../../../context/cards/cardContext";

const CardForm = () => {
  const cardContext = useContext(CardContext);

  const { addCard, current, clearCurrent, updateCard } = cardContext;

  useEffect(() => {
    if (current !== null) {
      setCard(current);
    } else {
      setCard({
        bankName: " ",
        cardName: " ",
        cardNumber: " ",
        expirationDate: " ",
        type: "visa",
      });
    }
  }, [cardContext, current]);

  const [card, setCard] = useState({
    bankName: " ",
    cardName: " ",
    cardNumber: " ",
    expirationDate: " ",
    type: "visa",
  });

  const { bankName, cardName, cardNumber, expirationDate, type } = card;

  const onChange = (e) => setCard({ ...card, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (current === null) {
      addCard(card);
    } else {
      updateCard(card);

    }
    clearAll();
  };

  const clearAll = () => {
    clearCurrent();
  };

  return (
    <form onSubmit={onSubmit}>
      <h2 className="text-primary">{current ? "Edit Card" : "Add Card"}</h2>
      <label>Bank Name</label>
      <input
        type="text"
        required
        name="bankName"
        value={bankName}
        onChange={onChange}
      />
      <label>Card Name</label>
      <input
        type="text"
        required
        name="cardName"
        value={cardName}
        onChange={onChange}
      />
      <label>Card Number</label>
      <input
        type="text"
        required
        name="cardNumber"
        value={cardNumber}
        onChange={onChange}
      />
      <label>Expiration Date</label>
      <input
        type="date"
        name="expirationDate"
        value={expirationDate}
        onChange={onChange}
      />
      <h5>Card Type</h5>
      <input
        type="radio"
        name="type"
        value="visa"
        checked={type === "visa"}
        onChange={onChange}
      />{" "}
      Visa{" "}
      <input
        type="radio"
        name="type"
        value="master"
        checked={type === "master"}
        onChange={onChange}
      />{" "}
      Master{" "}
      <div>
        <input
          type="submit"
          value={current ? "Update Card" : "Add Card"}
          className="btn btn-primary btn-block"
        />
      </div>
      {current && (
        <div>
          <button className="btn btn-light btn-block" onClick={clearAll}>
            clear
          </button>
        </div>
      )}
    </form>
  );
};
export default CardForm;
