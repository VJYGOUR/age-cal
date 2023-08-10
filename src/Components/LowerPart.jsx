import "./Lower.css";
function LowerPart(props) {
  return (
    <div className="h1div">
      <h1>
        <span>{props.age === "" ? "--" : props.age}</span> years
      </h1>
      <h1>
        <span>{props.months === "" ? "--" : props.months}</span> month
      </h1>
      <h1>
        <span>{props.days === "" ? "--" : props.days}</span> days
      </h1>
    </div>
  );
}
export default LowerPart;
