import Controller from "../../controller";

import { Input, Div, Button, Title } from "..";

import "./task-view-dialog.css";

const controller = new Controller();

const removeDialog = () => {
  document.querySelector("#task-view-dialog").remove();
};

const acceptBtnHandler = (task) => {
  const titleInput = document.querySelector("#task-title-input");
  const descriptionInput = document.querySelector("#task-description-input");
  task.title = titleInput.value;
  task.description = descriptionInput.value;
  controller.updateTask(task);
  removeDialog();
};

const TaskViewDialog = (task) => {
  const dialog = document.createElement("dialog");
  dialog.id = "task-view-dialog";
  dialog.classList.add("task-view-dialog");

  const wrapper = Div("task-view-dialog__wrapper");
  const title = Title("task-view-dialog__title", "Edit Task");
  const form = document.createElement("form");
  form.className = "task-view-dialog__form";
  const titleInput = Input(
    "task-view-dialog__input",
    "task-title-input",
    "Title",
    task.title
  );
  const descriptionInput = Input(
    "task-view-dialog__input",
    "task-description-input",
    "Description",
    task.description
  );
  const btnGroup = Div("task-view-dialog__btn-group");
  const cancelBtn = Button("Cancel", removeDialog);
  const acceptBtn = Button("Accept", () => acceptBtnHandler(task)); // TODO: Implement acceptBtnHandler

  dialog.appendChild(wrapper);
  wrapper.appendChild(title);
  wrapper.appendChild(form);
  form.appendChild(titleInput);
  form.appendChild(descriptionInput);
  form.appendChild(btnGroup);
  btnGroup.appendChild(cancelBtn);
  btnGroup.appendChild(acceptBtn);

  document.body.appendChild(dialog);

  return dialog;
};

export default TaskViewDialog;
