import React, { useState } from "react";
import colors from "../colors";
import Pixel from "./Pixel";

function Canvas(props) {
  const [matrix, setMatrix] = useState(
    Array(30)
      .fill()
      .map(() => Array(22).fill(0)) // background: 0 -> white
  );

  function changeColor(rowIndex, colIndex) {
    const newMatrix = JSON.parse(JSON.stringify(matrix));

    newMatrix[rowIndex][colIndex] = props.currentColor;

    setMatrix(newMatrix);
  }

  return (
    <div className="canvas">
      {matrix.map((row, rowIndex) =>
        row.map((_, colIndex) => {
          return (
            <Pixel
              key={`${rowIndex}-${colIndex}`}
              background={colors[matrix[rowIndex][colIndex]]}
              onClick={() => changeColor(rowIndex, colIndex)}
            />
          );
        })
      )}
    </div>
  );
}

export default Canvas;
