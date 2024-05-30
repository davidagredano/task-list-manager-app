import Task from "../features/task.js";
import Project from "../features/project.js";

class InMemoryArrayDataAccessor {
  #data;

  constructor() {
    this.#data = {
      projects: [],
      tasks: [],
    };
  }

  createTask(id, title, description, dueDate, priority, projectId) {
    const task = new Task(id, title, description, dueDate, priority, projectId);
    if (projectId) {
      const project = this.getItemById(this.getProjects(), projectId);
      project.tasks.push(task);
    } else {
      this.getTasks().push(task);
    }
  }

  toggleTaskCompletion(id, projectId) {
    if (projectId) {
      const project = this.getItemById(this.getProjects(), projectId);
      const task = this.getItemById(project.tasks, id);
      task.completed = !task.completed;
    } else {
      const task = this.getItemById(this.getTasks(), id);
      task.completed = !task.completed;
    }
  }

  updateTask(id, title, description, dueDate, priority, projectId) {
    if (projectId) {
      const project = this.getItemById(this.getProjects(), projectId);
      const task = this.getItemById(project.tasks, id);
      task.title = title || task.title;
      task.description = description || task.description;
      task.dueDate = dueDate || task.dueDate;
      task.priority = priority || task.priority;
    } else {
      const task = this.getItemById(this.getTasks(), id);
      task.title = title;
      task.description = description;
      task.dueDate = dueDate;
      task.priority = priority;
    }
  }

  deleteTask(id, projectId) {
    if (projectId) {
      const project = this.getItemById(this.getProjects(), projectId);
      project.tasks = project.tasks.filter((task) => task.id !== id);
    } else {
      this.#data.tasks = this.getTasks().filter((task) => task.id !== id);
    }
  }

  createProject(id, name) {
    const project = new Project(id, name);
    this.getProjects().push(project);
  }

  updateProject(id, name) {
    const project = this.getItemById(this.getProjects(), id);
    project.name = name || project.name;
  }

  deleteProject(id) {
    this.#data.projects = this.getProjects().filter(
      (project) => project.id !== id
    );
  }

  getData() {
    return this.#data;
  }

  getProjects() {
    return this.#data.projects;
  }

  getTasks() {
    return this.#data.tasks;
  }

  getItemById(arrayOfObjects, id) {
    return arrayOfObjects.find((item) => item.id === id);
  }
}

export default InMemoryArrayDataAccessor;
