import Model from "./models/local-storage";

import { ProjectBoard, ProjectListItems } from "./components";

class Controller {
  constructor() {
    this.model = new Model();
  }

  initComponent(selector, component) {
    const entryPoint = document.querySelector(selector);
    entryPoint.appendChild(component);
  }

  updateComponent(selector, component) {
    const entryPoint = document.querySelector(selector);
    entryPoint.innerHTML = "";
    entryPoint.appendChild(component);
  }

  updateTaskComponents() {
    this.updateComponent("#project-board-component", ProjectBoard());
  }

  updateProjectComponents() {
    this.updateComponent("#project-list-component", ProjectListItems());
    this.updateComponent("#project-board-component", ProjectBoard());
  }

  createTask(task) {
    this.model.createTask(task);
    this.updateTaskComponents();
  }

  toggleTaskCompletion(task) {
    this.model.toggleTaskCompletion(task);
    this.updateTaskComponents();
  }

  updateTask(task, newProjectId) {
    this.model.updateTask(task, newProjectId);
    this.updateTaskComponents();
  }

  deleteTask(task) {
    this.model.deleteTask(task);
    this.updateTaskComponents();
  }

  getTasksArray(projectId) {
    return this.model.getTasksArray(projectId);
  }

  createProject(project) {
    this.model.createProject(project);
    this.updateProjectComponents();
  }

  updateProject(project) {
    this.model.updateProject(project);
    this.updateProjectComponents();
  }

  deleteProject(project) {
    this.model.deleteProject(project);
    this.updateProjectComponents();
  }

  getProjects() {
    return this.model.getProjects();
  }

  getProjectsArray() {
    return this.model.getProjectsArray();
  }
}

export default Controller;
