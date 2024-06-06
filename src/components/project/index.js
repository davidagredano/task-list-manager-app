import LocalStorageService from "../../services/local-storage-service";
import ProjectService from "../../services/project-service";
import { updateComponent } from "../../state/state-manager";

import { ProjectListItems, ProjectBoard, Task, CreateTaskForm } from "..";

import "./project.css";

const localStorageService = new LocalStorageService();
const projectService = new ProjectService(localStorageService);

const Title = (projectData) => {
  const title = document.createElement("h2");
  title.classList.add("project__title");
  title.textContent = projectData.name;

  return title;
};

const DeleteProjectBtn = (id) => {
  const button = document.createElement("button");
  button.classList.add("project__delete-btn");
  button.textContent = "Delete";

  button.addEventListener("click", () => {
    projectService.deleteProject(id);
    updateComponent("project-list-component", ProjectListItems());
    updateComponent("project-board-component", ProjectBoard());
  });

  return button;
};

const Actions = (projectData) => {
  const div = document.createElement("div");
  div.classList.add("project__actions");

  div.appendChild(DeleteProjectBtn(projectData.id));

  return div;
};

const Header = (projectData) => {
  const header = document.createElement("header");
  header.classList.add("project__header");

  header.appendChild(Title(projectData));
  header.appendChild(Actions(projectData));

  return header;
};

const TaskList = (projectData) => {
  const taskList = document.createElement("div");
  taskList.className = "project__tasks";

  const tasks = projectData.tasks;
  tasks.forEach((task) => {
    taskList.appendChild(Task(task));
  });

  return taskList;
};

const Project = (projectData) => {
  const project = document.createElement("article");
  project.classList.add("project");

  project.appendChild(Header(projectData));
  project.appendChild(TaskList(projectData));
  project.appendChild(CreateTaskForm(projectData.id));

  return project;
};

export default Project;
