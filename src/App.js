import logo from "./logo.svg";
import "./App.css";
import ParameterForm from "./components/ParameterForm";
import { useState } from "react";
import PDFView from "./components/PDFView";

function App() {
  const [values, setValues] = useState({});
  return (
    <div className="App">
      <div style={{ maxWidth: 500 }}>
        <ParameterForm submitParameters={setValues} />
      </div>
      <div>
        <PDFView parameters={values} />
      </div>
    </div>
  );
}

export default App;
