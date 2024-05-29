class TaskController {
  constructor(dataAccessor) {
    this.dataAccessor = dataAccessor;
  }

  createTask(id, title, description, dueDate, priority, projectId) {
    this.dataAccessor.createTask(
      id,
      title,
      description,
      dueDate,
      priority,
      projectId
    );
  }

  toggleTaskCompletion(id) {
    this.dataAccessor.toggleTaskCompletion(id);
  }

  updateTask(id, title, description, dueDate, priority, projectId) {
    this.dataAccessor.updateTask(
      id,
      title,
      description,
      dueDate,
      priority,
      projectId
    );
  }

  deleteTask(id) {
    this.dataAccessor.deleteTask(id);
  }
}

export default TaskController;
