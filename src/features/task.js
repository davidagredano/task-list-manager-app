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

export default Task;
