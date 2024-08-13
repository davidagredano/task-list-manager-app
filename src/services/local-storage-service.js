import Factory from "../factory";

const factory = new Factory();

class LocalStorageService {
  constructor() {}

  createTask(task) {
    const projects = this.getProjects();
    const project = this.getItemById(projects, task.projectId);
    project.tasks.push(task);
    this.saveProjects(projects);
  }

  toggleTaskCompletion(task) {
    const projects = this.getProjects();
    const project = this.getItemById(projects, task.projectId);
    const targetTask = this.getItemById(project.tasks, task.id);
    targetTask.completed = !targetTask.completed;
    this.saveProjects(projects);
  }

  updateTask(task, newProjectId) {
    const projects = this.getProjects();
    const projectIndex = this.getIndexById(projects, task.projectId);
    const project = projects[projectIndex];

    if (newProjectId) {
      const oldProject = project;
      const newProject = this.getItemById(projects, newProjectId);
      oldProject.tasks = this.deleteItemById(project.tasks, id);
      newProject.tasks.push(task);
    } else {
      const taskIndex = this.getIndexById(project.tasks, task.id);
      project.tasks[taskIndex] = task;
    }

    this.saveProjects(projects);
  }

  deleteTask(task) {
    const projects = this.getProjects();
    const project = this.getItemById(projects, task.projectId);
    project.tasks = this.deleteItemById(project.tasks, task.id);
    this.saveProjects(projects);
  }

  createProject(project) {
    const projects = this.getProjects();
    projects.push(project);
    this.saveProjects(projects);
  }

  updateProject(project) {
    const projects = this.getProjects();
    const projectIndex = projects.findIndex((item) => item.id === project.id);
    projects[projectIndex] = project;
    this.saveProjects(projects);
  }

  deleteProject(project) {
    const projects = this.getProjects();
    const filteredProjects = this.deleteItemById(projects, project.id);
    this.saveProjects(filteredProjects);
  }

  setDefaultProject() {
    const defaultProject = factory.createProject("My tasks");
    localStorage.setItem("projects", JSON.stringify([defaultProject]));
  }

  getProjects() {
    if (localStorage.getItem("projects") === null) {
      this.setDefaultProject();
    }
    return JSON.parse(localStorage.getItem("projects"));
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

export default LocalStorageService;
