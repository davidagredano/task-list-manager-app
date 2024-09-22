import LocalStorageService from "./services/local-storage-service";

import { ProjectBoard, ProjectListItems } from "./components";

class Controller {
  constructor() {
    this.dataAccessService = new LocalStorageService();
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
    this.dataAccessService.createTask(task);
    this.updateTaskComponents();
  }

  toggleTaskCompletion(task) {
    this.dataAccessService.toggleTaskCompletion(task);
    this.updateTaskComponents();
  }

  updateTask(task, newProjectId) {
    this.dataAccessService.updateTask(task, newProjectId);
    this.updateTaskComponents();
  }

  deleteTask(task) {
    this.dataAccessService.deleteTask(task);
    this.updateTaskComponents();
  }

  getTasksArray(projectId) {
    return this.dataAccessService.getTasksArray(projectId);
  }

  createProject(project) {
    this.dataAccessService.createProject(project);
    this.updateProjectComponents();
  }

  updateProject(project) {
    this.dataAccessService.updateProject(project);
    this.updateProjectComponents();
  }

  deleteProject(project) {
    this.dataAccessService.deleteProject(project);
    this.updateProjectComponents();
  }

  getProjects() {
    return this.dataAccessService.getProjects();
  }

  getProjectsArray() {
    return this.dataAccessService.getProjectsArray();
  }
}

export default Controller;
