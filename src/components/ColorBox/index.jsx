import { useState } from "react";

function ColorBox(props) {
  const [color, setColor] = useState("white");
  return (
    <div>
      {color}
      <button onClick={() => setColor("green")}>Long</button>
      <button onClick={() => setColor("red")}>Short </button>
    </div>
  );
}

export default ColorBox;
