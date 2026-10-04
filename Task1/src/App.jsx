import Student from "./components/Student";
import "./App.css";

function App() {
  return (
    <div className="app">
      <h1>Student Profile Using Props</h1>

      <Student
        name="Aishwarya BH"
        rollNo="YOUR ROLL NO"
        course="B.Tech AI & Data Science"
        college="Prathyusha Engineering College"
      />
    </div>
  );
}

export default App;