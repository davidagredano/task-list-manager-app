import LocalStorageDataAccessor from "../../data/local-storage";
import ProjectController from "../../features/project-controller";
import { refreshComponent } from "../utils";

import { ProjectListItems, ProjectBoard, Task } from "..";

import "./project.css";

const dataAccessor = new LocalStorageDataAccessor();
const projectController = new ProjectController(dataAccessor);

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
    projectController.deleteProject(id);
    refreshComponent("project-list-component", ProjectListItems());
    refreshComponent("project-board-component", ProjectBoard());
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

  return project;
};

export default Project;
