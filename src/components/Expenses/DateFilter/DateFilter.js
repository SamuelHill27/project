import "./DateFilter.css";
import DateFilterForm from "./DateFilterForm";
import DateFilterDisplay from "./DateFilterDisplay";

const DateFilter = (props) => {
  const changeYearhandler = (selectedYear) => {
    props.onChangeFilter(selectedYear);
  }

  return (
    <div className="date-filter">
      <DateFilterForm selectedYear={props.selectedYear} onChangeYear={changeYearhandler}/>
      <DateFilterDisplay />
    </div>
  );
};

export default DateFilter;
