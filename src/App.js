import "./App.css";
import Expenses from "./components/Expenses";

function App() {
  const expenses = [
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

  function getExpenses(year){
      return expenses.filter((e) => e.date.getFullYear() === year);
  }

  const defaultYear = 2021;

  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={getExpenses(defaultYear)} />
    </div>
  );
}

export default App;