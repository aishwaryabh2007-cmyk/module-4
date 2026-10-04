import { useState } from "react";
import "./App.css";

function App() {
  const [marks, setMarks] = useState(50);

  const increaseMarks = () => {
    setMarks(marks + 5);
  };

  const decreaseMarks = () => {
    if (marks >= 5) {
      setMarks(marks - 5);
    }
  };

  return (
    <div className="app">
      <h1>Student Marks Using State</h1>

      <div className="marks-card">
        <h2>Student Details</h2>

        <p>
          <strong>Student Name:</strong> Rahul
        </p>

        <p>
          <strong>Subject:</strong> Java
        </p>

        <p className="marks">
          <strong>Marks:</strong> {marks}
        </p>

        <button onClick={increaseMarks}>
          Increase Marks
        </button>

        <button onClick={decreaseMarks}>
          Decrease Marks
        </button>
      </div>
    </div>
  );
}

export default App;