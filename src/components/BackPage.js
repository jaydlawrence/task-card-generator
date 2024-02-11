import React from "react";
import { Page, Text, StyleSheet, View } from "@react-pdf/renderer";

// Create styles
const styles = StyleSheet.create({
  page: {
    backgroundColor: "#FFFFFF",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});
const colors = ["green", "blue", "red"];
const borderColors = {
  1: "red",
  2: "orange",
  3: "yellow",
  4: "green",
  5: "blue",
  6: "dark-blue",
  7: "purple",
  8: "gold",
};

const operationMapping = {
  Addition: "+",
  Subtraction: "-",
  Multiplication: "x",
  Division: "÷",
};

function BackPage({
  firstNumber,
  secondNumber,
  operation,
  instructions,
  difficultyLevel,
}) {
  let answer = 0;
  switch (operation) {
    case "Subtraction":
      answer = firstNumber - secondNumber;
      break;
    case "Multiplication":
      answer = firstNumber * secondNumber;
      break;
    case "Division":
      answer = firstNumber / secondNumber;
      break;
    default:
      answer = firstNumber + secondNumber;
  }
  return (
    <Page
      size={[76.2, 127]}
      orientation={"landscape"}
      style={styles.page}
      dpi={300}
    >
      <div
        style={{
          height: "100%",
          width: "100%",
          boxSizing: "border-box",
          border: "10px solid white",
        }}
      >
        <div
          style={{
            height: "100%",
            width: "100%",
            boxSizing: "border-box",
            border: `20px solid ${
              difficultyLevel && borderColors[difficultyLevel]
                ? borderColors[difficultyLevel]
                : "black"
            }`,
          }}
        >
          <Text
            style={{
              fontSize: "9px",
              margin: 10,
              height: "30%",
            }}
          ></Text>
          <View
            style={{
              fontSize: "50px",
              marginTop: 10,
              flexDirection: "row",
              marginLeft: "auto",
              marginRight: "auto",
              height: "50%",
            }}
          >
            {firstNumber
              .toString()
              .split("")
              .reverse()
              .map((char, index) => (
                <Text
                  style={{
                    color: colors[index % 3],
                    width: 35,
                  }}
                  key={index}
                >
                  {char}
                </Text>
              ))
              .reverse()}
            <Text
              style={{
                width: 35,
                marginLeft: 10,
                marginRight: 10,
              }}
            >
              {operation && operationMapping[operation]
                ? operationMapping[operation]
                : "+"}
            </Text>
            {secondNumber
              .toString()
              .split("")
              .reverse()
              .map((char, index) => (
                <Text
                  style={{
                    color: colors[index % 3],
                    width: 35,
                  }}
                  key={index}
                >
                  {char}
                </Text>
              ))
              .reverse()}
            <Text
              style={{
                width: 35,
                marginLeft: 10,
              }}
            >
              {"="}
            </Text>
          </View>
          <View
            style={{
              fontSize: "50px",
              marginTop: 10,
              flexDirection: "row",
              marginLeft: "auto",
              marginRight: "auto",
              height: "50%",
            }}
          >
            {answer
              .toString()
              .split("")
              .map((char, index) => (
                <Text
                  style={{
                    color: "red",
                    width: 35,
                  }}
                  key={index}
                >
                  {char}
                </Text>
              ))}
          </View>
        </div>
      </div>
    </Page>
  );
}

export default BackPage;
