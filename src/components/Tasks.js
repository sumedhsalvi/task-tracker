const tasks = [
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
];

const Tasks = () => {
  return (
    <>
      {tasks.map((task) => (
        <h3>{task.text}</h3>
      ))}
    </>
  );
};

export default Tasks;
