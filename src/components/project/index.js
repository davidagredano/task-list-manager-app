import StateManager from "../../state/state-manager";

import { Task, CreateTaskForm } from "..";

import "./project.css";

const stateManager = new StateManager();

const Title = (project) => {
  const title = document.createElement("h2");
  title.classList.add("project__title");
  title.textContent = project.name;

  return title;
};

const DeleteProjectBtn = (project) => {
  const button = document.createElement("button");
  button.classList.add("project__delete-btn");
  button.textContent = "Delete";

  button.addEventListener("click", () => {
    stateManager.deleteProject(project);
  });

  return button;
};

const Actions = (project) => {
  const div = document.createElement("div");
  div.classList.add("project__actions");

  div.appendChild(DeleteProjectBtn(project));

  return div;
};

const Header = (project) => {
  const header = document.createElement("header");
  header.classList.add("project__header");

  header.appendChild(Title(project));
  header.appendChild(Actions(project));

  return header;
};

const TaskList = (project) => {
  const taskList = document.createElement("div");
  taskList.className = "project__tasks";

  project.tasks.forEach((task) => {
    taskList.appendChild(Task(task));
  });

  return taskList;
};

const Project = (project) => {
  const article = document.createElement("article");
  article.classList.add("project");

  article.appendChild(Header(project));
  article.appendChild(TaskList(project));
  article.appendChild(CreateTaskForm(project.id));

  return article;
};

export default Project;
