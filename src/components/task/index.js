import StateManager from "../../state/state-manager";

import "./task.css";

const stateManager = new StateManager();

const DeleteTaskBtn = (task) => {
  const button = document.createElement("button");
  button.classList.add("task__delete-btn");
  button.textContent = "Delete";

  button.addEventListener("click", () => {
    stateManager.deleteTask(task);
  });

  return button;
};

const Actions = (task) => {
  const div = document.createElement("div");
  div.classList.add("task__actions");

  div.appendChild(DeleteTaskBtn(task));

  return div;
};

const Description = (task) => {
  const p = document.createElement("p");
  p.className = "task__description";
  p.textContent = task.description;

  return p;
};

const Title = (task) => {
  const h3 = document.createElement("h3");
  h3.className = "task__title";
  h3.textContent = task.title;

  return h3;
};

const Content = (task) => {
  const div = document.createElement("div");
  div.className = "task__content";

  div.appendChild(Title(task));
  div.appendChild(Description(task));

  return div;
};

const Checkbox = (task) => {
  const button = document.createElement("button");
  button.className = "task__checkbox";
  button.textContent = task.completed ? "V" : "";

  button.addEventListener("click", () => {
    stateManager.toggleTaskCompletion(task);
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
