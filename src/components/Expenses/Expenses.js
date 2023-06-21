import ExpensesList from "./ExpensesList";
import "./Expenses.css";
import Card from "../UI/Card";
import DateFilter from "./DateFilter/DateFilter";
import { useState } from "react";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2023");

  //console.log(`Data from ${years.filter(year => year.toString() !== filteredYear)} is hidden.`);

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );

  return (
    <Card className="expenses">
      <DateFilter
        selectedYear={filteredYear}
        onChangeFilter={filterChangeHandler}
        expenses={filteredExpenses}
      />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
}

export default Expenses;
