import { useState } from "react";

const Tasks = () => {
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
    <>
      {tasks.map((task) => (
        <h3 key={task.id}>{task.text}</h3>
      ))}
    </>
  );
};

export default Tasks;
