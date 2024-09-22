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

  updateProjectList() {
    this.updateComponent("#project-list-component", ProjectListItems());
  }

  updateProjectBoard(project) {
    this.updateComponent("#project-board-component", ProjectBoard(project));
  }

  createTask(task) {
    this.model.createTask(task);
    const projects = this.model.getProjects();
    const project = projects[task.projectId];
    this.updateProjectBoard(project);
  }

  toggleTaskCompletion(task) {
    this.model.toggleTaskCompletion(task);
    const projects = this.model.getProjects();
    const project = projects[task.projectId];
    this.updateProjectBoard(project);
  }

  updateTask(task, newProjectId) {
    this.model.updateTask(task, newProjectId);
    const projects = this.model.getProjects();
    const project = projects[task.projectId];
    this.updateProjectBoard(project);
  }

  deleteTask(task) {
    this.model.deleteTask(task);
    const projects = this.model.getProjects();
    const project = projects[task.projectId];
    this.updateProjectBoard(project);
  }

  getTasksArray(projectId) {
    return this.model.getTasksArray(projectId);
  }

  createProject(project) {
    this.model.createProject(project);
    this.updateProjectList();
    this.updateProjectBoard(project);
  }

  updateProject(project) {
    this.model.updateProject(project);
    this.updateProjectList();
    this.updateProjectBoard(project);
  }

  deleteProject(project) {
    this.model.deleteProject(project);
    const firstProject = this.model.getProjectsArray()[0];
    this.updateProjectList();
    this.updateProjectBoard(firstProject);
  }

  getProjects() {
    return this.model.getProjects();
  }

  getProjectsArray() {
    return this.model.getProjectsArray();
  }
}

export default Controller;
