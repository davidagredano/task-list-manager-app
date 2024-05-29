class Task {
  constructor(id, title, description, dueDate, priority, projectId) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.completed = false;
    this.projectId = projectId;
  }
}

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
