import React from "react";
import Pixel from "./Pixel";
import colors from "../colors";

function ColorPicker(props) {
  return (
    <div className="colorpicker">
      {colors.map((color, index) => (
        <Pixel
          onClick={() => props.setColor(index)}
          key={index}
          background={color}
          current={colors[props.currentColor] === color}
        />
      ))}
    </div>
  );
}

export default ColorPicker;
