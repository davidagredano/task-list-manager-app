class Task {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.completed = false;
  }
}

class TaskController {
  #tasks;

  constructor() {
    this.#tasks = [];
  }

  createTask(title, description, dueDate, priority) {
    const task = new Task(title, description, dueDate, priority);
    this.#tasks.push(task);
  }

  toggleTaskCompletion(index) {
    const task = this.#tasks[index];
    task.completed = !task.completed;
  }

  updateTask(index, title, description, dueDate, priority) {
    const task = this.#tasks[index];
    task.title = title;
    task.description = description;
    task.dueDate = dueDate;
    task.priority = priority;
  }

  deleteTask(index) {
    this.#tasks.splice(index, 1);
  }

  getTasks() {
    return this.#tasks;
  }
}

export default TaskController;
