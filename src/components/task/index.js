import LocalStorageDataAccessor from "../../data/local-storage";
import TaskController from "../../features/task-controller";
import { refreshComponent } from "../utils";

import { ProjectBoard } from "..";

import "./task.css";

const dataAccessor = new LocalStorageDataAccessor();
const taskController = new TaskController(dataAccessor);

const DeleteTaskBtn = (id, projectId) => {
  const button = document.createElement("button");
  button.classList.add("task__delete-btn");
  button.textContent = "Delete";

  button.addEventListener("click", () => {
    taskController.deleteTask(id, projectId);
    refreshComponent("project-board-component", ProjectBoard());
  });

  return button;
};

const Actions = (task) => {
  const div = document.createElement("div");
  div.classList.add("task__actions");

  div.appendChild(DeleteTaskBtn(task.id, task.projectId));

  return div;
};

const Description = (description) => {
  const p = document.createElement("p");
  p.className = "task__description";
  p.textContent = description;

  return p;
};

const Title = (title) => {
  const h3 = document.createElement("h3");
  h3.className = "task__title";
  h3.textContent = title;

  return h3;
};

const Content = (task) => {
  const div = document.createElement("div");
  div.className = "task__content";

  div.appendChild(Title(task.title));
  div.appendChild(Description(task.description));

  return div;
};

const Checkbox = (task) => {
  const button = document.createElement("button");
  button.className = "task__checkbox";
  button.textContent = task.completed ? "V" : "";

  button.addEventListener("click", () => {
    taskController.toggleTaskCompletion(task.id, task.projectId);
    refreshComponent("project-board-component", ProjectBoard());
  });

  return button;
};

const Body = (task) => {
  const div = document.createElement("div");
  div.className = "task__body";

  div.appendChild(Checkbox(task));
  div.appendChild(Content(task));
  div.appendChild(Actions(task));

  return div;
};

const Task = (task) => {
  const article = document.createElement("article");
  article.className = "task";

  article.appendChild(Body(task));

  return article;
};

export default Task;
