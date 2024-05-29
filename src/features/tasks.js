class Task {
  constructor(id, title, description, dueDate, priority, project) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.completed = false;
    this.project = project;
  }
}

class TaskController {
  constructor(dataAccessor) {
    this.dataAccessor = dataAccessor;
  }

  createTask(id, title, description, dueDate, priority, project) {
    const task = new Task(id, title, description, dueDate, priority, project);
    this.dataAccessor.createTask(task);
  }

  toggleTaskCompletion(id) {
    this.dataAccessor.toggleTaskCompletion(id);
  }

  updateTask(id, title, description, dueDate, priority, project) {
    this.dataAccessor.updateTask(
      id,
      title,
      description,
      dueDate,
      priority,
      project
    );
  }

  deleteTask(id) {
    this.dataAccessor.deleteTask(id);
  }
}

export default TaskController;
