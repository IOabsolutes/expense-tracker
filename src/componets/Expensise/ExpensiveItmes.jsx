import "./ExpensiveItems.css";
import ExpenseDate from "./ExpenseDate.jsx";
import Card from "../../UI/Card.jsx";
import { useState } from "react";

const ExpenseItem = (props) => {
  const [item, setItem] = useState(props.item);
  const clickHandle = () => {
    setItem("updated");
  };
  return (
    <Card className={"expense-item"}>
      <div className={"expense-item"}>
        <ExpenseDate date={props.date} />
        <div className={"expense-item__description"}>
          <h2>{item}</h2>
          <div className={"expense-item__price"}>{props.priceAmount} $</div>
        </div>
        <button type={"submit"} onClick={clickHandle}>
          Change Item
        </button>
      </div>
    </Card>
  );
};

export default ExpenseItem;
