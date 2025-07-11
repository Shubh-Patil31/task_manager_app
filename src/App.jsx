import { useState } from "react";
import TaskForm from "./component/TaskForm";
import TaskList from "./component/TaskList";

const App = () => {
  const [tasks, setTasks] = useState([]); // state managment of task list
  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
  }); // state managment of taskForm

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTask({
      ...newTask,
      [name]: value,
    });
  };

  const handleAddTask = (e) => {
    e.preventDefault(); //when we submit form -> page is refresh and task list is lost -
    if (newTask.title.trim() === "") return;

    setTasks([
      ...tasks,
      {
        id: Date.now(),
        title: newTask.title,
        description: newTask.description,
      },
    ]);

    setNewTask({
      title: "",
      description: "",
    });
  };

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className="task-manager">
      <h1>Task Manager</h1>
      <TaskForm
        newTask={newTask}
        onInputChange={handleInputChange}
        onAddTask={handleAddTask}
      />
      <TaskList tasks={tasks} onDeleteTask={handleDeleteTask} />
    </div>
  );
};

export default App;
