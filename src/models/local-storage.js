import Factory from "../factory";

const factory = new Factory();

class Model {
  constructor() {}

  createTask(task) {
    const projects = this.getProjects();
    projects[task.projectId].tasks[task.id] = task;
    this.saveProjects(projects);
  }

  toggleTaskCompletion(task) {
    const projects = this.getProjects();
    const targetTask = projects[task.projectId].tasks[task.id];
    targetTask.completed = !targetTask.completed;
    this.saveProjects(projects);
  }

  updateTask(task, newProjectId) {
    const projects = this.getProjects();

    if (newProjectId) {
      delete projects[task.projectId].tasks[task.id];
      projects[newProjectId].tasks[task.id] = task;
    } else {
      projects[task.projectId].tasks[task.id] = task;
    }

    this.saveProjects(projects);
  }

  deleteTask(task) {
    const projects = this.getProjects();
    delete projects[task.projectId].tasks[task.id];
    this.saveProjects(projects);
  }

  getTasksArray(projectId) {
    const projects = this.getProjects();
    const tasks = projects[projectId].tasks;
    return Object.values(tasks);
  }

  createProject(project) {
    const projects = this.getProjects();
    projects[project.id] = project;
    this.saveProjects(projects);
  }

  updateProject(project) {
    const projects = this.getProjects();
    projects[project.id] = project;
    this.saveProjects(projects);
  }

  deleteProject(project) {
    const projects = this.getProjects();
    delete projects[project.id];
    this.saveProjects(projects);
  }

  setDefaultProject() {
    const defaultProject = factory.createProject("My tasks");
    const projects = {};
    projects[defaultProject.id] = defaultProject;
    this.saveProjects(projects);
  }

  getProjects() {
    if (localStorage.getItem("projects") === null) {
      this.setDefaultProject();
    }
    return JSON.parse(localStorage.getItem("projects"));
  }

  getProjectsArray() {
    const projects = this.getProjects();
    return Object.values(projects);
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

  getIndexById(arrOfObj, id) {
    return arrOfObj.findIndex((item) => item.id === id);
  }

  deleteItemById(arrOfObj, id) {
    return arrOfObj.filter((item) => item.id !== id);
  }
}

export default Model;
