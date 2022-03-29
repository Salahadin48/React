import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  // const [enteredAmount, setEnteredAmount] = useState(0);
  // const [enteredDate, setEnteredDate] = useState('2019-01-01');
  var date = new Date();
  var formattedDate = `${date.getMonth() +
    1}/${date.getDate()}/${date.getFullYear()}`;
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "0",
    enteredDate: formattedDate,
  });

  const titleChangeHandler = (e) => {
    // setEnteredTitle(e.target.value);
    setUserInput((prevState) => {
      return { ...prevState, enteredTitle: e.target.value };
    });
  };

  const amountChangeHandler = (e) => {
    // setEnteredAmount(e.target.value);
    setUserInput((prevState) => {
      return { ...prevState, enteredAmount: e.target.value };
    });
  };

  const dateChangeHandler = (e) => {
    // setEnteredDate(e.target.value);
    setUserInput((prevState) => {
      return { ...prevState, enteredDate: e.target.value };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: userInput.enteredTitle,
      amount: userInput.enteredAmount,
      date: userInput.enteredDate,
    };
    props.onSaveExpenseData(expenseData);
    clearInput();
  };

  const clearInput = () => {
    setUserInput({
      enteredTitle: "",
      enteredAmount: "",
      enteredDate: new Date(),
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            onChange={titleChangeHandler}
            value={userInput.enteredTitle}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            value={userInput.enteredAmount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
            value={userInput.enteredDate}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={props.onCancel}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
