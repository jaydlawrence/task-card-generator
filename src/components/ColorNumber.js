import React from "react";
import { View } from "@react-pdf/renderer";
const colors = ["green", "blue", "red"];

function ColorNumber({ numberString }) {
  const reversedCharArray = [];
  for (const char of numberString) {
    reversedCharArray.unshift(char);
  }
  return (
    <>
      {reversedCharArray
        .map((char, index) => (
          <View style={{ color: colors[index % 3] }}>{char}</View>
        ))
        .reverse()}
    </>
  );
}

export default ColorNumber;
