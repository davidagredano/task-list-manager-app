import Model from "./models/local-storage";

import { ProjectBoard, ProjectListItems } from "./components";

class Controller {
  constructor() {
    this.model = Model;
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

  updateTaskComponents(project) {
    this.updateComponent("#project-board-component", ProjectBoard(project));
  }

  updateProjectComponents(project) {
    this.updateComponent("#project-list-component", ProjectListItems());
    this.updateComponent("#project-board-component", ProjectBoard(project));
  }

  createTask(task) {
    this.model.createTask(task);
    const projects = this.model.getProjects();
    const project = projects[task.projectId];
    this.updateTaskComponents(project);
  }

  toggleTaskCompletion(task) {
    this.model.toggleTaskCompletion(task);
    const projects = this.model.getProjects();
    const project = projects[task.projectId];
    this.updateTaskComponents(project);
  }

  updateTask(task, newProjectId) {
    this.model.updateTask(task, newProjectId);
    const projects = this.model.getProjects();
    const project = projects[task.projectId];
    this.updateTaskComponents(project);
  }

  deleteTask(task) {
    this.model.deleteTask(task);
    const projects = this.model.getProjects();
    const project = projects[task.projectId];
    this.updateTaskComponents(project);
  }

  getTasksArray(projectId) {
    return this.model.getTasksArray(projectId);
  }

  createProject(project) {
    this.model.createProject(project);
    this.updateProjectComponents(project);
  }

  updateProject(project) {
    this.model.updateProject(project);
    this.updateProjectComponents(project);
  }

  deleteProject(project) {
    this.model.deleteProject(project);
    const firstProject = this.model.getProjectsArray()[0];
    this.updateProjectComponents(firstProject);
  }

  getProjects() {
    return this.model.getProjects();
  }

  getProjectsArray() {
    return this.model.getProjectsArray();
  }
}

export default Controller;
