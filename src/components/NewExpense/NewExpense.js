import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
import Card from "../UI/Card";
import { useState } from "react";

const NewExpense = (props) => {
  const [openExpenseForm, setOpenExpenseForm] = useState(false);

  const showExpenseform = () => {
    setOpenExpenseForm(true);
  };

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData); // lifting the state up
    setOpenExpenseForm(false);
  };

  const cancelExpenseDataHandler = () => {
    setOpenExpenseForm(false);
  };

  return (
    <Card className="new-expense">
      {openExpenseForm && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancelExpenseData={cancelExpenseDataHandler}
        />
      )}
      {!openExpenseForm && (
        <button onClick={showExpenseform}>New Expense</button>
      )}
    </Card>
  );
};

export default NewExpense;
