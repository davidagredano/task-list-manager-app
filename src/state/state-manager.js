import LocalStorageService from "../services/local-storage-service";
import ProjectService from "../services/project-service";
import TaskService from "../services/task-service";

import { ProjectBoard, ProjectListItems } from "../components";

const dataAccessService = new LocalStorageService();

class StateManager {
  constructor() {
    this.taskService = new TaskService(dataAccessService);
    this.projectService = new ProjectService(dataAccessService);
  }

  initComponent(entryPointElementId, component) {
    const entryPoint = document.getElementById(entryPointElementId);
    entryPoint.appendChild(component);
  }

  updateComponent(entryPointElementId, component) {
    const entryPoint = document.getElementById(entryPointElementId);
    entryPoint.innerHTML = "";
    entryPoint.appendChild(component);
  }

  updateTaskComponents() {
    this.updateComponent("project-board-component", ProjectBoard());
  }

  updateProjectComponents() {
    this.updateComponent("project-list-component", ProjectListItems());
    this.updateComponent("project-board-component", ProjectBoard());
  }

  createTask(task) {
    this.taskService.createTask(task);
    this.updateTaskComponents();
  }

  toggleTaskCompletion(task) {
    this.taskService.toggleTaskCompletion(task);
    this.updateTaskComponents();
  }

  updateTask(task, newProjectId) {
    this.taskService.updateTask(task, newProjectId);
    this.updateTaskComponents();
  }

  deleteTask(task) {
    this.taskService.deleteTask(task);
    this.updateTaskComponents();
  }

  createProject(project) {
    this.projectService.createProject(project);
    this.updateProjectComponents();
  }

  updateProject(project) {
    this.projectService.updateProject(project);
    this.updateProjectComponents();
  }

  deleteProject(project) {
    this.projectService.deleteProject(project);
    this.updateProjectComponents();
  }

  getProjects() {
    return this.projectService.getProjects();
  }
}

export default StateManager;
