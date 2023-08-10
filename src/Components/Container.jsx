import LowerPart from "./LowerPart";
import UpperPart from "./UpperPart";
import "./Container.css";
import { useState } from "react";
function Container() {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");
  const [age, setAge] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [color, setColor] = useState({ border: "1px solid black" });
  const [labelcolor, setLabelColor] = useState({ color: "black" });
  const [empty, setEmpty] = useState(false);
  const [spanContent1, setSpanContent1] = useState("");
  const [spanContent2, setSpanContent2] = useState("");
  const [spanContent3, setSpanContent3] = useState("");
  const [field1, setField1] = useState(null);
  const [field2, setField2] = useState(null);
  const [field3, setField3] = useState(null);

  function changeHandlerone(e) {
    e.preventDefault();

    setInput1(e.target.value);
  }
  function changeHandlerTwo(e) {
    e.preventDefault();

    setInput2(e.target.value);
  }
  function changeHandlerThree(e) {
    e.preventDefault();

    setInput3(e.target.value);
  }
  function tr() {
    alert("hi");
  }
  function v() {
    if (input1 === "" && input2 === "" && input3 === "") {
      setField1("enter the field");
      setField2("enter the field");
      setField3("enter the field");
      setColor({ border: "1px solid red" });
      setLabelColor({ color: "red" });
      setAge("--");
      setMonth("--");
      setDay("--");
      return;
    }
    if (input1 === "") {
      if (input2 === "") {
        setField1("enter the field");
        setField2("enter the field");
        setField3(null);
      } else if (input3 === "") {
        setField3("enter the field");
        setField1("enter the field");
        setField2(null);
      } else {
        setField1("enter the field");
        setField2(null);
        setField3(null);
      }
    } else if (input3 === "") {
      if (input2 === "") {
        setField2("enteer the field");
        setField3("enter the field");
        setField1(null);
      } else {
        setField3("enter the field");
        setField2(null);
      }
    } else if (input3 === "") {
      if (input1 === "") {
        setField1("enter the field");
        setField3("enter the field");
      } else {
        setField1(null);
        setField3("enter the field");
      }
    } else if (input2 === "") {
      if (input3 === "") {
        setField2("enter the field");
        setField3("enter the field");
      } else {
        setField3(null);
        setField1(null);
        setField2("enter the field");
      }
    } else {
      setField3(null);
      setField1(null);
      setField2(null);
    }
    if (input1 === "" || input2 === "" || input3 === "") {
      setAge("--");
      setMonth("--");
      setDay("--");
      setColor({ border: "1px solid red" });
      setLabelColor({ color: "red" });

      return;
    }

    if (input3 < 100 || input3 > 2023) {
      setColor({ border: "1px solid red" });
      setLabelColor({ color: "red" });
      setEmpty(true);
      setAge("--");
      setMonth("--");
      setDay("--");
      setSpanContent1("must be in the past");
      setField1(null);
      return;
    }
    if (input2 < 1 || input2 > 12) {
      setColor({ border: "1px solid red" });
      setLabelColor({ color: "red" });
      setEmpty(true);
      setAge("--");
      setMonth("--");
      setDay("--");
      setSpanContent2("must be valid month");
      setField1(null);
      return;
    }
    if (input1 < 1 || input1 > 31) {
      setColor({ border: "1px solid red" });
      setLabelColor({ color: "red" });
      setEmpty(true);
      setAge("--");
      setMonth("--");
      setDay("--");
      setSpanContent3("must be valid day");
      setField1(null);
      return;
    }
    setField1(null);
    setField2(null);
    setField3(null);
    setSpanContent1("");
    setSpanContent2("");
    setSpanContent3("");
    setEmpty(false);
    setField1(null);
    setColor({ border: "1px solid black" });
    setLabelColor({ color: "black" });
    let bDate = new Date(input3, input2, input1);

    let date = new Date();
    let tYear = date.getFullYear();
    let tMonth = date.getMonth() + 1;
    let tDate = date.getDate();

    let bYear = bDate.getFullYear();
    let bMonth = bDate.getMonth();
    let bdate = bDate.getDate();

    let yr = tYear - bYear;
    let mnth = tMonth - bMonth;

    let dte = tDate - bdate;
    if (mnth < 0) {
      yr--;
      mnth = 12 + mnth;
    }
    if (dte < 0) {
      if (mnth === 0) {
        yr--;
        mnth = 11;
      }

      dte = 31 + dte;
    }
    setAge(yr);
    setMonth(mnth);
    setDay(dte);
  }
  return (
    <>
      <div className="container">
        <UpperPart
          span3={spanContent3}
          span2={spanContent2}
          span1={spanContent1}
          x1={input1}
          x2={input2}
          x3={input3}
          fnc1={changeHandlerone}
          fnc2={changeHandlerTwo}
          fnc3={changeHandlerThree}
          z={v}
          fnsub={tr}
          stl={color}
          labl={labelcolor}
          empty={empty}
          field1={field1}
          field2={field2}
          field3={field3}
        />
        <LowerPart
          x1={input1}
          x2={input2}
          x3={input3}
          age={age}
          months={month}
          days={day}
        />
      </div>
    </>
  );
}
export default Container;
