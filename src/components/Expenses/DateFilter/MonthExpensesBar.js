import "./MonthExpensesBar.css";

const MonthExpensesBar = (props) => {
  let barFillHeight = "0%";

  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }

  return (
    <div className="month-expenses-bar">
      <div id="month-expenses-bar__bar">
        <div
          id="month-expenses-bar__value"
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div>{props.label}</div>
    </div>
  );
};

export default MonthExpensesBar;
