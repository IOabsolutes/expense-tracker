import Expenses from "./componets/Expensise/Expenses.jsx";
import { useState } from "react";
import NewExpense from "./componets/NewExpense/NewExpense.jsx";
import ExpensesFilter from "./componets/ExpenseFilter/ExpenseFilter.jsx";
import Card from "./UI/Card.jsx";
const App = () => {
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      date: new Date(2023, 2, 3),
      item: "Books",
      priceAmount: 234.32,
    },
    {
      id: 2,
      date: new Date(2022, 3, 23),
      item: "Brear",
      priceAmount: 22.44,
    },
    {
      id: 3,
      date: new Date(2023, 6, 2),
      item: "Car",
      priceAmount: 233.44,
    },
    {
      id: 4,
      date: new Date(2020, 1, 2),
      item: "Sales",
      priceAmount: 333.44,
    },
  ]);
  const [openForm, setOpenForm] = useState(false);
  const [selectedYear, setSelectedYear] = useState("");

  const addExpenseHandler = (expense) => {
    setExpenses((prev) => [expense, ...prev]);
  };
  const displayYearHandle = (Year) => {
    setSelectedYear(Year);
  };
  return (
    <div>
      <Card className={"expenses"}>
        {/* форма для новых items */}

        <NewExpense
          openForm={openForm}
          setOpenForm={setOpenForm}
          addExpenseHandler={addExpenseHandler}
        />

        <div>
          {/* dropdown menu */}
          <ExpensesFilter
            selected={selectedYear}
            displayYearHandle={displayYearHandle}
          />
        </div>
        {/* block with cards */}
        <Expenses selectedYear={selectedYear} expenses={expenses} />
      </Card>
    </div>
  );
};

export default App;
