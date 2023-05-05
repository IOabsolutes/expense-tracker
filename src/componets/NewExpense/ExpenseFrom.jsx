import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseFrom = (props) => {
  const [enteredItem, setEnteredItem] = useState("");
  const [enteredPrice, setEnteredPrice] = useState(0);
  const [enteredDate, setEnteredDate] = useState(new Date());
  // const [userInput, setUserInput] = useState({
  //     item: "",
  //     priceAmount: 0,
  //     date: new Date(),
  // });
  const handleItemChange = (event) => {
    setEnteredItem(event.target.value);
    // setUserInput({
    //     ...userInput,
    //     item: event.target.value,
    // });
    // setUserInput((prevState) => {
    //     return {
    //         ...prevState,
    //         item: event.target.value,
    //     };
    // })
  };
  const handlePriceChange = (event) => {
    setEnteredPrice(event.target.value);
  };
  const handleDateChange = (event) => {
    setEnteredDate(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const expenseData = {
      item: enteredItem,
      priceAmount: enteredPrice,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);
    setEnteredItem("");
    setEnteredPrice(0);
    setEnteredDate(new Date());
    console.log(expenseData);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className={"new-expense__controls"}>
        <div className={"new-expense__control"}>
          <label>Item</label>
          <input type="text" value={enteredItem} onChange={handleItemChange} />
        </div>
        <div className={"new-expense__control"}>
          <label>Price</label>
          <input
            type="number"
            min={0.01}
            step={0.5}
            value={enteredPrice}
            onChange={handlePriceChange}
          />
        </div>
        <div className={"new-expense__control"}>
          <label>Date</label>
          <input
            type="date"
            min={"01-01-2020"}
            value={enteredDate.toString()}
            onChange={handleDateChange}
          />
        </div>
      </div>
      <div className={"new-expense__actions"}>
        <button onClick={() => {}}>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseFrom;
