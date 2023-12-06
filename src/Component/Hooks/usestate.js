import React from "react";
import { useState } from "react";
function Usestate() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>clickme</button>
      <h2>usestate{count}</h2>
    </div>
  );
}

export default Usestate;
