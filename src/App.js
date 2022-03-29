import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import React, { useState } from "react";
import NewExpense from "./components/NewExpense/NewExpense";
import Card from "./components/UI/Card";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "New TV",
    amount: 799.49,
    date: new Date(2021, 2, 12),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: parseFloat(450).toFixed(2),
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpense) => {
      return [
        {
          id: expense.id,
          title: expense.title,
          amount: expense.amount,
          date: new Date(expense.date),
        },
        ...prevExpense,
      ];
    });
  };

  return (
    <div>
      <Card className="expenses">
        <h2 className="expenses-header">Let's get started!</h2>
        <NewExpense onAddExpense={addExpenseHandler} />
        <Expenses items={expenses} />
      </Card>
    </div>
  );
};

export default App;
