import React from "react";
import { Document, PDFViewer } from "@react-pdf/renderer";
import FrontPage from "./FrontPage";
import BackPage from "./BackPage";

function randomNumber(min, max) {
  const numberMin = parseInt(min, 10);
  const numberMax = parseInt(max, 10);
  const randomDiff = Math.round(Math.random() * (numberMax - numberMin));
  const result = randomDiff + numberMin;
  return result;
}

function PDFView({ parameters }) {
  const {
    firstNumberRangeStart,
    firstNumberRangeEnd,
    secondNumberRangeStart,
    secondNumberRangeEnd,
    operation,
    instructions,
    difficultyLevel,
    numberOfCards,
  } = parameters;

  const itterableArray = [];

  for (let i = 0; i < numberOfCards; i++) {
    itterableArray.push(null);
  }

  return (
    (firstNumberRangeEnd || secondNumberRangeEnd) && (
      <PDFViewer style={{ width: 800, height: 500 }}>
        <Document>
          {itterableArray.map((value, index) => {
            const firstNumber = randomNumber(
              firstNumberRangeStart,
              firstNumberRangeEnd
            );
            const secondNumber = randomNumber(
              secondNumberRangeStart,
              secondNumberRangeEnd
            );
            return (
              <>
                <FrontPage
                  firstNumber={firstNumber}
                  secondNumber={secondNumber}
                  operation={operation}
                  instructions={instructions}
                  difficultyLevel={difficultyLevel}
                  key={index}
                />
                <BackPage
                  firstNumber={firstNumber}
                  secondNumber={secondNumber}
                  operation={operation}
                  instructions={instructions}
                  difficultyLevel={difficultyLevel}
                  key={index}
                />
              </>
            );
          })}
        </Document>
      </PDFViewer>
    )
  );
}

export default PDFView;
