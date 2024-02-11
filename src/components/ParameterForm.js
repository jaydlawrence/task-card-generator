import React, { useState } from "react";

import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

function ParameterForm({ submitParameters }) {
  const Operations = ["Addition", "Subtraction", "Multiplication", "Division"];
  const DifficultyLevels = ["1", "2", "3", "4", "5", "6", "7", "8"];

  const [values, setValues] = useState({
    instructions: `Write the equation below in your Math Journal
Using the Checkerboard and the Numeral Tiles set up the equation below.
Solve the equation and record the answer in your Math Journal.
Check your answer with the answer on the back of this card.`,
    firstNumberRangeStart: 1,
    firstNumberRangeEnd: 10,
    secondNumberRangeStart: 1,
    secondNumberRangeEnd: 10,
    operation: Operations[0],
    difficultyLevel: "1",
    numberOfCards: 1,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    submitParameters({ ...values, random: Math.random() });
  };

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };
  return (
    <form onSubmit={handleSubmit}>
      <FormControl fullWidth>
        <TextField
          id="instructions"
          label="Instructions"
          variant="standard"
          value={values["instructions"]}
          multiline
          rows={2}
          maxRows={4}
          inputProps={{
            name: "instructions",
            onChange: handleChange,
          }}
        />
      </FormControl>
      <FormControl fullWidth>
        <TextField
          id="firstNumberRangeStart"
          label="First Number Range Start"
          variant="standard"
          value={values["firstNumberRangeStart"]}
          inputProps={{
            name: "firstNumberRangeStart",
            onChange: handleChange,
          }}
        />
      </FormControl>
      <FormControl fullWidth>
        <TextField
          id="firstNumberRangeEnd"
          label="First Number Range End"
          variant="standard"
          value={values["firstNumberRangeEnd"]}
          inputProps={{
            name: "firstNumberRangeEnd",
            onChange: handleChange,
          }}
        />
      </FormControl>

      <FormControl fullWidth>
        <TextField
          id="secondNumberRangeStart"
          label="Second Number Range Start"
          variant="standard"
          value={values["secondNumberRangeStart"]}
          inputProps={{
            name: "secondNumberRangeStart",
            onChange: handleChange,
          }}
        />
      </FormControl>
      <FormControl fullWidth>
        <TextField
          id="secondNumberRangeEnd"
          label="Second Number Range End"
          variant="standard"
          value={values["secondNumberRangeEnd"]}
          inputProps={{
            name: "secondNumberRangeEnd",
            onChange: handleChange,
          }}
        />
      </FormControl>
      <FormControl fullWidth>
        <InputLabel id="operation-select-label">operation</InputLabel>
        <Select
          labelId="operation-select-label"
          id="operation-select"
          value={values["operation"] ?? ""}
          label="operation"
          name="operation"
          onChange={handleChange}
        >
          {Object.values(Operations).map((operation) => (
            <MenuItem value={operation} key={operation}>
              {operation}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={values["difficultyLevel"] ?? ""}
          label="Difficulty Level"
          name="difficultyLevel"
          onChange={handleChange}
        >
          {DifficultyLevels.map((operation) => (
            <MenuItem value={operation} key={operation}>
              {operation}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <TextField
          id="numberOfCards"
          label="Number Of Cards"
          variant="standard"
          value={values["numberOfCards"]}
          inputProps={{
            name: "numberOfCards",
            onChange: handleChange,
          }}
        />
      </FormControl>
      <button type="submit">Generate Cards</button>
    </form>
  );
}

export default ParameterForm;
