import React from "react";
import "./NewExpense.css";
import ExpenseFrom from "./ExpenseFrom.jsx";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.addExpenseHandler(expenseData);
  };
  return (
    <div className={"new-expense"}>
      <ExpenseFrom onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
