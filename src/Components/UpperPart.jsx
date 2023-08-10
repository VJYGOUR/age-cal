import "./UpprPart/Form.css";
import Form from "./UpprPart/Form";
function UpperPart(props) {
  return (
    <>
      <div className="form">
        <Form
          field1={props.field1}
          empty={props.empty}
          labl={props.labl}
          style={props.stl}
          cv={props.fnsub}
          fnc={props.fnc1}
          x={props.x1}
          date={"DAY"}
          placeHolder={"DD"}
          id={"day"}
          max={2}
          p="[0-9]{2}"
        >
          {props.span3}
        </Form>
        <Form
          field2={props.field2}
          empty={props.empty}
          labl={props.labl}
          style={props.stl}
          cv={props.fnsub}
          fnc={props.fnc2}
          x={props.x2}
          date={"MONTH"}
          placeHolder={"MM"}
          id={"month"}
          max={2}
          p="[0-9]{2}"
        >
          {props.span2}
        </Form>
        <Form
          field3={props.field3}
          empty={props.empty}
          labl={props.labl}
          style={props.stl}
          cv={props.fnsub}
          fnc={props.fnc3}
          x={props.x3}
          date={"YEAR"}
          placeHolder={"YY"}
          id={"year"}
          max={4}
          p="[0-9]{4}"
        >
          {props.span1}
        </Form>
      </div>
      <div className="d-hr-arr">
        <hr></hr>
        <button type="submit" className="arrow" form="day" onClick={props.z}>
          <div className="arrr"></div>
          <div className="line"></div>
        </button>
      </div>
    </>
  );
}
export default UpperPart;
