import * as React from "react";
import Switch from "@mui/material/Switch";
import axios from "axios";
import Slider from "@mui/material/Slider";

export default function Light() {
  const [checked, setChecked] = React.useState(false);
  const [slide, setSlide] = React.useState(0);
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  React.useEffect(
    function () {
      (async () => {
        const data = await axios.get(
          `http://192.168.137.179:8080/${checked ? "on" : "off"}`
        );
      })();
    },
    [checked]
  );

  React.useEffect(
    function () {
      (async () => {
        const data = await axios.get(
          `http://192.168.137.179:5000/set_brightness?value=${slide}`
        );
      })();
    },
    [slide]
  );
  return (
    <div style={{width:"400px",margin:"auto"}}>
      <Switch
        checked={checked}
        onChange={handleChange}
        inputProps={{ "aria-label": "controlled" }}
      />
      <Slider
        size="small"
        value={slide}
        onChange={(event, newValue) => setSlide(newValue)}
        aria-label="Small"
        valueLabelDisplay="auto"
        min={0}
        max={100}
      />
    </div>
  );
}
