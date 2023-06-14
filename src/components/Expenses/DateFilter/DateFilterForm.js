import "./DateFilterForm.css";

const DateFilterForm = (props) => {
  const dropdownChangeHandler = (event) => {
    props.onChangeYear(event.target.value);
  };

  return (
    <form>
      <div className="date-filter-form">
        <label htmlFor="years">Filter by year</label>
        <select name="years" value={props.selectedYear} id="years" className="date-filter-form__select" onChange={dropdownChangeHandler}>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
        </select>
      </div>
    </form>
  );
};

export default DateFilterForm;
