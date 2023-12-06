import React, { useEffect, useState } from "react";

function Useeffect() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("mount");
  });
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>CLickyou</button>
      <h2>{count}</h2>
    </div>
  );
}

export default Useeffect;
