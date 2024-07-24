import createTask from "../factories/task-factory";
import createProject from "../factories/project-factory";

class InMemoryService {
  #data;

  constructor() {
    this.#data = {
      projects: [],
      tasks: [],
    };
  }

  createTask(task) {
    if (task.projectId) {
      const project = this.getItemById(this.getProjects(), task.projectId);
      project.tasks.push(task);
    } else {
      this.getTasks().push(task);
    }
  }

  toggleTaskCompletion(task) {
    if (task.projectId) {
      const project = this.getItemById(this.getProjects(), task.projectId);
      const targetTask = this.getItemById(project.tasks, task.id);
      targetTask.completed = !targetTask.completed;
    } else {
      const targetTask = this.getItemById(this.getTasks(), task.id);
      targetTask.completed = !targetTask.completed;
    }
  }

  updateTask(task, newProjectId) {
    // TODO: Handle moving tasks between projects
    if (task.projectId) {
      const projects = this.getProjects();
      const project = this.getItemById(projects, task.projectId);
      let targetTask = this.getItemById(project.tasks, id);
      targetTask = task;
    } else {
      let targetTask = this.getItemById(this.getTasks(), id);
      targetTask = task;
    }
  }

  deleteTask(task) {
    if (task.projectId) {
      const project = this.getItemById(this.getProjects(), task.projectId);
      this.deleteItemById(project.tasks, task.id);
    } else {
      this.#data.tasks = this.deleteItemById(this.getTasks(), task.id);
    }
  }

  createProject(project) {
    this.getProjects().push(project);
  }

  updateProject(project) {
    let targetProject = this.getItemById(this.getProjects(), project.id);
    targetProject = project;
  }

  deleteProject(project) {
    this.#data.projects = this.deleteItemById(this.getProjects(), project.id);
  }

  getData() {
    return this.#data;
  }

  getProjects() {
    return this.#data.projects;
  }

  getTasks() {
    return this.#data.tasks;
  }

  getItemById(arrOfObj, id) {
    return arrOfObj.find((item) => item.id === id);
  }

  deleteItemById(arrOfObj, id) {
    return arrOfObj.filter((item) => item.id !== id);
  }
}

export default InMemoryService;
