import "./Expenses.css";
import Card from "../UI/Card";
import React, { useState } from "react";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import FallBack from "./FallBack";

const Expenses = (props) => {
  const [defaultYear, setDefaultYear] = useState(
    new Date().getFullYear().toString()
  );

  const selectedYearHandler = (selectedYear) => {
    setDefaultYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === defaultYear;
  });

  if (filteredExpenses.length === 0) {
    return <FallBack />;
  }

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          onYearSelected={selectedYearHandler}
          selected={defaultYear}
        />
        <div>
          <ExpensesChart expenses={filteredExpenses} />
          <ExpensesList items={filteredExpenses} />
        </div>
      </Card>
    </div>
  );
};

export default Expenses;
