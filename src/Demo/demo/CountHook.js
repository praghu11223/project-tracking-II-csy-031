import React, { useState } from "react";
import Button from "@mui/material/Button";
function Count_hook() {
  const [count, setCount] = useState(0);
  const Decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <div>
      <h2>Count : {count}</h2>

      <Button
        variant="contained"
        color="success"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </Button>
      <Button variant="contained" color="error" onClick={Decrement}>
        Decrement
      </Button>
    </div>
  );
}

export default Count_hook;
