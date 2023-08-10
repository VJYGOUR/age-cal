import { useState } from "react";

function Form(props) {
  return (
    <form className="display" onSubmit={props.cv}>
      <label htmlFor="numberInput" style={props.labl}>
        {props.date}
      </label>
      <input
        style={props.style}
        onChange={props.fnc}
        type="number"
        maxLength={props.max}
        pattern={props.p}
        id={props.id}
        placeholder={props.placeHolder}
        value={props.x}
      ></input>
      {props.empty && (
        <span
          style={{
            color: "red",
            fontSize: "0.6rem",
            fontWeight: "300",
            marginTop: "2px",
          }}
        >
          {props.children}
        </span>
      )}
      {props.field1 && (
        <span
          style={{
            color: "red",
            fontSize: "0.6rem",
            fontWeight: "300",
            marginTop: "2px",
          }}
        >
          {props.field1}
        </span>
      )}
      {props.field2 && (
        <span
          style={{
            color: "red",
            fontSize: "0.6rem",
            fontWeight: "300",
            marginTop: "2px",
          }}
        >
          {props.field2}
        </span>
      )}
      {props.field3 && (
        <span
          style={{
            color: "red",
            fontSize: "0.6rem",
            fontWeight: "300",
            marginTop: "2px",
          }}
        >
          {props.field3}
        </span>
      )}
    </form>
  );
}
export default Form;
