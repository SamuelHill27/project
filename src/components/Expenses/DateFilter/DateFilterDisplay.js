import "./DateFilterDisplay.css";
import MonthExpensesBar from "./MonthExpensesBar";

const DateFilterDisplay = (props) => {
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value); // this is why typescript is so popular!
  const totalMax = Math.max(...dataPointValues);

  return (
    <div className="date-filter-display">
      {props.dataPoints.map((dataPoint) => (
        <MonthExpensesBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMax}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default DateFilterDisplay;
