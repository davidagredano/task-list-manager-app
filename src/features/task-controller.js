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

  toggleTaskCompletion(id, projectId) {
    this.dataAccessor.toggleTaskCompletion(id, projectId);
  }

  updateTask(
    id,
    projectId,
    title,
    description,
    dueDate,
    priority,
    newProjectId
  ) {
    this.dataAccessor.updateTask(
      id,
      projectId,
      title,
      description,
      dueDate,
      priority,
      newProjectId
    );
  }

  deleteTask(id, projectId) {
    this.dataAccessor.deleteTask(id, projectId);
  }
}

export default TaskController;
