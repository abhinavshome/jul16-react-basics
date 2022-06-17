import { useState } from "react";
import "./OnOffSwitch.css";

const OnOfSwitch = () => {
  const [switchState, setSwitchState] = useState(false);

  return (
    <div>
      <div className={switchState ? "on" : "off"}></div>
      <button onClick={() => setSwitchState(true)}>ON</button>
      <button onClick={() => setSwitchState(false)}>OFF</button>
    </div>
  );
};

export default OnOfSwitch;
