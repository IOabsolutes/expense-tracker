import "./Expenses.css";
import ExpenseItem from "./ExpensiveItmes.jsx";
import Card from "../../UI/Card.jsx";

const Expenses = ({ selectedYear, expenses }) => {
  const filteredExpenses = expenses.filter((expense) => {
    const expenseYear = new Date(selectedYear).getFullYear();
    const itemYear = new Date(expense.date).getFullYear();
    return itemYear === expenseYear;
  });
  return (
    <Card className={"expenses"}>
      {filteredExpenses.map((item) => (
        <ExpenseItem
          key={item.id}
          date={item.date}
          item={item.item}
          priceAmount={item.priceAmount}
          year={new Date(item.data).getFullYear()}
        />
      ))}
    </Card>
  );
};

export default Expenses;
