import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import Card from "../UI/Card";
import DateFilter from "./DateFilter/DateFilter";
import { useState } from "react";

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState("2023");

    const years = [2021, 2022, 2023];
    //console.log(`Data from ${years.filter(year => year.toString() !== filteredYear)} is hidden.`);

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    }

    return (
        <Card className="expenses">
            <DateFilter selectedYear={filteredYear} onChangeFilter={filterChangeHandler} />
            <ExpenseItem
                title={props.items[0].title}
                amount={props.items[0].amount}
                date={props.items[0].date}
                category={props.items[0].category}
            />
            <ExpenseItem
                title={props.items[1].title}
                amount={props.items[1].amount}
                date={props.items[1].date}
                category={props.items[1].category}
            />
            <ExpenseItem
                title={props.items[2].title}
                amount={props.items[2].amount}
                date={props.items[2].date}
                category={props.items[2].category}
            />
            <ExpenseItem
                title={props.items[3].title}
                amount={props.items[3].amount}
                date={props.items[3].date}
                category={props.items[3].category}
            />
        </Card>
    );
}

export default Expenses;