import React, { useState } from "react";
import { Button } from "@mui/material";
function Weather(props) {
  const [weather, upweather] = useState("Sunny");
  const up = () => {
    upweather("Cloudy");
  };
  return (
    <div>
      <h1>City : {props.name}</h1>
      <h1>Weather : {weather}</h1>
      <Button variant="contained" disableElevation onClick={up}> 
      Refresh weather
</Button>
    </div>
  );
}

export default Weather;
