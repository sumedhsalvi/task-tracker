import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "text1",
      day: "day1",
      reminder: true,
    },
    {
      id: 2,
      text: "text2",
      day: "day2",
      reminder: true,
    },
    {
      id: 3,
      text: "text3",
      day: "day3",
      reminder: false,
    },
  ]);

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
