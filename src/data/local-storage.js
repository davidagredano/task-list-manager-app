import Task from "../features/task.js";
import Project from "../features/project.js";

class LocalStorageDataAccessor {
  constructor() {}

  createTask(id, title, description, dueDate, priority, projectId) {
    const task = new Task(id, title, description, dueDate, priority, projectId);
    const projects = this.getProjects();
    const project = this.getItemById(projects, projectId || "default");
    project.tasks.push(task);
    this.saveProjects(projects);
  }

  toggleTaskCompletion(id, projectId) {
    const projects = this.getProjects();
    const project = this.getItemById(projects, projectId || "default");
    const task = this.getItemById(project.tasks, id);
    task.completed = !task.completed;
    this.saveProjects(projects);
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
    const projects = this.getProjects();
    const project = this.getItemById(projects, projectId || "default");
    const task = this.getItemById(project.tasks, id);
    task.title = title || task.title;
    task.description = description || task.description;
    task.dueDate = dueDate || task.dueDate;
    task.priority = priority || task.priority;

    if (newProjectId) {
      const oldProject = project;
      const newProject = this.getItemById(projects, newProjectId);
      oldProject.tasks = this.deleteItemById(project.tasks, id);
      newProject.tasks.push(task);
    }
    this.saveProjects(projects);
  }

  deleteTask(id, projectId) {
    const projects = this.getProjects();
    const project = this.getItemById(projects, projectId || "default");
    project.tasks = this.deleteItemById(project.tasks, id);
    this.saveProjects(projects);
  }

  createProject(id, name) {
    const project = new Project(id, name);
    const projects = this.getProjects();
    projects.push(project);
    this.saveProjects(projects);
  }

  updateProject(id, name) {
    const projects = this.getProjects();
    const project = this.getProjectById(projects, id);
    project.name = name || project.name;
    this.saveProjects(projects);
  }

  deleteProject(id) {
    const projects = this.getProjects();
    const filteredProjects = this.deleteItemById(projects, id);
    this.saveProjects(filteredProjects);
  }

  setDefaultProject() {
    const defaultProject = new Project("default", "My tasks");
    localStorage.setItem("projects", JSON.stringify([defaultProject]));
  }

  getProjects() {
    return JSON.parse(localStorage.getItem("projects"));
  }

  getProjectById(projects, id) {
    return projects.find((project) => project.id === id);
  }

  saveProjects(projects) {
    localStorage.setItem("projects", JSON.stringify(projects));
  }

  resetProjects() {
    localStorage.removeItem("projects");
  }

  getItemById(arrOfObj, id) {
    return arrOfObj.find((item) => item.id === id);
  }

  deleteItemById(arrOfObj, id) {
    return arrOfObj.filter((item) => item.id !== id);
  }
}

export default LocalStorageDataAccessor;
