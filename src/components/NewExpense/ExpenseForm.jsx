import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enterdTitle, setEnteredTitle] = useState("");
  const [enterdAmount, setEnterdAmount] = useState("");
  const [enterdDate, setEnterdDate] = useState("");
  // const [userInput, setUserInput] = useState({
  //   enterdTitle: "",
  //   enterdAmount: "",
  //   enterdDate: "",
  // });

  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value);
    // setUserInput({
    //   ...userInput,
    //   enterdTitle: e.target.value,
    // });
  };

  const amountChangeHandler = (e) => {
    setEnterdAmount(e.target.value);
    // setUserInput({
    //   ...userInput,
    //   enterdAmount: e.target.value,
    // });
  };

  const dateChangeHandler = (e) => {
    setEnterdDate(e.target.value);
    // setUserInput({
    //   ...userInput,
    //   enterdDate: e.target.value,
    // });
  };

  const submitHandler = (e) => {
    e.preventDefault(); // we do this to prevent our form from makeing refresh to our page

    const expenseData = {
      title: enterdTitle,
      amount: enterdAmount,
      date: new Date(enterdDate),
    };

    props.onSaveExpenseData(expenseData);
    // console.log(expenseData);
    setEnterdAmount("");
    setEnterdDate("");
    setEnteredTitle("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enterdTitle}
            onChange={titleChangeHandler}
          />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="text"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            value={enterdAmount}
          />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="Date"
            min="2019-01-01"
            max="2024-12-31"
            onChange={dateChangeHandler}
            value={enterdDate}
          />
        </div>
      </div>

      <div className=".new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
