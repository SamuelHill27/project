import './DateFilterDisplay.css';
import MonthExpensesBar from './MonthExpensesBar';

const DateFilterDisplay = (props) => {
    return (
        <div className='date-filter-display'>
            <MonthExpensesBar />
        </div>
    );
};

export default DateFilterDisplay;