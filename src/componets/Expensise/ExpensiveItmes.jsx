import "./ExpensiveItems.css";
import ExpenseDate from "./ExpenseDate.jsx";
import Card from "../../UI/Card.jsx";


const ExpenseItem = (props) => {
  return (
    <li>
      <Card className={"expense-item"}>
        <ExpenseDate date={props.date} />
        <div className={"expense-item__description"}>
          <h2>{props.item}</h2>
          <div className={"expense-item__price"}>{props.priceAmount} $</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
