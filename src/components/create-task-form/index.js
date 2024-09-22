import Factory from "../../factory";
import Controller from "../../controller";

import { Input, Div, Button } from "..";

import "./create-task-form.css";

const factory = new Factory();
const controller = new Controller();

const handleAcceptButton = (projectId) => {
  const titleInputId = "task-title-input-" + projectId;
  const title = document.getElementById(titleInputId).value;
  const descriptionInputId = "task-description-input-" + projectId;
  const description = document.getElementById(descriptionInputId).value;

  if (title) {
    const task = factory.createTask(title, description, null, null, projectId);
    controller.createTask(task);
  } else {
    alert("Task title is required");
  }

  document.querySelector(".create-task-form").reset();
};

const handleCancelButton = () => {
  const form = document.querySelector(".create-task-form");
  const addTaskBtn = document.querySelector(".project__add-task-btn");
  form.style.display = "none";
  addTaskBtn.style.display = "block";
};

const CreateTaskForm = (projectId) => {
  const form = document.createElement("form");
  form.className = "create-task-form";
  form.style.display = "none";

  const titleInput = Input(
    "create-task-form__input",
    `task-title-input-${projectId}`,
    "Title"
  );
  const descriptionInput = Input(
    "create-task-form__input",
    `task-description-input-${projectId}`,
    "Description"
  );
  const btnGroup = Div("create-task-form__btn-group");
  const cancelBtn = Button("Cancel", handleCancelButton);
  const acceptBtn = Button("Add", () => handleAcceptButton(projectId));

  form.appendChild(titleInput);
  form.appendChild(descriptionInput);
  form.appendChild(btnGroup);
  btnGroup.appendChild(cancelBtn);
  btnGroup.appendChild(acceptBtn);

  return form;
};

export default CreateTaskForm;
