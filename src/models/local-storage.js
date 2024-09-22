import Factory from "../factory";

const factory = new Factory();

class Model {
  constructor() {}

  static createTask(task) {
    const projects = this.getProjects();
    projects[task.projectId].tasks[task.id] = task;
    this.saveProjects(projects);
  }

  static toggleTaskCompletion(task) {
    const projects = this.getProjects();
    const targetTask = projects[task.projectId].tasks[task.id];
    targetTask.completed = !targetTask.completed;
    this.saveProjects(projects);
  }

  static updateTask(task, newProjectId) {
    const projects = this.getProjects();

    if (newProjectId) {
      delete projects[task.projectId].tasks[task.id];
      projects[newProjectId].tasks[task.id] = task;
    } else {
      projects[task.projectId].tasks[task.id] = task;
    }

    this.saveProjects(projects);
  }

  static deleteTask(task) {
    const projects = this.getProjects();
    delete projects[task.projectId].tasks[task.id];
    this.saveProjects(projects);
  }

  static getTasksArray(projectId) {
    const projects = this.getProjects();
    const tasks = projects[projectId].tasks;
    return Object.values(tasks);
  }

  static createProject(project) {
    const projects = this.getProjects();
    projects[project.id] = project;
    this.saveProjects(projects);
  }

  static updateProject(project) {
    const projects = this.getProjects();
    projects[project.id] = project;
    this.saveProjects(projects);
  }

  static deleteProject(project) {
    const projects = this.getProjects();
    delete projects[project.id];
    this.saveProjects(projects);
  }

  static setDefaultProject() {
    const defaultProject = factory.createProject("My tasks");
    const projects = {};
    projects[defaultProject.id] = defaultProject;
    this.saveProjects(projects);
  }

  static getProjects() {
    if (localStorage.getItem("projects") === null) {
      this.setDefaultProject();
    }
    return JSON.parse(localStorage.getItem("projects"));
  }

  static getProjectsArray() {
    const projects = this.getProjects();
    return Object.values(projects);
  }

  static saveProjects(projects) {
    localStorage.setItem("projects", JSON.stringify(projects));
  }

  static resetProjects() {
    localStorage.removeItem("projects");
  }

  static getItemById(arrOfObj, id) {
    return arrOfObj.find((item) => item.id === id);
  }

  static getIndexById(arrOfObj, id) {
    return arrOfObj.findIndex((item) => item.id === id);
  }

  static deleteItemById(arrOfObj, id) {
    return arrOfObj.filter((item) => item.id !== id);
  }
}

export default Model;
