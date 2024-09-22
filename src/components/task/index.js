import Controller from "../../controller";

import { TaskViewDialog, Div, Button, Title } from "..";

import "./task.css";

const controller = new Controller();

const editTaskBtnHandler = (task) => {
  const dialog = TaskViewDialog(task);
  dialog.showModal();
};

const Description = (task) => {
  const p = document.createElement("p");
  p.className = "task__description";
  p.textContent = task.description;

  return p;
};

const toggleTaskCompletion = (task) => controller.toggleTaskCompletion(task);

const Task = (task) => {
  const article = document.createElement("article");
  article.className = "task";

  const taskbody = Div("task__body");
  const checkbox = Button(
    task.completed ? "V" : "",
    () => toggleTaskCompletion(task),
    "task__checkbox"
  );
  if (task.priority) {
    checkbox.style.borderWidth = "2px";
  }
  if (task.priority === "1") {
    checkbox.style.borderColor = "red";
  } else if (task.priority === "2") {
    checkbox.style.borderColor = "orange";
  } else if (task.priority === "3") {
    checkbox.style.borderColor = "blue";
  } else if (task.priority === "4") {
    checkbox.style.borderWidth = "1px";
  }
  const taskContent = Div("task__content");
  const title = Title("task__title", task.title);
  const description = Description(task);

  const taskActions = Div("task__actions");
  const editTaskBtn = Button("Edit", () => editTaskBtnHandler(task));
  const deleteTaskBtn = Button("Delete", () => controller.deleteTask(task));

  article.appendChild(taskbody);
  taskbody.appendChild(checkbox);
  taskbody.appendChild(taskContent);
  taskContent.appendChild(title);
  taskContent.appendChild(description);
  taskbody.appendChild(taskActions);
  taskActions.appendChild(editTaskBtn);
  taskActions.appendChild(deleteTaskBtn);

  return article;
};

export default Task;
