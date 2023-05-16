import React from "react";
import "./NewExpense.css";
import ExpenseFrom from "./ExpenseFrom.jsx";

const NewExpense = ({ addExpenseHandler, setOpenForm, openForm }) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    addExpenseHandler(expenseData);
  };
  return (
    <div className={"new-expense"}>
      {!openForm && (
        <button onClick={() => setOpenForm(true)}>add new expense</button>
      )}
      {openForm && (
        <ExpenseFrom
          Action={setOpenForm}
          saveExpenseDataHandler={saveExpenseDataHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
