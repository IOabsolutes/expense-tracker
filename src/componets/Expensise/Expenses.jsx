import "./Expenses.css";
import Card from "../../UI/Card.jsx";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpenseChart";
const Expenses = ({ selectedYear, expenses }) => {
  const filteredExpenses = expenses.filter((expense) => {
    const expenseYear = new Date(selectedYear).getFullYear();
    const itemYear = new Date(expense.date).getFullYear();
    return itemYear === expenseYear;
  });

  return (
    <Card className={"expenses"}>
      <ExpenseChart expenses={filteredExpenses} />
      <ExpenseList Array={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
