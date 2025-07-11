const TaskForm = ({ newTask, onInputChange, onAddTask }) => {
  return (
    <form onSubmit={onAddTask} className="task-form">
      <div className="form-group">
        <label>Task:</label>
        <input
          type="text"
          name="title"
          value={newTask.title}
          onChange={onInputChange}
          placeholder="Enter task title"
          required
        />
      </div>
      <div className="form-group">
        <label>Description:</label>
        <textarea
          name="description"
          value={newTask.description}
          onChange={onInputChange}
          placeholder="Enter task description"
        />
      </div>
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
