import React,{} from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";
let i=0
const NewExpense=(props)=>{
    const saveExpenseDataHandler =(newExpenseData)=>{
        const newExpense={
            id:`ex${i++}`,
            ...newExpenseData,
        }
        props.onCreateNewExpense(newExpense);
    }
    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
        </div>
    )
};

export default NewExpense;
