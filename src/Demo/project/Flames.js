import React, { useRef } from "react";

const Work = (props) => {
  let n1 = props.boy.length;
  let n2 = props.girl.length;
  for (let i = 0; i < n1; i++) {
    for (let j = 0; j < n2; j++) {
      if (props.boy[i] == props.girl[j]) {
        props.boy = props.boy.slice(0, i) + props.boy.slice(i + 1);
        props.girl = props.girl.slice(0, j) + props.girl.slice(j + 1);
        n1 = props.boy.length; // Update length after erasing
        n2 = props.girl.length; // Update length after erasing
        i--;
        break;
      }
    }
  }
  const c = props.boy.length + props.girl.length;

  let v = ["Friend", "Love", "Affection", "Marriage", "enemy", "sister"];
  let i = 0;

  while (v.length > 1) {
    let count = 0;
    for (; i < v.length; i++) {
      if (i === v.length) {
        i = 0;
      }
      count++;
      if (count === c) {
        v.splice(i, 1);
        break;
      }
    }
  }
  return <h2>{v[0]}</h2>;
};
const click = (props) => {
  return <Work boy={props.boy} girl={props.girl} />;
};
function Flames() {
  const girl = useRef("");
  const boy = useRef("");
  return (
    <div>
      <input ref={boy}></input>
      <input ref={girl}></input>
      <button onClick={() => click(boy, girl)}></button>
    </div>
  );
}

export default Flames;
