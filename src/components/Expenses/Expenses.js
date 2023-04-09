import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
const Expenses = (props) => {
  const changeFilterYearHandler = (ChangedYear) => {
    console.log(ChangedYear);
  };
  const expensesArray = props.items.map((expense) => {
    return (
      <ExpenseItem
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
        key={expense.id}
      />
    );
  });
  return (
    <Card className="expenses">
      <ExpenseFilter onChangeFilterYear={changeFilterYearHandler} />
      {expensesArray}
    </Card>
  );
};

export default Expenses;
