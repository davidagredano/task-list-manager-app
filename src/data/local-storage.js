import Task from "../features/task.js";
import Project from "../features/project.js";

class LocalStorageDataAccessor {
  constructor() {}

  createTask(id, title, description, dueDate, priority, projectId) {
    const task = new Task(id, title, description, dueDate, priority, projectId);
    if (projectId) {
      const projects = this.getProjects();
      const project = this.getItemById(projects, projectId);
      project.tasks.push(task);
      this.saveProjects(projects);
    } else {
      const tasks = this.getTasks();
      tasks.push(task);
      this.saveTasks(tasks);
    }
  }

  toggleTaskCompletion(id, projectId) {
    if (projectId) {
      const projects = this.getProjects();
      const project = this.getItemById(projects, projectId);
      const task = this.getItemById(project.tasks, id);
      task.completed = !task.completed;
      this.saveProjects(projects);
    } else {
      const tasks = this.getTasks();
      const task = this.getItemById(tasks, id);
      task.completed = !task.completed;
      this.saveTasks(tasks);
    }
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
    if (projectId) {
      const projects = this.getProjects();
      const project = this.getItemById(projects, projectId);
      const task = this.getItemById(project.tasks, id);
      task.title = title || task.title;
      task.description = description || task.description;
      task.dueDate = dueDate || task.dueDate;
      task.priority = priority || task.priority;
      if (newProjectId) {
        const newProject = this.getItemById(projects, newProjectId);
        project.tasks = project.tasks.filter((task) => task.id !== id);
        newProject.tasks.push(task);
      }
      this.saveProjects(projects);
    } else {
      const tasks = this.getTasks();
      const task = this.getItemById(tasks, id);
      task.title = title || task.title;
      task.description = description || task.description;
      task.dueDate = dueDate || task.dueDate;
      task.priority = priority || task.priority;
      this.saveTasks(tasks);
    }
  }

  deleteTask(id, projectId) {
    if (projectId) {
      const projects = this.getProjects();
      const project = this.getItemById(projects, projectId);
      project.tasks = project.tasks.filter((task) => task.id !== id);
      this.saveProjects(projects);
    } else {
      const tasks = this.getTasks().filter((task) => task.id !== id);
      this.saveTasks(tasks);
    }
  }

  createProject(id, name) {
    const project = new Project(id, name);
    const projects = this.getProjects();
    projects.push(project);
    this.saveProjects(projects);
  }

  updateProject(id, name) {
    const projects = this.getProjects();
    const project = this.getItemById(projects, id);
    project.name = name || project.name;
    this.saveProjects(projects);
  }

  deleteProject(id) {
    const projects = this.getProjects().filter((project) => project.id !== id);
    this.saveProjects(projects);
  }

  getProjects() {
    return JSON.parse(localStorage.getItem("projects"));
  }

  saveProjects(projects) {
    localStorage.setItem("projects", JSON.stringify(projects));
  }

  getTasks() {
    return JSON.parse(localStorage.getItem("tasks"));
  }

  saveTasks(tasks) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  getItemById(arrayOfObjects, id) {
    return arrayOfObjects.find((item) => item.id === id);
  }
}

export default LocalStorageDataAccessor;
